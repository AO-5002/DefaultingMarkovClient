"use client";
import { TooltipBtn } from "./Tooltip/tip";
import { UserRound } from "lucide-react";
import { UserAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

const { googleSignIn } = UserAuth();

const handleSignIn = async () => {
  try {
    await googleSignIn();
  } catch (e) {
    toast("Error Signing In!");
  }
};

function SignIn() {
  return (
    <TooltipBtn text={"Sign In"} onClick={handleSignIn}>
      <UserRound />
    </TooltipBtn>
  );
}

export default SignIn;
