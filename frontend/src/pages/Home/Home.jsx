import Header from "@/components/custom/Header";
import ytlogo from "./../../assets/ytlogo.svg";
import reddit from "./../../assets/reddit.svg";
import phunt from "./../../assets/phunt.svg";
import { Link } from "react-router-dom";
import Card from "./components/Card";
import { Button } from "@/components/ui/button";
import { ResumeListContext } from "@/context/ResumeListContext";
import { useContext } from "react";
import { cardData } from "./../../data";
import { ArrowRight, ChevronRight, Video } from "lucide-react";

function Home() {
  
  const { isDark } = useContext(ResumeListContext);
 
  return (
    <div className={`min-h-screen ${isDark ? "bg-[#1D2A35] text-white" : ""}`}>
      <Header />
      <div className="max-w-3xl mx-auto mt-16 flex items-center flex-col gap-7 px-4">
        <Link
          className={`flex items-center gap-6 p-1 transition rounded-full ${
            isDark
              ? "bg-slate-700 hover:bg-slate-600"
              : "bg-gray-200 hover:bg-gray-300"
          } `}
        >
          <span className="px-4 text-sm cursor-pointer py-1 bg-primary rounded-full text-[#f1f1f1]">
            New
          </span>
          <div className="flex items-center gap-1 mr-1">
            <p className="text-[15px]">All New Apps</p>
            <ChevronRight className="w-5 h-5" />
          </div>
        </Link>
        <div className="text-center flex flex-col gap-3">
          <h1 className="font-black text-4xl md:text-6xl">
            Build Your Resume <span className="text-primary">With AI</span>
          </h1>
          <p className="text-gray-500 md:text-lg">
            Effortlessly Craft a Standout Resume with Our AI-Powered Resume
            Builder
          </p>
          <div className="flex items-center mt-4 mb-10 justify-center gap-4">
            <Link
              to={"/dashboard"}
              className="inline-flex gap-2 px-4 text-white py-3 bg-primary rounded-md"
            >
              Get Started
              <ArrowRight />
            </Link>
            <Link
              className={`inline-flex transition gap-2 px-4 border py-3 rounded-md ${
                isDark ? "hover:bg-slate-700" : "hover:bg-gray-100"
              } `}
            >
              <Video />
              Watch Video
            </Link>
          </div>
        </div>
        <p className="font-medium text-gray-400">FEATURED IN</p>
        <div className="grid grid-cols-3 gap-3 place-items-center w-full mt-2">
          <img
            src={ytlogo}
            loading="lazy"
            className="media490:w-36 cursor-pointer "
            alt="ytlogo"
          />

          <img
            src={phunt}
            loading="lazy"
            className="media490:w-36 cursor-pointer"
            alt="phunt"
          />

          <img
            src={reddit}
            loading="lazy"
            className="media490:w-36 cursor-pointer"
            alt="reddit"
          />
        </div>
      </div>
      <div className="max-w-6xl text-center mx-auto pt-24 pb-14 px-4 lg:px-0">
        <div>
          <h1 className="font-bold text-3xl mb-3">How it Works?</h1>
          <p className="text-gray-400">
            Give mock interview in just 3 simplar easy step
          </p>
        </div>
        <div className="py-10 grid md:grid-cols-3 grid-cols-1 gap-6">
          {cardData.map((item, idx) => (
            <Card
              key={idx}
              title={item.title}
              description={item.desc}
              icon={<item.icon />}
              isDark={isDark}
            />
          ))}
        </div>
        <Link to={"/auth/signin"}>
          <Button>Get Stared Today</Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
