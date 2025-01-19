"use client";

import { ForwardRouteContext } from "@/contexts/ForwardRouteProvider";
import { useContext } from "react";

export const useForwardRouteContext = () => {
  const context = useContext(ForwardRouteContext);
  if (!context) {
    return null;
    // throw new Error(
    //   "usePreviousContext must be used within a previousRouteProvider"
    // );
  }
  return context;
};
