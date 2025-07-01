"use client";

import { Product, ProductDataHistory } from "../../generated/prisma/default";
import LineChart from "./LineChart";
import TrackerTimeAgo from "./TimeAgo";
import { Card } from "./ui/card";

const DashboardProductCard = ({
  product,
  history,
}: {
  product: Product;
  history: ProductDataHistory[];
}) => {
  return (
    <Card className="py-4 px-4 overflow-hidden">
      <div className="flex gap-4">
        <div className="w-40 h-40 flex justify-center items-center">
          <img
            src={product.img}
            className="max-h-40 w-auto"
            alt="product image"
          />
        </div>
        <div className="relative grow -mb-4 flex items-end">
          <div className="absolute w-full top-0">
            <h3 className="font-bold">AMZON</h3>
            <h4>₹{product.price}</h4>
            <h5 className="text-xs text-gray-600">
              {" "}
              <TrackerTimeAgo date={product.updatedAt} />
            </h5>
          </div>
          <div className="grow -ml-2 -mr-7">
            <LineChart
              data={history.map((hp) => ({
                x: hp.createdAt.toLocaleDateString(),
                price: hp.price,
              }))}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DashboardProductCard;
