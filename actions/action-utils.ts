import { auth } from "@/lib/auth";
import { ActionResponseType, AuthUserType } from "@/utils/types";

export const getAuthUser = async (): Promise<AuthUserType | null> => {
  const session = await auth();
  if (!session?.user?.userId) return null;
  return session.user;
};

export const getAuthAdmin = async (): Promise<AuthUserType | null> => {
  const user = await getAuthUser();
  if (!user || user.role !== "admin") return null;
  return user;
};

export const sendSuccessToast = (message: string): ActionResponseType => {
  return { status: "success", message };
};

export const sendErrorToast = (error?: unknown): ActionResponseType => {
  const errorMessage =
    error instanceof Error ? error.message : "An unexpected error occurred";

  return { status: "error", message: errorMessage };
};
