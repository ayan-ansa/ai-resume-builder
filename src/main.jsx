import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import { ClerkProvider } from "@clerk/clerk-react";
import SignInPage from "./pages/Auth/SignInPage";
import EditResume from "./pages/Dashboard/resume/[resumeId]/EditResume";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ViewResume from "./pages/Dashboard/resume/[resumeId]/ViewResume";
import { ResumeListProvider } from "./context/ResumeListContext";

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
        element: <ViewResume/>,
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
    <ToastContainer/>
  </ClerkProvider>
);
