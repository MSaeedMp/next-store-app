import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarRail,
} from "@/components/ui/sidebar";
import CustomTriggerClose from "./CustomTriggerClose";
import Logo from "../header/Logo";
import SidebarList from "./SidebarList";

const AppSidebar = async () => {
  return (
    <Sidebar
      className="z-50 border-stone-800"
      side="right"
      variant="sidebar"
      collapsible="offcanvas"
    >
      <SidebarContent className=" bg-stone-950 shadow-lg text-stone-200">
        <SidebarGroup className="">
          <SidebarGroupLabel className="sm:mb-10 mb-8 mt-4 flex justify-between items-center pl-6 sm:pl-2">
            <Logo type="dark" />
            <CustomTriggerClose className="p-2 text-foreground text-stone-200" />
          </SidebarGroupLabel>
          <SidebarList />
          <SidebarGroupContent>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};
export default AppSidebar;
