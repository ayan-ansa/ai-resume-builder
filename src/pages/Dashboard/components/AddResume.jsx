import { Loader2, PlusSquare } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { createNewResume } from "../../../service/GlobalApi";
import { useNavigate } from "react-router-dom";
import { ResumeListContext } from "@/context/ResumeListContext";

function AddResume() {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const { resumeData, setResumeData} = useContext(ResumeListContext);
  const { user } = useUser();
  const navigate = useNavigate();

  const onCreateResume = async () => {
    const data = {
      data: {
        title: resumeTitle,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
      },
    };

    try {
      setLoading(true);
      const res = await createNewResume(data);
      setResumeData({ ...resumeData, jobTitle: res.data.data.title });
      navigate("/dashboard/resume/" + res.data.data.documentId + "/edit");
      setLoading(false);  
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    setIsOpenDialog(false);
    setResumeTitle("");
  };

  return (
    <div>
      <div
        className="p-14 flex items-center justify-center rounded bg-secondary h-56 border border-dotted hover:scale-105 transition-all cursor-pointer"
        onClick={() => setIsOpenDialog(true)}
      >
        <PlusSquare className="text-black" />
      </div>
      <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="">Create New Resume</DialogTitle>
            <DialogDescription>
              <label className="text-start">
                Add title for your new resume
              </label>
              <Input
                type="text"
                value={resumeTitle}
                onChange={(e) => setResumeTitle(e.target.value)}
                placeholder="Ex.Full Stack Developer"
                className="my-2"
              />
            </DialogDescription>
            <div className="flex gap-4 justify-end">
              <Button variant="ghost" onClick={() => setIsOpenDialog(false)}>
                Cancel
              </Button>
              <Button
                disabled={!resumeTitle || loading}
                onClick={onCreateResume}
              >
                {loading ? <Loader2 className="animate-spin" /> : "Create"}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddResume;
