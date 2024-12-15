import { useContext, useEffect, useState } from "react";
import FormSection from "../components/FormSection";
import ResumePreview from "../components/ResumePreview";
import { ResumeListContext } from "@/context/ResumeListContext";
import { useParams } from "react-router-dom";
import { getUserResume } from "./../../../../service/GlobalApi";
import { resumeDetails } from "@/data";

function EditResume() {
  const [isActiveNext, setIsActiveNext] = useState(false);
  const { setResumeData } = useContext(ResumeListContext);
  const { resumeId } = useParams();

  const getResumeData = async () => {
    const res = await getUserResume(resumeId);
    const data = res.data.data;
    if (data.firstName && data.firstName) {
      setResumeData(data);
    } else {
      setResumeData(resumeDetails);
    }
  };

  useEffect(() => {
    getResumeData();
  }, [isActiveNext]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl px-2 md:mt-4 mx-auto gap-4">
      <FormSection
        isActiveNext={isActiveNext}
        setIsActiveNext={setIsActiveNext}
      />
      <ResumePreview />
    </div>
  );
}

export default EditResume;
