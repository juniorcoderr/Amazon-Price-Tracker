//import Image from "next/image";
import LineChart from "./LineChart";
import { Card } from "./ui/card";

const DashboardProductCard = () => {
  return (
    <Card className="py-4 px-4 overflow-hidden">
      <div className="flex gap-4">
        <div className="w-24">
          <img
            src="https://m.media-amazon.com/images/I/81VttNsrDwL._SY355_.jpg"
            alt="product image"
          />
        </div>
        <div className="relative grow -mb-4 flex items-end">
          <div className="absolute w-full top-0">
            <h3 className="font-bold">Amazon Echo Dot</h3>
            <h4>₹499.00</h4>
            <h5 className="text-xs text-gray-600">4 hours ago</h5>
          </div>
          <div className="grow -ml-2 -mr-7">
            <LineChart />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DashboardProductCard;
