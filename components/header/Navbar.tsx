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
    <nav className={"hidden lg:flex lg:items-center h-full lg:self-stretch"}>
      {navItems.map((item) => (
        <Button
          variant="link"
          key={item.title}
          className={cn(
            "text-base text-stone-400 py-0 px-6 hover:no-underline hover:text-stone-100 h-full font-[600]",
            item.url === pathname && "text-stone-100"
          )}
          asChild
        >
          <Link href={item.url}>{item.title}</Link>
        </Button>
      ))}
    </nav>
  );
};
export default Navbar;
