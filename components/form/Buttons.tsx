"use client";

import { Button } from "@/components/ui/button";
import { cn, setForwardPathCookie } from "@/lib/utils";
import { useFormContext } from "react-hook-form";
import { ReloadIcon } from "@radix-ui/react-icons";
import { LuTrash2, LuPen } from "react-icons/lu";
import {
  FaApple,
  FaGithub,
  FaGoogle,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import { RiLogoutBoxFill } from "react-icons/ri";
import { RiLoginBoxFill } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOutAction } from "@/actions/action-user";
import { BsHandbag } from "react-icons/bs";

type btnSize = "sm" | "lg" | "default" | "icon";

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};

export function SubmitButton({
  className = "",
  text = "submit",
  size = "lg",
}: SubmitButtonProps) {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <Button
      type="submit"
      disabled={isSubmitting}
      className={cn("capitalize", className)}
      size={size}
    >
      {isSubmitting ? (
        <>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
}

export function AddToCartSignInButton({ size = "lg" }: { size?: btnSize }) {
  const pathname = usePathname();
  return (
    <Link href="/auth/signin">
      <Button
        type="submit"
        size={size}
        onClick={() => setForwardPathCookie(pathname)}
        className={cn(
          "bg-brand-500 hover:bg-brand-600 transition-colors duration-300 space-x-2 rounded-sm"
        )}
      >
        <div className="flex items-center gap-2">
          <span>Add to cart</span>
          <BsHandbag />
        </div>
      </Button>
    </Link>
  );
}

export function AddToCartSubmitButton({
  size = "lg",
  className,
}: {
  size?: btnSize;
  className?: string;
}) {
  const {
    formState: { isSubmitting },
  } = useFormContext();
  return (
    <Button
      type="submit"
      disabled={isSubmitting}
      size={size}
      className={cn(
        "bg-brand-500 hover:bg-brand-600 transition-colors duration-300 space-x-2 rounded-sm",
        className
      )}
    >
      {isSubmitting ? (
        <>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Please wait...
        </>
      ) : (
        <div className="flex items-center gap-2">
          <span>Add to cart</span>
          <BsHandbag />
        </div>
      )}
    </Button>
  );
}

type actionType = "edit" | "delete";

export const IconButton = ({ actionType }: { actionType: actionType }) => {
  const formContext = useFormContext();
  const isSubmitting = formContext ? formContext.formState.isSubmitting : false;
  const renderIcon = () => {
    switch (actionType) {
      case "edit":
        return <LuPen />;
      case "delete":
        return <LuTrash2 />;
      default:
        const never: never = actionType;
        throw new Error(`Invalid action type: ${never}`);
    }
  };

  return (
    <Button
      type="submit"
      size="icon"
      variant="link"
      className="p-2 cursor-pointer"
    >
      {isSubmitting ? <ReloadIcon className="animate-spin" /> : renderIcon()}
    </Button>
  );
};

export const SocialSignInButton = ({
  provider,
  className,
}: {
  provider: "google" | "github" | "apple";
  className: string;
}) => {
  const providerDetails = () => {
    switch (provider) {
      case "google":
        return {
          icon: <FaGoogle />,
          name: "Google",
        };
      case "apple":
        return {
          icon: <FaApple />,
          name: "Apple",
        };
      case "github":
        return {
          icon: <FaGithub />,
          name: "github",
        };
      default:
        const never: never = provider;
        throw new Error(`Invalid provider name: ${never}`);
    }
  };

  const { icon, name } = providerDetails();

  return (
    <Button
      type="submit"
      name="action"
      value={provider}
      className={cn(className)}
    >
      {icon}
      <span>Continue With {name}</span>
    </Button>
  );
};

export const SignOutTrigger = () => {
  return (
    <form action={signOutAction}>
      <Button
        type="submit"
        variant="ghost"
        className="w-full flex items=center justify-start text-base text-stone-200 py-6 sm:py-8 px-4"
      >
        <RiLogoutBoxFill className="!w-5 !h-5" />
        <span>Sign out</span>
      </Button>
    </form>
  );
};

export const SignInTrigger = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Link href="/auth/signin">
      <Button
        type="submit"
        variant="ghost"
        className="w-full flex items=center justify-start text-base text-stone-200 py-6 sm:py-8 px-4"
        onClick={onClick}
      >
        <RiLoginBoxFill className="!w-5 !h-5" />
        <span>Sign in</span>
      </Button>
    </Link>
  );
};

export const CardSignInButton = () => {
  const pathname = usePathname();
  return (
    <Link href="/auth/signin">
      <Button
        size={"icon"}
        variant={"ghost"}
        className="cursor-pointer p-2 hover:bg-stone-900 bg-stone-900 bg-opacity-70 transition-color duration-500 text-white hover:text-white"
        onClick={() => setForwardPathCookie(pathname)}
      >
        <FaRegHeart />
      </Button>
    </Link>
  );
};

export const CardSubmitButton = ({
  isFavorite,
  onClick,
}: {
  isFavorite: boolean;
  onClick?: () => void;
}) => {
  return (
    <Button
      type="submit"
      size="icon"
      variant="ghost"
      className="cursor-pointer p-2 hover:bg-stone-900 bg-stone-600 bg-opacity-80 transition-color duration-500 text-white hover:text-white"
      onClick={onClick}
    >
      {isFavorite ? <FaHeart /> : <FaRegHeart />}
    </Button>
  );
};
