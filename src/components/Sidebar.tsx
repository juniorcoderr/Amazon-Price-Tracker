import { AlignJustifyIcon, BellIcon, PackagePlusIcon } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside
      style={{ minHeight: `calc(100vh - 80px)` }}
      className="bg-white rounded-2xl p-4 h-full"
    >
      <h2 className="uppercase text-gray-600 text-xs font-extrabold mb-2">
        Navigation
      </h2>
      <nav className="flex flex-col gap-2 *:flex *:gap-1 *:items-center">
        <Link href={"/electronics"}>
          <AlignJustifyIcon className="h-5" />
          All Products
        </Link>
        <Link href={"/electronics"}>
          <PackagePlusIcon className="h-5" />
          Add Product
        </Link>
        <Link href={"/electronics"}>
          <BellIcon className="h-5" />
          Notifications
        </Link>
      </nav>
      {/* <h2 className="uppercase text-gray-600 text-xs font-extrabold mb-2">
        Categories
      </h2>
      <nav className="flex flex-col gap-2 *:flex *:gap-1 *:items-center">
        <Link href={"/electronics"}>
          <PlugIcon className="h-5" />
          Plug
        </Link>
        <Link href={"/electronics"}>
          <HeadsetIcon className="h-5" />
          Headset
        </Link>
        <Link href={"/electronics"}>
          <LaptopIcon className="h-5" />
          Laptops
        </Link>
      </nav> */}
    </aside>
  );
}
