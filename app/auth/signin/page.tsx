"use client";

import FormInput from "@/components/form/FormInput";
import { SocialSignInButton, SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PiSignIn } from "react-icons/pi";
import QuickAccessSeparator from "@/components/form/QuickAccessSeparator";
import {
  credentialSignInAction,
  socialSignInAction,
} from "@/actions/action-user";
import { useForwardRouteContext } from "@/hooks/useForwardRouteContext";

const SignInPage = () => {
  const forwardPath = useForwardRouteContext();
  return (
      <div className=" flex justify-center items-center">
        <div className="bg-white rounded-lg max-w-[500px] p-6 sm:p-8 md:p-10 shadow-xl border border-stone-200">
          <h2 className="text-xl font-[800] text-foreground text-center mb-3 mt-4">
            Welcome Back to{" "}
            <span className="font-semibold whitespace-nowrap bg-stone-950 text-stone-50 rounded-sm px-4 py-1">
              Next Store
            </span>
          </h2>
          <h3 className="text-muted-foreground text-sm  text-center mb-6">
            Please sign in to continue
          </h3>
          <FormContainer
            schemaName="signInSchema"
            action={credentialSignInAction}
            redirectReloadPath={forwardPath || "/"}
            newSession={true}
          >
            <FormInput
              type="email"
              name="email"
              label="Email address"
              placeholder="Enter your email address..."
              defaultValue="admin@test.io"
              autocomplete="email"
            />
            <FormInput
              type="password"
              name="password"
              label="Password"
              placeholder="Enter your password..."
              defaultValue="password"
              autocomplete="current-password"
            />
            <SubmitButton text="Sign in" className="w-full mt-4" />
          </FormContainer>
          <QuickAccessSeparator />
          <form action={socialSignInAction}>
            <SocialSignInButton provider="google" className="mt-4 w-full" />
            <SocialSignInButton provider="github" className="mt-4 w-full" />
          </form>
          <div className="mt-8 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              Don&apos;t have an account?
            </span>
            <Link href={"/auth/signup"} className="flex items-center gap-1">
              <Button variant="link" className="font-semibold text-sm">
                <PiSignIn className="!w-4 !h-4" /> Sign up
              </Button>
            </Link>
          </div>
        </div>
      </div>
  );
};
export default SignInPage;
