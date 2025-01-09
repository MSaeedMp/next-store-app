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
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import { Separator } from "../ui/separator";
import { RiLoginBoxFill } from "react-icons/ri";
import { RiLogoutBoxFill } from "react-icons/ri";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

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
        <SidebarGroup className="">
          <SidebarGroupLabel className="sm:mb-10 mb-8 mt-4 flex justify-between items-center">
            <p className="font-[900] text-2xl text-foreground ">Next Store</p>
            <CustomTriggerClose className="p-4 text-foreground" />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SignedOut>
                <SignInButton mode="modal">
                  <button
                    onClick={toggleSidebar}
                    className="w-full font-semibold text-base flex justify-start items-center py-3 px-4 gap-4 hover:bg-brand-100"
                  >
                    <RiLoginBoxFill className="w-6 h-6" />
                    <span>Login</span>
                  </button>
                </SignInButton>
                {/* <SignUpButton mode="modal">
                  <button
                    onClick={toggleSidebar}
                    className="w-full font-semibold text-base flex justify-start items-center py-3 px-4 gap-4 hover:bg-brand-100"
                  >
                    <SiGnuprivacyguard className="w-6 h-6" />
                    <span>Register</span>
                  </button>
                </SignUpButton> */}
              </SignedOut>
              <SignedIn>
                <SignOutButton redirectUrl="/">
                  <button
                    onClick={() => {
                      toggleSidebar();
                      toast({
                        variant: "default",
                        description: "Signed out Successfully!",
                        className: cn(
                          "fixed bottom-4 left-1/2 -translate-x-1/2 w-64 border-4 border-green-500"
                        ),
                      });
                    }}
                    className="w-full font-semibold text-base flex justify-start items-center py-3 px-4 gap-4 hover:bg-brand-100"
                  >
                    <RiLogoutBoxFill className="w-6 h-6" />
                    <span>Sign out</span>
                  </button>
                </SignOutButton>
              </SignedIn>
              <Separator className="h-1" />

              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      className="py-6 px-4 flex items-center gap-4 
                      !hover:bg-brand-100"
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
