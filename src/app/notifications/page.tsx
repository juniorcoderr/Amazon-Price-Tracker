import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export default async function Notifications() {
  const session = await auth();
  const user = session?.user;
  if (!user || !user.email) {
    return null;
  }
  const notifications = await prisma.notification.findMany({
    where: {
      userEmail: user.email,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="col-span-9">
      <h1 className="font-bold my-4 text-2xl text-center">Notifications</h1>
      <div className="flex flex-col gap-4 max-w-2xl mx-auto">
        {notifications.length === 0 ? (
          <div className="text-center text-gray-500 py-8 rounded-lg bg-gray-50 shadow">
            No notifications yet.
          </div>
        ) : (
          notifications.map((notification) => (
            <div
              className="flex items-center gap-4 bg-white rounded-lg shadow p-4 border border-gray-100 hover:shadow-md transition"
              key={notification.id}
            >
              <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full px-3 py-1 text-xs font-semibold">
                {notification.createdAt.toLocaleDateString("sv-SE")}
              </div>
              <div className="text-gray-800 font-medium">
                {notification.title}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
