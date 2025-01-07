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

const Navbar = () => {
  const pathname = usePathname();

  return (
    <ul className="hidden lg:flex lg:items-center h-full lg:self-stretch">
      {navItems.map((item) => (
        <li key={item.title} className="h-full">
          <Button
            variant={"link"}
            style={{ textShadow: "0 0 4px rgba(0, 0, 0, 1)" }}
            className={cn(
              "text-base text-stone-100 py-0 px-6 underline-offset-8 decoration-4 h-full font-[600]",
              item.url === pathname && "underline"
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
export default Navbar;
