"use client";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaBoxesStacked } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi2";
import { FaUsersLine } from "react-icons/fa6";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import CustomTriggerClose from "./CustomTriggerClose";
import Logo from "../header/Logo";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: FaHome,
  },
  {
    title: "Products",
    url: "/products",
    icon: FaBoxesStacked,
  },
  {
    title: "Favorites",
    url: "/favorites",
    icon: FaHeart,
  },
  {
    title: "Cart",
    url: "/cart",
    icon: HiShoppingCart,
  },
  {
    title: "About us",
    url: "/about",
    icon: FaUsersLine,
  },
];

const AppSidebar = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <Sidebar
      className="z-50"
      side="right"
      variant="sidebar"
      collapsible="offcanvas"
    >
      <SidebarContent className=" bg-white shadow-lg">
        <CustomTriggerClose className="p-4" />
        <SidebarGroup>
          <SidebarGroupLabel className="sm:mb-10 mb-8 ">
            <Logo type="light" onClick={toggleSidebar} />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      className="py-6 px-4 flex items-center gap-4"
                      href={item.url}
                      onClick={toggleSidebar}
                    >
                      <item.icon className="!w-6 !h-6" />
                      <span className="text-base font-semibold">
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};
export default AppSidebar;
