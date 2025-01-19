"use client";

import { usePathname } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export const ForwardRouteContext = createContext<string | null>(null);

export const ForwardRouteProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cookiePathname, setCookiePathname] = useState<string>("/");
  const pathname = usePathname();

  useEffect(() => {
    const cookiePathname = document.cookie
      .split("; ")
      .find((row) => row.startsWith("forwardPathname"))
      ?.split("=")[1];

    const decodedCookiePathname = cookiePathname
      ? decodeURIComponent(cookiePathname)
      : "/";
    setCookiePathname(decodedCookiePathname);
  }, [pathname]);

  return (
    <ForwardRouteContext value={cookiePathname}>{children}</ForwardRouteContext>
  );
};
