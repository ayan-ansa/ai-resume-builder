import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignInPage from "./pages/Auth/SignInPage"
import { ClerkProvider } from "@clerk/clerk-react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ResumeListProvider } from "./context/ResumeListContext";

const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const EditResume = lazy(() =>
  import("./pages/Dashboard/resume/[resumeId]/EditResume")
);

const ViewResume = lazy(() =>
  import("./pages/Dashboard/resume/[resumeId]/ViewResume")
);

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/resume/:resumeId/edit",
        element: <EditResume />,
      },
      {
        path: "/dashboard/resume/:resumeId/view",
        element: <ViewResume />,
      },
    ],
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth/signin",
    element: <SignInPage />,
  },
]);
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <ResumeListProvider>
      <RouterProvider router={router} />
    </ResumeListProvider>
    <ToastContainer />
  </ClerkProvider>
);
