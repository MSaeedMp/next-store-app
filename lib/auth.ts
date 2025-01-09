import NextAuth, { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
// import { getEnvVariable } from "@/utils/helper";

const authConfig: NextAuthConfig = {
  providers: [Google],
  callbacks: {
    authorized({ auth }) {
      return !!auth?.user;
    },
  },
};

export const {
  auth,
  handlers: { GET, POST },
} = NextAuth(authConfig);
