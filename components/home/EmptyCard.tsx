import { Card, CardContent } from "../ui/card";

const EmptyCard = () => {
  return (
    <Card className="border-none rounded-none shadow-md min-w-72">
      <CardContent className="p-0 border-none rounded-none">
        <div className="h-48 sm:h-64 w-full bg-stone-200 flex justify-center items-center">
          Empty
        </div>
        <div className="p-4">
          <div className="h-4 w-1/2 mt-4"></div>
          <div className="h-4 w-1/4 mt-4"></div>
          <div className="h-4 w-1/5 mt-4"></div>
          <div className="h-4 w-1/4 mt-4"></div>
        </div>
      </CardContent>
    </Card>
  );
};
export default EmptyCard;
