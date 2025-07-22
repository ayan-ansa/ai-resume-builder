import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useParams } from "react-router-dom";
import { updateResumeDetail } from "../../../../../service/GlobalApi";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "react-toastify";

function PersonalDetail({
  resumeData,
  setResumeData,
  setIsActiveNext,
  isDark,
}) {
  const { resumeId } = useParams();
  const { firstName, lastName, jobTitle, address, phone, email } = resumeData;
  const [formData, setFormData] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = {
        data: formData,
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setResumeData({ ...resumeData, [name]: value });
  };

  return (
    <div
      className={`p-5 rounded-lg border-t-pink-500 md:shadow-lg border-t-4 ${
        isDark ? "md:shadow-slate-600" : ""
      }`}
    >
      <h1 className="font-bold text-lg ">Personal Detail</h1>
      <p className="">Get Started with the basic information</p>
      <form className="mt-3 flex flex-col gap-2" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="text-sm font-poppins">First Name</label>
            <Input
              type="text"
              value={firstName}
              className="text-black"
              onChange={handleChange}
              name="firstName"
              required
            />
          </div>
          <div>
            <label className="text-sm font-poppins">Last Name</label>
            <Input
              type="text"
              value={lastName}
              className="text-black"
              onChange={handleChange}
              name="lastName"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3">
          <div>
            <label className="text-sm font-poppins">Job Title</label>
            <Input
              type="text"
              value={jobTitle}
              className="text-black"
              onChange={handleChange}
              name="jobTitle"
              required
            />
          </div>
          <div>
            <label className="text-sm font-poppins">Address</label>
            <Input
              type="text"
              value={address}
              className="text-black"
              onChange={handleChange}
              name="address"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="text-sm font-poppins">Phone</label>
            <Input
              type="number"
              value={phone}
              className="text-black"
              onChange={handleChange}
              name="phone"
              required
            />
          </div>
          <div>
            <label className="text-sm font-poppins">Email</label>
            <Input
              type="email"
              value={email}
              className="text-black"
              onChange={handleChange}
              name="email"
              required
            />
          </div>
        </div>
        <Button className="mt-4 flex ml-auto font-poppins" disabled={!formData}>
          {loading ? <Loader2 className="animate-spin" /> : "Save"}
        </Button>
      </form>
    </div>
  );
}

export default PersonalDetail;
