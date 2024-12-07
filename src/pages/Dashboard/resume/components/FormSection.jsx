import { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home } from "lucide-react";
import PersonalDetail from "./forms/PersonalDetail";
import Summary from "./forms/Summary";
import Experience from "./forms/Experience";
import Education from "./forms/Education";
import Skills from "./forms/Skills";
import { ResumeListContext } from "@/context/ResumeListContext";
import { Link, Navigate, useParams } from "react-router-dom";
import ThemeColor from "../../components/ThemeColor";

function FormSection({ isActiveNext, setIsActiveNext }) {
  const [page, setPage] = useState(1);
  const { resumeId } = useParams();
  const { resumeData, setResumeData, isDark } = useContext(ResumeListContext);

  const setNextPage = () => {
    setPage(page + 1);
    setIsActiveNext(false);
  };

  return (
    <div className="md:order-1 order-2">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Link to="/">
            <Button size="sm">
              <Home />
            </Button>
          </Link>
          <ThemeColor
            resumeData={resumeData}
            setResumeData={setResumeData}
            isDark={isDark}
          />
        </div>
        <div className="space-x-2">
          {page > 1 && (
            <Button
              size="sm"
              className="font-poppins"
              onClick={() => setPage(page - 1)}
            >
              Prev
            </Button>
          )}

          <Button
            size="sm"
            className="font-poppins"
            disabled={!isActiveNext}
            onClick={setNextPage}
          >
            Next
            <ArrowRight />
          </Button>
        </div>
      </div>
      {page == 1 ? (
        <PersonalDetail
          resumeData={resumeData}
          setResumeData={setResumeData}
          setIsActiveNext={setIsActiveNext}
          isDark={isDark}
        />
      ) : page == 2 ? (
        <Summary
          resumeData={resumeData}
          setResumeData={setResumeData}
          setIsActiveNext={setIsActiveNext}
          isDark={isDark}
        />
      ) : page == 3 ? (
        <Experience
          resumeData={resumeData}
          setResumeData={setResumeData}
          setIsActiveNext={setIsActiveNext}
          isDark={isDark}
        />
      ) : page == 4 ? (
        <Education
          resumeData={resumeData}
          setResumeData={setResumeData}
          setIsActiveNext={setIsActiveNext}
          isDark={isDark}
        />
      ) : page == 5 ? (
        <Skills
          resumeData={resumeData}
          setResumeData={setResumeData}
          setIsActiveNext={setIsActiveNext}
          isDark={isDark}
        />
      ) : (
        <Navigate to={"/dashboard/resume/" + resumeId + "/view"} />
      )}
    </div>
  );
}

export default FormSection;
