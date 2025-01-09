"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    url: "/admin/sales",
    title: "Sales",
  },
  {
    url: "/admin/products",
    title: "My products",
  },
  {
    url: "/admin/products/create",
    title: "Create product",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside>
      {routes.map((route) => {
        const { url, title } = route;
        const isActive = url === pathname;
        const variant = isActive ? "default" : "ghost";
        return (
          <Button
            variant={variant}
            size="default"
            key={url}
            className="w-full mb-2 capitalize font-normal justify-start"
            asChild
          >
            <Link href={url}>{title}</Link>
          </Button>
        );
      })}
    </aside>
  );
};

export default Sidebar;
