import "./globals.css";
import AppSidebar from "@/components/sidebar/AppSidebar";
import Providers from "./providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { LayoutProvider } from "@/components/layout/LayoutProvider";

const font = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
  preload: true,
});

export const metadata: Metadata = {
  title: {
    template: "%s | Next Store",
    default: "Next Store",
  },
  description: "A netify app built with Next.js",
  keywords: ["e-commerce", "Next.js", "React", "Tailwind CSS", "Type script"],
  authors: [
    {
      name: "M. Saeed Mafipour",
    },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${font.variable} antialiased w-full bg-stone-50 text-stone-950`}
        >
          <Providers>
            <AppSidebar />
            <LayoutProvider>{children}</LayoutProvider>
          </Providers>
        </body>
      </html>
    </SessionProvider>
  );
}
