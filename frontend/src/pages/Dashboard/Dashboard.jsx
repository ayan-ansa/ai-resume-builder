import { useEffect, useState } from "react";
import AddResume from "./components/AddResume";
import ResumeCard from "./components/ResumeCard";
import { getUserResumes } from "./../../service/GlobalApi";

function Dashboard() {
  const [resumeList, setResumeList] = useState([]);
  const [isCreated, setIsCreated] = useState(false);

  const getResumeList = async () => {
    try {
      const res = await getUserResumes();
      const reverseList = res.data.data.reverse();
      setResumeList(reverseList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getResumeList();
  }, [isCreated]);

  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h2 className="media490:text-3xl media490:text-start text-center text-2xl font-semibold mb-1">
        My Resume
      </h2>
      <p className="media490:text-start text-center">
        Start Creating AI resume to your next job role
      </p>
      <div className="grid grid-cols-1 media490:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
        <AddResume />
        {resumeList.length > 0 &&
          resumeList.map((data) => (
            <ResumeCard key={data.id} data={data} setIsCreated={setIsCreated} />
          ))}
      </div>
    </div>
  );
}

export default Dashboard;
