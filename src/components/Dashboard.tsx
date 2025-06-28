import DashboardProductCard from "./DashboardProductCard";
import DashboardTopCard from "./DashboardTopCard";

const Dashboard = () => {
  return (
    <div className="col-span-9">
      <h1 className="font-bold my-2">Dashboard</h1>
      <div className="w-full grid grid-cols-3 gap-4">
        <DashboardTopCard title="Price" value="₹499.00" />
        <DashboardTopCard title="Reviews" value="4.8" />
        <DashboardTopCard title="Rank" value="146" />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <DashboardProductCard />
        <DashboardProductCard />
        <DashboardProductCard />
        <DashboardProductCard />
        <DashboardProductCard />
        <DashboardProductCard />
      </div>
    </div>
  );
};

export default Dashboard;
