import { Input } from "@/components/ui/input";
import { updateResumeDetail } from "./../../../../../service/GlobalApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "react-toastify";

const formData = {
  language: "",
  framework: "",
  database: "",
  tool: "",
};
function Skills({ resumeData, setResumeData, setIsActiveNext,isDark }) {
  const [loading, setLoading] = useState(false);
  const { resumeId } = useParams();
  const [skillList, setSkillList] = useState([formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = {
        data: { skills: skillList },
      };
      const res = await updateResumeDetail(resumeId, data);
      toast.success("Details Updated Successfully");
      setLoading(false);
      setIsActiveNext(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const handleInputChange = (e, idx) => {
    const { name, value } = e.target;
    setSkillList((prev) =>
      prev.map((item, i) => (idx === i ? { ...item, [name]: value } : item))
    );
  };
  const addMoreSkill = () => {
    const idx = skillList.length - 1;
    if (!skillList[idx].language) return toast.info("Please enter language");
    setSkillList([...skillList, formData]);
  };
  const removeSkill = () => {
    setSkillList((prev) => prev.slice(0, -1));
  };
  useEffect(() => {
    if (
      skillList[0].language ||
      skillList[0].database ||
      skillList[0].framework ||
      skillList[0].tool
    ) {
      setResumeData({ ...resumeData, skills: skillList });
    }
  }, [skillList]);

  return (
    <div className={`p-5 rounded-lg border-t-pink-500 md:shadow-lg border-t-4 ${
      isDark ? "md:shadow-slate-600" : ""
    }`}>
      <h1 className="font-bold text-lg ">Skills</h1>
      <p className="">Add Your professional skills</p>
      <div className="border rounded-md px-2 mt-3 py-3">
        <form onSubmit={handleSubmit}>
          {skillList.map(({ language, framework, database, tool }, idx) => (
            <div key={idx} className="grid grid-cols-2 gap-3 mb-2">
              <div>
                <label className="text-sm">Language</label>
                <Input
                  name="language"
                   className="text-black"
                  value={language}
                  required
                  onChange={(e) => handleInputChange(e, idx)}
                />
              </div>
              <div>
                <label className="text-sm">Framework</label>
                <Input
                  name="framework"
                   className="text-black"
                  value={framework}
                  required
                  onChange={(e) => handleInputChange(e, idx)}
                />
              </div>
              <div>
                <label className="text-sm">Database</label>
                <Input
                  name="database"
                   className="text-black"
                  value={database}
                  required
                  onChange={(e) => handleInputChange(e, idx)}
                />
              </div>
              <div>
                <label className="text-sm">Tool</label>
                <Input
                  name="tool"
                   className="text-black"
                  value={tool}
                  required
                  onChange={(e) => handleInputChange(e, idx)}
                />
              </div>
            </div>
          ))}
          <div className="flex justify-between mt-3">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                type="button"
                 className="text-black"
                size="sm"
                onClick={addMoreSkill}
              >
                Add More Skills
              </Button>
              {skillList.length > 1 && (
                <Button
                  variant="outline"
                  type="button"
                   className="text-black"
                  size="sm"
                  onClick={removeSkill}
                >
                  Remove
                </Button>
              )}
            </div>
            <Button size="sm" type="submit" disabled={!skillList[0].language}>
              {loading ? <Loader2 className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Skills;
