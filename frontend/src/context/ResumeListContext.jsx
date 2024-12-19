import { resumeDetails } from "@/data";
import { createContext, useState } from "react";

export const ResumeListContext = createContext();

export function ResumeListProvider({ children }) {
  
  const [resumeData, setResumeData] = useState(resumeDetails);
  const [isDark, setIsDark] = useState(false);

  const data = {
    resumeData,
    setResumeData,
    isDark,
    setIsDark,
  };

  return (
    <ResumeListContext.Provider value={data}>
      {children}
    </ResumeListContext.Provider>
  );
}
