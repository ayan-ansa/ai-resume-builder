import PersonalInfo from "./sections/PersonalInfo";
import SummarySection from "./sections/SummarySection";
import ExperienceSection from "./sections/ExperienceSection";
// import ProjectSection from "./sections/ProjectSection";
import EducationSection from "./sections/EducationSection";
import SkillSection from "./sections/SkillSection";
import { ResumeListContext } from "@/context/ResumeListContext";
import { useContext } from "react";

function ResumePreview() {
  const { resumeData, isDark } = useContext(ResumeListContext);
  const { summary, experience, education, skills, themeColor } = resumeData;

  return (
    <div
      id="download"
      className={`px-4 sm:px-8 py-6 rounded md:shadow-lg md:order-2 order-1 ${
        isDark ? "md:shadow-slate-600" : ""
      }`}
    >
      <PersonalInfo resumeData={resumeData} />
      <SummarySection summary={summary} themeColor={themeColor} />
      <ExperienceSection experience={experience} themeColor={themeColor} />
      {/* <ProjectSection projects={resumeData.projects} /> */}
      <EducationSection education={education} themeColor={themeColor} />
      <SkillSection skills={skills} themeColor={themeColor} />
    </div>
  );
}

export default ResumePreview;
