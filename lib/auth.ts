import NextAuth, { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import { getEnvVariable } from "@/utils/helper";

const authConfig: NextAuthConfig = {
  providers: [
    Google({
      clientId: getEnvVariable("GOOGLE_CLIENT_ID"),
      clientSecret: getEnvVariable("GOOGLE_CLIENT_SECRET"),
    }),
  ],
  secret: getEnvVariable("NEXTAUTH_SECRET"),
  callbacks: {
    async jwt({ token }) {
      token.userRole = "user";
      return token;
    },
  },
};

export const {
  auth,
  handlers: { GET, POST },
} = NextAuth(authConfig);
