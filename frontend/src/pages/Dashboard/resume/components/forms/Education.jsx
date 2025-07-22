import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { updateResumeDetail } from "./../../../../../service/GlobalApi";

const formData = {
  universityName: "",
  degree: "",
  branch: "",
  startDate: "",
  endDate: "",
  description: "",
};
function Education({ resumeData, setResumeData, setIsActiveNext,isDark }) {
  const [educationList, setEducationList] = useState([formData]);
  const { resumeId } = useParams();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = {
        data: { education: educationList },
      };
      await updateResumeDetail(resumeId, data);

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
    setEducationList((prev) =>
      prev.map((item, i) => (idx === i ? { ...item, [name]: value } : item))
    );
  };
  const addMoreEducation = () => {
    const idx = educationList.length - 1;
    if (!educationList[idx].universityName)
      return toast.info("Please enter university name");
    setEducationList([...educationList, formData]);
  };
  const removeEducation = () => {
    setEducationList((prev) => prev.slice(0, -1));
  };
  useEffect(() => {
    if (
      educationList[0].universityName ||
      educationList[0].degree ||
      educationList[0].branch
    ) {
      setResumeData({ ...resumeData, education: educationList });
    }
  }, [educationList]);

  return (
    <div className={`p-5 rounded-lg border-t-pink-500 md:shadow-lg border-t-4 ${
      isDark ? "md:shadow-slate-600" : ""
    }`}>
      <h1 className="font-bold text-lg ">Education</h1>
      <p className="">Add Your educational details</p>
      <div className="border rounded-md px-2 mt-3 py-3">
        <form onSubmit={handleSubmit}>
          {educationList.map( 
            (
              {
                universityName,
                degree,
                branch,
                startDate,
                endDate,
                description,
              },
              idx
            ) => (
              <div key={idx} className="grid grid-cols-2 gap-3 mb-2">
                <div className="col-span-2">
                  <label className="text-sm">University Name</label>
                  <Input
                    name="universityName"
                     className="text-black"
                    value={universityName}
                    required
                    onChange={(e) => handleInputChange(e, idx)}
                  />
                </div>
                <div>
                  <label className="text-sm">Degree</label>
                  <Input
                    name="degree"
                     className="text-black"
                    value={degree}
                    required
                    onChange={(e) => handleInputChange(e, idx)}
                  />
                </div>
                <div>
                  <label className="text-sm">Branch</label>
                  <Input
                    name="branch"
                     className="text-black"
                    value={branch}
                    required
                    onChange={(e) => handleInputChange(e, idx)}
                  />
                </div>
                <div>
                  <label className="text-sm">Start Date</label>
                  <Input
                    type="date"
                    value={startDate}
                     className="text-black"
                    required
                    name="startDate"
                    onChange={(e) => handleInputChange(e, idx)}
                  />
                </div>
                <div>
                  <label className="text-sm">End Date</label>
                  <Input
                    type="date"
                    value={endDate}
                     className="text-black"
                    required
                    name="endDate"
                    onChange={(e) => handleInputChange(e, idx)}
                  />
                </div>
                <div className="col-span-2">
                  <label className="text-sm">Description</label>
                  <Textarea
                    name="description"
                    value={description}
                     className="text-black"
                    required
                    onChange={(e) => handleInputChange(e, idx)}
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
                onClick={addMoreEducation}
              >
                Add More Education
              </Button>
              {resumeData.education.length > 1 && (
                <Button
                  variant="outline"
                  type="button"
                   className="text-black"
                  size="sm"
                  onClick={removeEducation}
                >
                  Remove
                </Button>
              )}
            </div>
            <Button
              size="sm"
              type="submit"
              disabled={!educationList[0].universityName}
            >
              {loading ? <Loader2 className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Education;
