import { toChange } from "./ExperienceSection";

function EducationSection({ education, themeColor }) {
  return (
    <div className="border-y-2 py-4 my-3" style={{ borderColor: themeColor || "#8055A2" }}>
      <h1
        className="font-semibold mb-3 "
        style={{ color: themeColor || "#8055A2" }}
      >
        Education
      </h1>
      {education &&
        education.map(
          (
            { universityName, degree, branch, startDate, endDate, description },
            idx
          ) => (
            <div key={idx} className="mb-1">
              <div className="flex items-center justify-between gap-2">
                <h1 className="font-medium">{universityName}</h1>
                <h2 className="font-medium">
                  {`${startDate && toChange(startDate)} - ${
                    endDate
                      ? startDate === endDate
                        ? "Present"
                        : new Date(endDate).getMonth() === new Date().getMonth()
                        ? "Present"
                        : endDate === "Present"
                        ? "Present"
                        : toChange(endDate)
                      : ""
                  }`}
                </h2>
              </div>
              <h1 className=" text-[15px]">{degree + " in " + branch}</h1>
              <div className="ml-8">
                <p className="text-[15px] ">{description}</p>
              </div>
            </div>
          )
        )}
    </div>
  );
}

export default EducationSection;
