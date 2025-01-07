"use client";

import { createContext, useEffect, useState } from "react";

type SearchContextType = {
  isFocused: boolean;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  isMobileSearching: boolean;
  setIsMobileSearching: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: boolean;
  setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchContext = createContext<SearchContextType | null>(null);

const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isMobileSearching, setIsMobileSearching] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const handleMobileScreen = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Set the state based on the current window size
    handleMobileScreen();

    // Listen for screen size changes
    window.addEventListener("resize", handleMobileScreen);

    // Mark the component as mounted
    setMounted(true);

    return () => window.removeEventListener("resize", handleMobileScreen);
  }, []);

  // Do not run the app until this component is fully mounted
  if (!mounted) {
    return null;
  }

  const value: SearchContextType = {
    isFocused,
    setIsFocused,
    searchQuery,
    setSearchQuery,
    isMobileSearching,
    setIsMobileSearching,
    isMobile,
    setIsMobile,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export { SearchProvider, SearchContext };
