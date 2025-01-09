import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Products",
    url: "/products",
  },
  {
    title: "Favorites",
    url: "/favorites",
  },
  {
    title: "About us",
    url: "/about",
  },
];

const MobileNavbar = () => {
  const pathname = usePathname();

  return (
    <ul className={"flex items-center gap-2"}>
      {navItems.map((item) => (
        <li key={item.title} className="h-full">
          <Button
            className={cn(
              "text-stone-100 h-full font-medium text-sm border border-stone-700 rounded-full px-4 py-2 hover:bg-brand-500",
              item.url === pathname && "bg-brand-500"
            )}
            asChild
          >
            <Link href={item.url}>{item.title}</Link>
          </Button>
        </li>
      ))}
    </ul>
  );
};
export default MobileNavbar;
