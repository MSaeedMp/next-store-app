"use client";
import Link from "next/link";
import { CiHeart, CiHome, CiBoxes, CiShoppingCart } from "react-icons/ci";
import { PiUsersThreeThin } from "react-icons/pi";

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
    icon: CiHome,
  },
  {
    title: "Products",
    url: "/products",
    icon: CiBoxes,
  },
  {
    title: "Favorites",
    url: "/favorites",
    icon: CiHeart,
  },
  {
    title: "Cart",
    url: "/cart",
    icon: CiShoppingCart,
  },
  {
    title: "About us",
    url: "/about",
    icon: PiUsersThreeThin,
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
      <SidebarContent className=" bg-stone-50 shadow-lg">
        <CustomTriggerClose className="p-4 self-end" />
        <SidebarGroup>
          <SidebarGroupLabel className="mb-10">
            <Logo type="light" onClick={toggleSidebar} />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      className="py-7 px-4"
                      href={item.url}
                      onClick={toggleSidebar}
                    >
                      <item.icon className="!w-6 !h-6" />
                      <span className="text-base">{item.title}</span>
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
