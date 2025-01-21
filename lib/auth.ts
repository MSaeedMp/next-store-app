import NextAuth, { AuthError, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { DefaultSession } from "next-auth";
import { User } from "@prisma/client";
import bcryptjs from "bcryptjs";
import { generateRandomHex } from "@/utils/helper";
import { AuthUserType } from "@/utils/types";
import { createUserAction, findUserByEmail } from "@/actions/action-user";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";

// Fixing NextAuth v5 bug
class customError extends AuthError {
  constructor(message: string) {
    super();
    this.message = message;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId?: string;
    role?: string;
  }
}

declare module "next-auth" {
  interface Session {
    user: {
      userId?: string;
      role?: string;
    } & DefaultSession["user"];
  }
}

type credentialsType = {
  name: string;
  email: string;
  password: string;
  action: string;
};

const handleCredentialSignUp = async (
  userOnDB: User | null,
  credentials: credentialsType
) => {
  const { name, email, password } = credentials;
  if (userOnDB) throw new customError("User already exists.");
  const hashedPassword = await bcryptjs.hash(password, 12);
  await createUserAction(email, name, hashedPassword, null);
  const newUser = await findUserByEmail(email);
  return newUser;
};

const handleCredentialSignIn = async (
  userOnDB: User | null,
  credentials: credentialsType
) => {
  const { password } = credentials;
  if (!userOnDB) throw new customError("User not found.");
  const isPasswordCorrect = await bcryptjs.compare(password, userOnDB.password);
  if (!isPasswordCorrect)
    throw new customError("Email or password is not correct.");
  return userOnDB;
};

export const { auth, handlers, signIn, signOut } = NextAuth({
  session: {
    strategy: "jwt",
  },
  // adapter: PrismaAdapter(prisma),
  // ...authConfig,
  providers: [
    Github,
    Google,
    CredentialsProvider({
      name: "Email and Password",
      credentials: {
        name: { label: "name", type: "text" },
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
        action: { label: "action", type: "text" },
      },
      // Validate credentials
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password)
          throw new customError("Email and password are required.");

        try {
          const userOnDB = await findUserByEmail(credentials.email as string);
          if (credentials.action === "signUp") {
            return handleCredentialSignUp(
              userOnDB,
              credentials as credentialsType
            );
          }
          if (credentials.action === "signIn") {
            return handleCredentialSignIn(
              userOnDB,
              credentials as credentialsType
            );
          }
          throw new customError("Invalid action.");
        } catch (error) {
          throw new customError(
            error instanceof Error ? error.message : "Authentication failed."
          );
        }
      },
    }),
  ],
  callbacks: {
    authorized({ auth }) {
      return !!auth?.user;
    },
    // Create user after sign in
    async signIn({ user }: { user: AuthUserType }): Promise<boolean> {
      try {
        const userOnDB = await findUserByEmail(user.email as string);
        if (!userOnDB && user.email && user.name) {
          const { email, name, image } = user;
          const randomByte = generateRandomHex(8);
          const password = await bcryptjs.hash(randomByte, 12);
          await createUserAction(email, name, password, image);
        }
        return true;
      } catch {
        return false;
      }
    },

    async jwt({ token, user }) {
      if (user) {
        const userOnDB = await findUserByEmail(user.email as string);
        token.userId = userOnDB?.id;
        token.role = userOnDB?.role;
      }
      return token;
    },

    async session({ session, token }): Promise<Session> {
      session.user.userId = token.userId;
      session.user.role = token.role;
      return session;
    },
  },
});
