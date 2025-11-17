"use client";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Children } from "@/util/types/Children";

type Additional = {
  text?: string;
  redirection?: string;
  onClick?: () => void;
  variant?: "light" | "dark";
};

export function TooltipBtn({
  children,
  text,
  onClick,
  variant = "light",
}: Children & Additional) {
  // Icons inherit the text color from parent, button has transparent background
  const buttonClass =
    variant === "dark"
      ? "bg-transparent text-white hover:bg-zinc-800/50 border-transparent"
      : "bg-transparent text-black hover:bg-zinc-100 border-transparent";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button className={`${buttonClass}`} size={"icon"} onClick={onClick}>
          {children}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{text ?? "No Content"}</p>
      </TooltipContent>
    </Tooltip>
  );
}
