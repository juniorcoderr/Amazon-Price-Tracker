import LineChart from "./LineChart";
import { Card } from "./ui/card";

type ChartData = { x: string; rating: number }[];

const DashboardTopCard = ({
  title = "Price",
  value = "₹499.00",
  data,
}: {
  title?: string;
  value?: string;
  data?: ChartData;
}) => {
  return (
    <Card className="pt-4 pb-0">
      <div className="flex justify-between p-0 relative">
        <div className="absolute top-1 left-4">
          {title}
          <br />
          <span className="font-bold">{value}</span>
        </div>
        <div className="grow h-24 overflow-hidden rounded-b-xl">
          <div className="-mx-3">{data && <LineChart data={data} />}</div>
        </div>
      </div>
    </Card>
  );
};

export default DashboardTopCard;
