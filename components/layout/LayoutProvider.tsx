"use client";

import { usePathname } from "next/navigation";
import MainLayout from "./MainLayout";
import AuthLayout from "./AuthLayout";

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <>
      {pathname.startsWith("/auth") ? (
        <AuthLayout>{children}</AuthLayout>
      ) : (
        <MainLayout>{children}</MainLayout>
      )}
    </>
  );
};
