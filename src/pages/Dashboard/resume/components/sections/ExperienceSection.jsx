export const toChange = (dateStr) => {
  const date = new Date(dateStr);

  const options = { month: "short", year: "numeric" };
  const formattedDate = date.toLocaleString("en-US", options);
  return formattedDate;
};

function ExperienceSection({ experience, themeColor }) {
  return (
    <div>
      <h1 className="font-semibold mb-3 " style={{ color: themeColor || "#8055A2" }}>
        Work Experience
      </h1>
      {experience &&
        experience.map(
          ({ company, role, startDate, endDate, workSummary }, idx) => (
            <div key={idx}>
              <div className="flex items-center justify-between gap-2">
                <h1 className="font-medium ">{role + ", " + company}</h1>
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
              <div
                className="ml-5 mb-2 space-y-1 rsw-ce text-[15px]"
                dangerouslySetInnerHTML={{ __html: workSummary }}
              ></div>
            </div>
          )
        )}
    </div>
  );
}

export default ExperienceSection;
