import { SearchContext } from "@/contexts/SearchContext";
import { useContext } from "react";

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context)
    throw new Error("useSearchContext must be used within a ContextProvider");

  return context;
};
