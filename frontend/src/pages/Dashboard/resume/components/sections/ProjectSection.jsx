import { Link } from "react-router-dom";

function ProjectSection({ projects }) {
  return (
    <div className="border-y-2 border-[#8055A2] py-4 my-3">
      <h1 className="font-semibold text-[#8055A2] mb-3 ">Personal Projects</h1>
      {projects.map(({ id, name, description, link }, idx) => (
        <div key={id || idx}>
          <div className="flex items-center justify-between my-3">
            <h1 className="font-medium ">{name}</h1>
            <Link to={link} target="_blank" className="text-blue-800 ">
              GitHub
            </Link>
          </div>
          <ul className="ml-8">
            <li className="list-disc  text-[15px]">{description}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ProjectSection;
