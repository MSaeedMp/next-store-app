import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Container from "@/components/global/Container";
import AppSidebar from "@/components/sidebar/AppSidebar";
import Wrapper from "@/components/global/Wrapper";
import Providers from "./providers";
import Footer from "@/components/global/Footer";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/header/Header";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
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
  keywords: [
    "e-commerce",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Type script",
  ],
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
          className={`${roboto.variable} antialiased w-full bg-stone-50 text-stone-950`}
        >
          <Providers>
            <AppSidebar />
            <Wrapper className="shadow-lg">
              <Header />
              <Container>{children}</Container>
              <Footer />
            </Wrapper>
          </Providers>
        </body>
      </html>
    </SessionProvider>
  );
}
