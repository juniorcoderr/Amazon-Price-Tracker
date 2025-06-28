import LineChart from "./LineChart";
import { Card } from "./ui/card";

const DashboardTopCard = ({ title = "Price", value = "₹499.00" }) => {
  return (
    <Card className="pt-4 pb-0">
      <div className="flex justify-between p-0 relative">
        <div className="absolute top-1 left-4">
          {title}
          <br />
          <span className="font-bold">{value}</span>
        </div>
        <div className="grow h-24 overflow-hidden rounded-b-xl">
          <div className="-mx-3">
            <LineChart />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DashboardTopCard;
