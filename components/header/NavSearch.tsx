"use client";
import { useSearchContext } from "@/hooks/useSearchContext";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useEffect, useRef } from "react";
const NavSearch = () => {
  const {
    isFocused,
    setIsFocused,
    setSearchQuery,
    searchQuery,
    isMobileSearching,
    setIsMobileSearching,
    isMobile,
  } = useSearchContext();

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFocus = (): void => {
    setIsFocused(true);
    if (inputRef.current) inputRef.current.focus();
  };

  const handleBlur = (): void => {
    setIsFocused(false);
    if (searchQuery === "") setIsMobileSearching(false);
  };
  useEffect(() => {
    if (isMobileSearching && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isMobileSearching]);
  const handleMobileSearch = () => {
    setIsMobileSearching(true);
    handleFocus();
  };

  // Remove the search bar when url changes
  useEffect(() => {
    if (!searchParams.get("search")) {
      setSearchQuery("");
    }
  }, [searchParams, setSearchQuery]);

  const handleSearch = useDebouncedCallback((value: string) => {
    if (value.length < 3 && value.length !== 0) return;
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    replace(`/products?${params.toString()}`);
  }, 500);

  const handleRemove = () => {
    if (searchQuery === "") {
      setIsMobileSearching(false);
    } else {
      handleFocus();
      setSearchQuery("");
    }
    const params = new URLSearchParams(searchParams);
    params.delete("search");
    replace(`/products?${params.toString()}`);
  };

  return (
    <>
      {
        <div
          className={cn(
            "flex items-center mx-4 justify-end w-full",
            !isMobile || isMobileSearching
              ? "opacity-100 visible"
              : "opacity-0 hidden",
            isMobile && "justify-center"
          )}
        >
          <button
            type="reset"
            className={cn(
              "cursor-pointer transition-all duration-500 -mr-10 relative p-2 z-10 focus:outline-stone-900",
              !isFocused && !searchQuery
                ? "opacity-0 invisible"
                : "opacity-100 visible"
            )}
            onClick={handleRemove}
          >
            <IoClose className="w-4 h-4" />
          </button>
          <input
            type="text"
            ref={inputRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              handleSearch(e.target.value);
            }}
            placeholder="Search products..."
            className={cn(
              "border text-sm focus:outline-stone-200 border-stone-300 rounded-full px-4 py-1 sm:py-2 w-44 placeholder:text-sm transition-width ease-in-out duration-500",
              (isFocused || searchQuery || isMobileSearching) &&
                "pl-10 text-base w-full"
            )}
          />
          <button
            type="button"
            className="cursor-pointer p-1 -ml-12 focus:outline-stone-900"
          >
            <CiSearch className="w-6 h-6  text-stone-600" />
          </button>
        </div>
      }
      {isMobile && !isMobileSearching && (
        <button
          type="button"
          onClick={handleMobileSearch}
          className="cursor-pointer focus:outline-stone-900"
        >
          <CiSearch className="sm:w-6 sm:h-6 w-5 h-5 text-stone-50" />
        </button>
      )}
    </>
  );
};
export default NavSearch;
