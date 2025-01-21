import Link from "next/link";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";
import { setForwardPathCookie } from "@/lib/utils";
import { usePathname } from "next/navigation";

const NavSignUp = () => {
  const session = useSession();
  const user = session.data?.user;
  const pathname = usePathname();

  return (
    <>
      {user ? (
        <p className="text-white text-left text-sm ml-4 max-w-20">
          Welcome, <strong>{user.name?.split(" ").at(0)}</strong>
        </p>
      ) : (
        <Button
          variant="secondary"
          className="hidden sm:flex relative text-foreground rounded-full ml-3 font-bold"
          onClick={() => setForwardPathCookie(pathname)}
          asChild
        >
          <Link href="/auth/signup">Sign up</Link>
        </Button>
      )}
    </>
  );
};
export default NavSignUp;
