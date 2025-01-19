"use client";
import { createContext, useState } from "react";

type ReviewsContextType = {
  toggleReviewForm: () => void;
  closeReviewForm: () => void;
  openReviewForm: () => void;
  setIsReviewFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isReviewFormVisible: boolean;
};

export const ReviewsContext = createContext<ReviewsContextType | null>(null);

export const ReviewsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isReviewFormVisible, setIsReviewFormVisible] =
    useState<boolean>(false);

  const toggleReviewForm = () => setIsReviewFormVisible((prev) => !prev);
  const openReviewForm = () => setIsReviewFormVisible(true);
  const closeReviewForm = () => setIsReviewFormVisible(false);

  const value: ReviewsContextType = {
    setIsReviewFormVisible,
    isReviewFormVisible,
    toggleReviewForm,
    openReviewForm,
    closeReviewForm,
  };

  return (
    <ReviewsContext.Provider value={value}>{children}</ReviewsContext.Provider>
  );
};
