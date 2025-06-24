import { signOut } from "@/auth";
import Link from "next/link";
import { ChartSpline, SearchIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "next-auth";
import { Input } from "./ui/input";

export default async function Header({ user }: { user: User }) {
  if (!user) return null;
  return (
    <header className="flex justify-between items-center">
      <Link href="" className="flex gap-1 items-center">
        <ChartSpline />
        Amazon Price Tracker
      </Link>
      <div className="flex gap-4 items-center">
        <div className="flex bg-gray-50 rounded-full items-center pl-1 relative">
          <SearchIcon className="absolute left-2 pointer-events-none text-gray-600" />
          <Input
            className="rounded-full shadow-none border-0 bg-gray-50 pl-8"
            placeholder="Search..."
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={user.image || undefined} />
              <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <form
                  action={async () => {
                    "use server";
                    await signOut();
                  }}
                >
                  <button className="py-0">Logout</button>
                </form>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
