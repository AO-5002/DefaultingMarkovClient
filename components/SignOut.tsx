"use client";
import { TooltipBtn } from "./Tooltip/tip";
import { UserRound } from "lucide-react";
import { UserAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { Button } from "./ui/button";

interface Variation {
  variant?: "icon" | "btn";
}

function SignOut({ variant }: Variation) {
  const { logOut } = UserAuth(); // ✅ Move inside component

  const handleSignout = async () => {
    try {
      await logOut();
    } catch (e) {
      toast("Error Signing Out!");
    }
  };

  function IconLogOut() {
    return (
      <TooltipBtn text={"Sign Out"} onClick={handleSignout}>
        <UserRound />
      </TooltipBtn>
    );
  }

  function LogOutBtn() {
    return (
      <Button
        variant="outline"
        className="bg-zinc-900 text-white"
        onClick={handleSignout}
      >
        Sign Out
      </Button>
    );
  }

  return variant === "icon" ? <IconLogOut /> : <LogOutBtn />;
}

export default SignOut;
