"use client";
import Container from "../global/Container";
import CustomTriggerMenu from "../sidebar/CustomTriggerMenu";
import CartButton from "./CartButton";
import Logo from "./Logo";
import Navbar from "./Navbar";
import NavSearch from "./NavSearch";
import FavButton from "./FavButton";
import { useSearchContext } from "@/hooks/useSearchContext";
import { cn } from "@/lib/utils";
import { Suspense, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const { isFocused, searchQuery, isMobileSearching, isMobile } = useSearchContext();
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [showBg, setShowBg] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScrollY = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 200 && pathname === "/") {
        setShowBg(true);
      } else {
        setShowBg(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScrollY);

    return () => window.removeEventListener("scroll", handleScrollY);
  }, [lastScrollY, pathname]);

  return (
    <Container
      className={cn(
        "flex w-full items-center justify-between fixed left-1/2 -translate-x-1/2 top-0 z-30   transition-colors duration-300 ease-in-out sm:h-20 h-14 backdrop-contrast-125",
        pathname !== "/"
          ? "bg-stone-900 shadow-lg"
          : showBg && "bg-stone-900 shadow-lg opacity-95"
      )}
    >
      {(!isMobileSearching || !isMobile) && <Logo type="dark" />}
      {!isFocused && !searchQuery && !isMobileSearching && <Navbar />}
      <div
        className={cn(
          "flex items-center justify-end gap-1",
          (isFocused || searchQuery || isMobileSearching) && "w-full"
        )}
      >
        <Suspense>
          <NavSearch />
        </Suspense>
        
        {(!isMobileSearching || !isMobile) && (
          <>
            <CartButton />
            <FavButton />
            <CustomTriggerMenu />
          </>
        )}
      </div>
    </Container>
  );
};
export default Header;
