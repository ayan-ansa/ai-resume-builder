import { ResumeListContext } from "@/context/ResumeListContext";
import { SignIn, useUser } from "@clerk/clerk-react";
import { useContext } from "react";

function SignInPage() {
  const { isLoaded } = useUser();
  const { isDark } = useContext(ResumeListContext);
  return (
    <div
      className={`h-screen flex items-center justify-center ${
        isDark ? "bg-[#1D2A35]" : ""
      }`}
    >
      {!isLoaded ? (
        <div id="loader" className="min-h-[80vh] grid place-items-center">
          <div className="h-10 w-10 border-4 border-t-[#000] rounded-full border-[#bdbdbd] animate-spin"></div>
        </div>
      ) : (
        <SignIn className="bg-black" />
      )}
    </div>
  );
}

export default SignInPage;
