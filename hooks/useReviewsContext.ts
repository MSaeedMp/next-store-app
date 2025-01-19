"use client";

import { ReviewsContext } from "@/contexts/ReviewsContext";
import { useContext } from "react";

export const useReviewsContext = () => {
  const context = useContext(ReviewsContext);
  if (!context)
    throw new Error(
      "useReviewsContext must be used within a ReviewContextProvider"
    );

  return context;
};
