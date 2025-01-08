"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "../ui/button";
import { HiMenuAlt3 } from "react-icons/hi";

const CustomTriggerMenu = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      variant={"ghost"}
      onClick={toggleSidebar}
      className="flex justify-end px-3 py-6 hover:bg-black/20 hover:backdrop-blur-md"
    >
      <HiMenuAlt3 className="!w-7 !h-7 text-stone-100" />
    </Button>
  );
};
export default CustomTriggerMenu;
