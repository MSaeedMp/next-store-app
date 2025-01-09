import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Container from "@/components/global/Container";
import Header from "@/components/header/Header";
import AppSidebar from "@/components/sidebar/AppSidebar";
import Wrapper from "@/components/global/Wrapper";
import Providers from "./providers";
import Footer from "@/components/global/Footer";
// import { ClerkProvider } from "@clerk/nextjs";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ClerkProvider>
      <html lang="en">
        <head>
          {/* Standard Favicon */}
          <link rel="icon" href="/favicon.ico" />

          {/* Favicon for different sizes */}
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />

          {/* Apple Touch Icon */}
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

          {/* Android Icons */}
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-chrome-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/android-chrome-512x512.png"
          />

          {/* Web Manifest for PWA */}
          <link rel="manifest" href="/site.webmanifest" />
        </head>
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
    // </ClerkProvider>
  );
}
