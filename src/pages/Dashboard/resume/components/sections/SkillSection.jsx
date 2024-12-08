function SkillSection({ skills, themeColor }) {
  const getUniqueValues = (key) => {
    return [...new Set(skills && skills.map((skill) => skill[key]))];
  };
  const languages = getUniqueValues("language");
  const frameworks = getUniqueValues("framework");
  const databases = getUniqueValues("database");
  const tools = getUniqueValues("tool");

  return (
    <div>
      <h1 className="font-semibold mb-3 " style={{ color: themeColor || "#8055A2"}}>
        Technical Skills
      </h1>
      <div>
        <p>
          <strong className="">Languages:</strong> {languages.join(", ")}
        </p>
        <p>
          <strong className="">Frameworks:</strong> {frameworks.join(", ")}
        </p>
        <p>
          <strong className="">Databases:</strong> {databases.join(", ")}
        </p>
        <p>
          <strong className="">Tools:</strong> {tools.join(", ")}
        </p>
      </div>
    </div>
  );
}

export default SkillSection;
