import { Separator } from "@/components/ui/separator";
import Sidebar from "./sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="sm:pt-36 pt-28">
      <h2 className="text-2xl pl-4">Dashboard</h2>
      <Separator className="mt-2" />
      <section className="grid lg:grid-cols-12 gap-12 mt-12">
        <div className="lg:col-span-2">
          <Sidebar />
        </div>
        <div>{children}</div>
      </section>
    </div>
  );
};
export default DashboardLayout;
