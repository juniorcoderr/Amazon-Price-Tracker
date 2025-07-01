import { auth } from "@/auth";
import DashboardProductCard from "./DashboardProductCard";
import DashboardTopCard from "./DashboardTopCard";
import { prisma } from "@/lib/prisma";
import { groupBy, sum } from "lodash";

const Dashboard = async () => {
  const session = await auth();
  const user = session?.user;
  if (!user || !user.email) {
    return null;
  }
  const products = await prisma.product.findMany({
    where: {
      userEmail: user.email,
    },
  });

  const productIds = products.map((product) => product.amazonId);
  const history = await prisma.productDataHistory.findMany({
    where: {
      amazonId: {
        in: productIds,
      },
    },
  });

  const reviewsAvgs: { x: string; rating: number }[] = [];
  const historyByDates = groupBy(history, (history) =>
    history.createdAt.toLocaleDateString("sv-SE")
  );

  for (const date of Object.keys(historyByDates)) {
    const dateRatings = historyByDates[date].map(
      (hp) => hp.reviewsAverageRating
    );
    reviewsAvgs.push({
      x: date,
      rating: sum(dateRatings) / dateRatings.length,
    });
  }

  return (
    <div className="col-span-9">
      <h1 className="font-bold my-2">Dashboard</h1>
      <div className="w-full grid grid-cols-3 gap-4">
        <DashboardTopCard title="Price" value="₹499.00" />
        <DashboardTopCard title="Reviews" value="4.8" data={reviewsAvgs} />
        <DashboardTopCard title="Rank" value="146" />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {products.map((product) => (
          <DashboardProductCard
            key={product.id}
            product={product}
            history={history.filter(
              (history) => history.amazonId === product.amazonId
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
