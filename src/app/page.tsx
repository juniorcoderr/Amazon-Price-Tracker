import { auth } from "@/auth";
import LoginView from "./LoginView";

export default async function Home() {
  const session = await auth();
  const user = session?.user;
  return (
    <div>
      {user && <div>hello {user.name}</div>}
      {!user && <LoginView />}
    </div>
  );
}
