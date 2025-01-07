"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "../ui/button";

const CustomTriggerMenu = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button variant={"ghost"} onClick={toggleSidebar} className="flex justify-end px-3 py-6 hover:bg-black/20 hover:backdrop-blur-md">
      <CiMenuFries className="sm:!w-6 sm:!h-6 !w-5 !h-5 text-stone-100" />
    </Button>
  );
};
export default CustomTriggerMenu;
