import { Link } from "react-router-dom";

function PersonalInfo({ resumeData }) {
  const {
    firstName,
    lastName,
    jobTitle,
    email,
    github,
    linkedIn,
    phone,
    themeColor,
  } = resumeData;

  return (
    <div>
      <h1
        className="text-center text-2xl font-semibold"
        style={{ color: themeColor || "#8055A2" }}
      >
        {firstName + " " + lastName}
      </h1>
      <h2 className="text-center font-medium">{jobTitle}</h2>
      <div className="flex items-center justify-center gap-4">
        <Link className="text-sm" to={email}>
          Gmail
        </Link>
        GitHub
        <Link className="text-sm" to={github}></Link>
        <Link className="text-sm" to={linkedIn}>
          LinkedIn
        </Link>
        <Link className="text-sm" to={phone}>
          {`+91 ${phone}`}
        </Link>
      </div>
    </div>
  );
}

export default PersonalInfo;
