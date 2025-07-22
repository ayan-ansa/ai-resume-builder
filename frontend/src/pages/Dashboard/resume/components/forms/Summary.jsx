import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { updateResumeDetail } from "../../../../../service/GlobalApi";
import { Loader2, Sparkles } from "lucide-react";
import generateAIResponse from "@/config/gemini";
import { toast } from "react-toastify";
const PROMPT =
  "Please generate summary in short for {position} resume give random experience year in 3 lines";

function Summary({ resumeData, setResumeData, setIsActiveNext,isDark }) {
  const [summary, setSummary] = useState("");
  const [resLoading, setResLoading] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  const { resumeId } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSaveLoading(true);
      const data = {
        data: summary,
      };
      await updateResumeDetail(resumeId, data);
      toast.success("Details Updated Successfully");
      setIsActiveNext(true);
      setSaveLoading(false);
    } catch (error) {
      console.log(error);
      setSaveLoading(false);
    }
  };
  const handleChange = (e) => {
    setSummary({ summary: e.target.value });
    setResumeData({ ...resumeData, summary: e.target.value });
  };

  const getSummary = async () => {
    const prompt = resumeData
      ? PROMPT.replace("{position}", resumeData.jobTitle)
      : PROMPT.replace("{position}", "Frontend Developer");
    try {
      setResLoading(true);
      const res = await generateAIResponse(prompt);
      handleSetResponse(res);
      setResLoading(false);
    } catch (error) {
      console.log(error);
      setResLoading(false);
    }
  };

  const handleSetResponse = (text) => {
    let index = 0;
    let currentSummary = "";

    setResumeData((prev) => ({ ...prev, summary: "" }));
    setSummary("");

    const interval = setInterval(() => {
      if (index < text.length && text[index] !== "\n") {
        currentSummary += text[index];

        setSummary({ summary: currentSummary });
        setResumeData((prev) => ({
          ...prev,
          summary: currentSummary,
        }));

        index++;
      } else {
        clearInterval(interval);
      }
    }, 20);
  };

  return (
    <div className={`p-5 rounded-lg border-t-pink-500 md:shadow-lg border-t-4 ${
      isDark ? "md:shadow-slate-600" : ""
    }`}>
      <h1 className="font-bold text-lg">Summary</h1>
      <p>Add Summary for your job title</p>
      <form className="mt-6" onSubmit={handleSubmit}>
        <div className="flex justify-between items-end">
          <label className="text-sm font-poppins">Add Summary</label>
          <Button
            size="sm"
            type="button"
            className="border-violet-500 text-violet-500 font-poppins"
            variant="outline"
            onClick={getSummary}
          >
            {resLoading ? (
              <Loader2 className="animate-spin" />
            ) : (
              <>
                <Sparkles /> Generate
              </>
            )}
          </Button>
        </div>
        <Textarea
          required
           className="text-black my-3"
          value={resumeData.summary}
          onChange={handleChange}
        />
        <div className="flex justify-end">
          <Button type="submit" disabled={!summary} className="font-poppins">
            {saveLoading ? <Loader2 className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Summary;
