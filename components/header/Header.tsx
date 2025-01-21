"use client";
import CustomTriggerMenu from "../sidebar/CustomTriggerMenu";
import CartButton from "./CartButton";
import Logo from "./Logo";
import Container from "../global/Container";
import Navbar from "./Navbar";
import Marquee from "../global/Marquee";
import NavSearch from "./NavSearch";
import MobileNavbar from "./MobileNavbar";
import NavSignUp from "./NavSignUp";
import { useSearchContext } from "@/hooks/useSearchContext";
import { cn } from "@/lib/utils";
import { Suspense, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const marqueeMessages = [
  "Welcome to Next Store, where innovation meets convenience!",
  "Check out our latest arrivals and find your perfect fit today!",
  "Enjoy exclusive discounts and special offers, only for a limited time!",
  "Sign up for our newsletter to stay ahead with the newest trends.",
  "Don’t miss out! Free shipping on all orders above $50.",
  "Thank you for shopping with Next Store—your satisfaction is our priority.",
  "Discover top-rated products loved by thousands of happy customers!",
  "Upgrade your shopping experience with our seamless and secure checkout.",
  "Shop with confidence—hassle-free returns and 24/7 customer support available!",
  "Stay tuned for exciting updates and seasonal sales coming your way!",
];

const Header = () => {
  const { isFocused, searchQuery, isMobileSearching, isMobile } =
    useSearchContext();
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const pathname = usePathname();

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
    <Container className="bg-stone-900 fixed left-1/2 -translate-x-1/2 top-0 z-40 w-full">
      <div
        className={cn(
          "flex items-center justify-between sm:h-20 h-16 border-b border-b-stone-700 transition-height duration-300",
          showHeader || isFocused ? "sm:h-20 h-16" : "sm:h-0 h-0 invisible"
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
              {!isMobile && <NavSignUp />}
              <CartButton />
              <CustomTriggerMenu />
            </>
          )}
        </div>
      </div>
      {isMobile && (
        <div
          className={cn(
            "w-full overflow-scroll no-scrollbar flex items-center",
            showHeader || isFocused ? "h-14" : "h-0 invisible"
          )}
        >
          <MobileNavbar />
        </div>
      )}
      {!isMobile && pathname === "/" && (
        <Marquee
          className={`${!showHeader && "h-0 invisible"}`}
          messages={marqueeMessages}
        />
      )}
    </Container>
  );
};
export default Header;
