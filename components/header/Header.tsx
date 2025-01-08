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
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  const { isFocused, searchQuery, isMobileSearching, isMobile } =
    useSearchContext();
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [showHeader, setShowHeader] = useState<boolean>(true);

  useEffect(() => {
    const handleScrollY = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 200 && currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScrollY);

    return () => window.removeEventListener("scroll", handleScrollY);
  }, [lastScrollY]);

  return (
    <Container
      className={cn(
        "w-full bg-stone-900 fixed left-1/2 -translate-x-1/2 top-0 z-40"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between h-16 transition-height duration-300",
          showHeader || isFocused ? "h-16" : "h-0 invisible"
        )}
      >
        {(!isMobileSearching || !isMobile) && <Logo type="dark" />}
        {!isFocused && !searchQuery && !isMobileSearching && !isMobile && (
          <Navbar />
        )}
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
      </div>
      {isMobile && (
        <div
          className={cn(
            "w-full overflow-scroll no-scrollbar",
            showHeader || isFocused ? "h-12" : "h-0 invisible"
          )}
        >
          <MobileNavbar />
        </div>
      )}
      {/* <Navbar className="pl-0" /> */}
    </Container>
  );
};
export default Header;
