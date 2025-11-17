"use client";
import { TooltipBtn } from "./Tooltip/tip";
import { UserRound } from "lucide-react";
import { UserAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

interface SignInProps {
  variant?: "light" | "dark";
}

function SignIn({ variant = "light" }: SignInProps) {
  const { googleSignIn } = UserAuth();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (e) {
      toast("Error Signing In!");
    }
  };

  return (
    <TooltipBtn text={"Sign In"} onClick={handleSignIn} variant={variant}>
      <UserRound />
    </TooltipBtn>
  );
}

export default SignIn;
