import { useUser } from "@clerk/clerk-react";
import "./App.css";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./components/custom/Header";
import { ResumeListContext } from "./context/ResumeListContext";
import { Suspense, useContext } from "react";

function App() {
  const { isSignedIn, isLoaded } = useUser();
  const { isDark } = useContext(ResumeListContext);

  if (!isSignedIn && isLoaded) {
    return <Navigate to={"/auth/signin"} />;
  }

  return (
    <div className={`min-h-screen ${isDark ? "bg-[#1D2A35] text-white" : ""}`}>
      <Header />
      <Suspense
        fallback={
          <div id="loader" className="min-h-[80vh] grid place-items-center">
            <div className="h-10 w-10 border-4 border-t-[#000] rounded-full border-[#bdbdbd] animate-spin"></div>
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
}

export default App;
