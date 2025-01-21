"use client";
import Link from "next/link";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Separator } from "../ui/separator";
import { FaHome } from "react-icons/fa";
import { FaBoxesStacked } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi2";
import { FaUsersLine } from "react-icons/fa6";
import { SignInTrigger, SignOutTrigger } from "../form/Buttons";
import { MdDashboard } from "react-icons/md";
import { usePathname } from "next/navigation";
// import { useAuthContext } from "@/hooks/useAuthContext";
import { setForwardPathCookie } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { BsBox2Fill } from "react-icons/bs";

const items = [
  {
    title: "Home",
    url: "/",
    icon: FaHome,
    accessBy: ["all", "admin", "user"],
  },
  {
    title: "Products",
    url: "/products",
    icon: FaBoxesStacked,
    accessBy: ["all", "admin", "user"],
  },
  {
    title: "Favorites",
    url: "/favorites",
    icon: FaHeart,
    accessBy: ["user", "admin"],
  },
  {
    title: "Cart",
    url: "/cart",
    icon: HiShoppingCart,
    accessBy: ["user", "admin"],
  },
  {
    title: "Orders",
    url: "/orders",
    icon: BsBox2Fill,
    accessBy: ["user", "admin"],
  },

  {
    title: "About us",
    url: "/about",
    icon: FaUsersLine,
    accessBy: ["all", "admin", "user"],
  },
  {
    title: "Dashboard",
    url: "/admin/sales",
    icon: MdDashboard,
    accessBy: ["admin"],
  },
];

const SidebarList = () => {
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();
  // const { user } = useAuthContext();
  const session = useSession();
  const user = session.data?.user;

  const filteredItems = items.filter((item) =>
    item.accessBy.includes(user?.role || "all")
  );

  const handleSignin = () => {
    toggleSidebar();
    setForwardPathCookie(pathname);
  };

  return (
    <SidebarMenu className="pl-6 sm:pl-0">
      {!user?.role ? (
        <SignInTrigger onClick={handleSignin} />
      ) : (
        <p className="text-base px-4 text-stone-200">
          Hello <span className="font-semibold">{user?.name}</span>, <br />{" "}
          <span className="text-sm">Welcome to Next Store</span>
        </p>
      )}
      <Separator className="h-[1px] bg-stone-700 mb-4" />
      {filteredItems.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild>
            <Link
              className="py-6 sm:py-8 px-4 flex items-center gap-4"
              href={item.url}
              onClick={toggleSidebar}
            >
              <item.icon className="!w-5 !h-5" />
              <span className="text-base">{item.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
      {user?.role && (
        <>
          <Separator className="h-[1px] bg-stone-700 mb-4" />
          <SignOutTrigger />
        </>
      )}
    </SidebarMenu>
  );
};

export default SidebarList;
