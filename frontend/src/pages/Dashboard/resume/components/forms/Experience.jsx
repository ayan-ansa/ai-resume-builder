import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import RichTextEditor from "@/pages/Dashboard/components/RichTextEditor";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { updateResumeDetail } from "./../../../../../service/GlobalApi";
import { Loader2 } from "lucide-react";

const formData = {
  role: "",
  company: "",
  startDate: "",
  endDate: "",
  workSummary: "",
};

function Experience({ resumeData, setResumeData, setIsActiveNext,isDark }) {
  const [experienceList, setExperienceList] = useState([formData]);
  const [loading, setLoading] = useState(false);
  const { resumeId } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = {
        data: { experience: experienceList },
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
    setExperienceList((prev) =>
      prev.map((item, i) => (idx === i ? { ...item, [name]: value } : item))
    );
  };

  const addMoreExperience = () => {
    const idx = experienceList.length - 1;
    if (!experienceList[idx].role) return toast.info("Please enter job title");
    setExperienceList([...experienceList, formData]);
  };

  const removeExperience = () => {
    setExperienceList((prev) => prev.slice(0, -1));
  };

  useEffect(() => {
    if (
      experienceList[0].role ||
      experienceList[0].company ||
      experienceList[0].startDate ||
      experienceList[0].endDate
    ) {
      setResumeData({ ...resumeData, experience: experienceList });
    }
  }, [experienceList]);

  return (
    <div className={`p-5 rounded-lg border-t-pink-500 md:shadow-lg border-t-4 ${
      isDark ? "md:shadow-slate-600" : ""
    }`}>
      <h1 className="font-bold text-lg">Professional Experience</h1>
      <p>Add Your previous job experience</p>

      <div className="border rounded-md px-2 mt-3 py-3">
        <form onSubmit={handleSubmit}>
          {experienceList &&
            experienceList.map(
              ({ role, company, startDate, endDate, workSummary }, idx) => (
                <div key={idx} className="grid grid-cols-2 gap-3 mb-2">
                  <div>
                    <label className="text-sm">Job Title</label>
                    <Input
                      name="role"
                      value={role}
                       className="text-black"
                      required
                      onChange={(e) => handleInputChange(e, idx)}
                    />
                  </div>
                  <div>
                    <label className="text-sm">Company Name</label>
                    <Input
                      value={company}
                      name="company"
                       className="text-black"
                      required
                      onChange={(e) => handleInputChange(e, idx)}
                    />
                  </div>
                  <div>
                    <label className="text-sm">Start Date</label>
                    <Input
                      type="date"
                      value={startDate}
                      required
                       className="text-black"
                      name="startDate"
                      onChange={(e) => handleInputChange(e, idx)}
                    />
                  </div>
                  <div>
                    <label className="text-sm">End Date</label>
                    <Input
                      type="date"
                      required
                      value={endDate}
                      name="endDate"
                       className="text-black"
                      onChange={(e) => handleInputChange(e, idx)}
                    />
                  </div>

                  <div className="col-span-2">
                    <RichTextEditor
                      jobTitle={role}
                      company={company}
                      idx={idx}
                      workSummary={workSummary}
                      setExperienceList={setExperienceList}
                    />
                  </div>
                </div>
              )
            )}
          <div className="flex justify-between mt-3">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                type="button"
                className="text-black"
                size="sm"
                onClick={addMoreExperience}
              >
                Add More Experience
              </Button>
              {experienceList.length > 1 && (
                <Button
                  variant="outline"
                  type="button"
                   className="text-black"
                  size="sm"
                  onClick={removeExperience}
                >
                  Remove
                </Button>
              )}
            </div>
            <Button size="sm" type="submit" disabled={!experienceList[0].role}>
              {loading ? <Loader2 className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Experience;
