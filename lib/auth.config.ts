import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import type { NextAuthConfig } from "next-auth";

// An empty auth config for protecting routes while using prisma adapter
export default { providers: [Github, Google] } satisfies NextAuthConfig;
