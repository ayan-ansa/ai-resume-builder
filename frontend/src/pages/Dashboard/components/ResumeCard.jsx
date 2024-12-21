import { Loader2, MoreVertical } from "lucide-react";
import cv from "./../../../assets/cv.png";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { deleteUserResume } from "./../../../service/GlobalApi";
import { useState } from "react";
import { toast } from "react-toastify";

function ResumeCard({ data, setIsCreated }) {
  const { documentId, title, jobTitle, themeColor } = data;
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleDeleteResume = async () => {
    try {
      setLoading(true)
      const res = await deleteUserResume(documentId);
      setLoading(false)
      toast.success("Deleted Successfully!");
      setIsCreated((prev) => !prev);
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };

  return (
    <div
      className="rounded-t-md border-t-4 cursor-pointer hover:scale-105 transition duration-100 ease-in"
      style={{ borderColor: themeColor || "#228B22" }}
    >
      <Link to={"/dashboard/resume/" + documentId + "/edit"}>
        <div className="flex items-center justify-center h-56 bg-gradient-to-b from-pink-100 via-purple-200 to-blue-200">
          <img src={cv} alt="cv" className="w-24" />
        </div>
      </Link>
      <div
        className="flex items-center justify-between rounded-b-md"
        style={{ backgroundColor: themeColor || "#228B22" }}
      >
        <h1 className="w-full p-1 text-black">
          {jobTitle
            ? jobTitle.length > 22
              ? jobTitle.slice(0, 22) + "..."
              : jobTitle
            : title.length > 22
            ? title.slice(0, 22) + "..."
            : title}
        </h1>

        <DropdownMenu className="cursor-pointer">
          <DropdownMenuTrigger>
            <MoreVertical className="text-black" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              onClick={() =>
                navigate("/dashboard/resume/" + documentId + "/edit")
              }
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                navigate("/dashboard/resume/" + documentId + "/view")
              }
            >
              View
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                navigate("/dashboard/resume/" + documentId + "/view")
              }
            >
              Download
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setIsOpenDialog(true)}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <AlertDialog open={isOpenDialog}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure you want to delete this item?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                resume.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setIsOpenDialog(false)}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction onClick={handleDeleteResume}>
                {loading ? <Loader2 /> : "Continue"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}

export default ResumeCard;
