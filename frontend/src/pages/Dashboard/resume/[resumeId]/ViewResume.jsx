import { Button } from "@/components/ui/button";
import ResumePreview from "../components/ResumePreview";

function ViewResume() {
  const handleDownload = () => {
    window.print();
  };

  return (
    <>
      <div id="not-print" className="max-w-3xl mx-auto my-4 px-2">
        <h2 className="text-xl md:text-2xl text-center text-[#8055A2] font-medium">
          Congrats! Your Ultimate AI generated Resume is ready !
        </h2>
        <p className="text-center md:text-lg text-gray-500">
          Now you are ready to download your resume and you can also share it
          with your friends
        </p>
        <div className="flex items-center justify-between mt-3">
          <Button size="sm" onClick={handleDownload}>
            Download
          </Button>

          <Button
            size="sm"
            onClick={() => navigator.share({ url: window.location.href })}
          >
            Share 🔗
          </Button>
        </div>
      </div>
      <div className="max-w-3xl mx-auto">
        <ResumePreview />
      </div>
    </>
  );
}

export default ViewResume;
