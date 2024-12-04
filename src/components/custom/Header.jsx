import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import logo from "./../../assets/logo.svg";
import { useUser, UserButton } from "@clerk/clerk-react";
import { Moon, Sun } from "lucide-react";
import { useContext, useEffect } from "react";
import { ResumeListContext } from "@/context/ResumeListContext";

function Header() {
  const { isSignedIn } = useUser();
  const { pathname } = useLocation();
  const { isDark, setIsDark } = useContext(ResumeListContext);

  const changeTheme = () => {
    if (isDark) {
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  });

  return (
    <div
      id="not-print"
      className={`flex items-center justify-between py-3 px-3 sm:px-6 shadow-md `}
    >
      <Link to={"/"}>
        <img src={logo} width={80} alt="logo" />
      </Link>
      <div className="flex items-center gap-4">
        <div className="flex items-center" onClick={changeTheme}>
          {isDark ? (
            <Sun className="cursor-pointer" />
          ) : (
            <Moon className="cursor-pointer" />
          )}
        </div>
        {isSignedIn ? (
          <div className="flex gap-3 items-center">
            <Link to={pathname === "/dashboard" ? "/" : "/dashboard"}>
              <Button
                size={pathname === "/dashboard" ? "sm" : ""}
                className="font-poppins"
              >
                {pathname === "/dashboard" ? "Home" : "Dashboard"}
              </Button>
            </Link>
            <UserButton />
          </div>
        ) : (
          <Link to={"/auth/signin"}>
            <Button className="font-poppins">Get Started</Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
