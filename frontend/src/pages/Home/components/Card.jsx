import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
function CardComponent({ title, description, icon, isDark }) {

  return (
    <Card
      className={`shadow-lg cursor-pointer ${
        isDark ? "bg-slate-800 hover:bg-[#38444D] border border-gray-700" : ""
      }`}
    >
      <CardHeader>
        <CardTitle>
          {icon}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h1 className={`text-xl font-bold ${isDark ? "text-slate-200" : ""}`}>
          {title}
        </h1>
      </CardContent>
      <CardFooter>
        <p className="text-gray-500">{description}</p>
      </CardFooter>
    </Card>
  );
}

export default CardComponent;
