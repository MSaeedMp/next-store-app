import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const setForwardPathCookie = (pathname: string): void => {
  document.cookie = `forwardPathname=${encodeURIComponent(pathname)}; path=/;`;
};
