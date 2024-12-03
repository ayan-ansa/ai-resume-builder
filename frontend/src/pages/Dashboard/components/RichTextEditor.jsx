import { Button } from "@/components/ui/button";
import generateAIResponse from "@/config/gemini";
import { Loader2, Sparkles } from "lucide-react";
import { useState } from "react";
import {
  BtnBold,
  BtnBulletList,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnStrikeThrough,
  BtnUnderline,
  Editor,
  EditorProvider,
  Separator,
  Toolbar,
} from "react-simple-wysiwyg";
import { toast } from "react-toastify";
const PROMPT =
  "Generate {position} job title summary based on {company} company in 5 lines";

function RichTextEditor({
  jobTitle,
  company,
  idx,
  workSummary,
  setExperienceList,
}) {
  const [loading, setLoading] = useState(false);

  const generateResponse = async () => {
    if (!jobTitle) {
      return toast.error("Please enter job title");
    } else if (!company) {
      return toast.error("Please enter company name");
    }
    try {
      setLoading(true);
      const prompt = PROMPT.replace("{position}", jobTitle).replace(
        "{company}",
        company
      );
      const res = await generateAIResponse(prompt);
      onChange(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  function onChange(text) {
    if (typeof text === "object") {
      setExperienceList((prev) =>
        prev.map((item, i) =>
          i === idx ? { ...item, workSummary: text.target.value } : item
        )
      );
    } else {
      let index = 0;
      let currentSummary = "";

      const interval = setInterval(() => {
        if (index < text.length) {
          currentSummary += text[index];

          setExperienceList((prev) =>
            prev.map((item, i) =>
              i === idx ? { ...item, workSummary: currentSummary } : item
            )
          );

          index++;
        } else {
          clearInterval(interval);
        }
      }, 20);
    }
  }

  return (
    <div>
      <div className="flex items-end justify-between mb-3">
        <label className="text-sm">Summary</label>
        <Button
          size="sm"
          className="border-violet-500 text-violet-500"
          variant="outline"
          type="button"
          onClick={generateResponse}
        >
          {loading ? (
            <Loader2 className="animate-spin" />
          ) : (
            <>
              <Sparkles /> Generate
            </>
          )}
        </Button>
      </div>
      <EditorProvider>
        <Editor value={workSummary} onChange={onChange}>
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <Separator />
            <BtnLink />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  );
}

export default RichTextEditor;
