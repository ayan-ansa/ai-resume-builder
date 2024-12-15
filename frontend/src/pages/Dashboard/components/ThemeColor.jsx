import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { updateResumeDetail } from "@/service/GlobalApi";
import { LayoutGrid } from "lucide-react";
import { useParams } from "react-router-dom";

function ThemeColor({ resumeData, setResumeData, isDark }) {
  const { resumeId } = useParams();

  const colors = [
    "#FF5733",
    "#8055A2",
    "#5733FF",
    "#FF33A8",
    "#33D1FF",
    "#FFD633",
    "#FF8C33",
    "#7FFF00",
    "#8C33FF",
    "#DC143C",
    "#FF3366",
    "#33FF99",
    "#3333FF",
    "#FFB533",
    "#3399FF",
    "#FF3399",
    "#228B22",
    "#433155",
    "#FF33FF",
    "#A053CF",
  ];

  const onChange = async (color) => {
    try {
      setResumeData({ ...resumeData, themeColor: color });
      const data = {
        data: { themeColor: color },
      };
      const res = await updateResumeDetail(resumeId, data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="outline" className="font-poppins text-black" size="sm">
          <LayoutGrid /> Theme
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={`px-3 py-2 ${isDark ? "bg-[#1D2A35] text-white" : ""}`}
      >
        <h2 className="mb-2">Choose your theme color</h2>
        <div className="grid grid-cols-5 place-items-center gap-2">
          {colors.map((color, idx) => (
            <div
              key={idx}
              className="h-6 w-6 rounded-full border cursor-pointer hover:border-black"
              style={{ backgroundColor: color }}
              onClick={() => onChange(color)}
            ></div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default ThemeColor;
