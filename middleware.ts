import NextAuth from "next-auth";
import authConfig from "./lib/auth.config";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const redirectAndSetCookie = (req: NextRequest, redirectTo: string) => {
  const res = NextResponse.redirect(new URL(redirectTo, req.url));
  res.cookies.set("forwardPathname", req.nextUrl.pathname, {
    httpOnly: false,
    path: "/",
  });
  return res;
};

const secret = process.env.AUTH_SECRET;

const { auth } = NextAuth(authConfig);
export default auth(async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = await getToken({
    req,
    secret,
    cookieName: "__Secure-authjs.session-token",
  });
  const role = token?.role;

  // Public routes logic
  if (pathname.startsWith("/auth") && (role === "user" || role === "admin")) {
    return redirectAndSetCookie(req, "/");
  }

  // Admin routes logic
  if (pathname.startsWith("/admin") && role !== "admin") {
    return redirectAndSetCookie(req, "/auth/signin");
  }

  // Signed-in user-only routes logic
  if (
    ["/cart", "/favorites"].some((route) => pathname.startsWith(route)) &&
    role !== "admin" &&
    role !== "user"
  ) {
    return redirectAndSetCookie(req, "/auth/signin");
  }
});

export const config = {
  matcher: [
    "/admin/:path*",
    "/cart/:path*",
    "/favorites/:path*",
    "/auth/:path*",
  ],
};
