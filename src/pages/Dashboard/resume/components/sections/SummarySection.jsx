function SummarySection({ summary, themeColor }) {
  return (
    <div
      id="summary"
      className="border-y-2 py-4 my-3"
      style={{ borderColor: themeColor || "#8055A2"}}
    >
      <h1 className="font-semibold mb-3 " style={{ color: themeColor || "#8055A2"}}>
        SUMMARY
      </h1>
      <p className=" text-[15px]">{summary}</p>
    </div>
  );
}

export default SummarySection;
