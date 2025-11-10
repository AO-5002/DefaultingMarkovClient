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
};

export function TooltipBtn({ children, text, onClick }: Children & Additional) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button className="outline" size={"icon"} onClick={onClick}>
          {children}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{text ?? "No Content"}</p>
      </TooltipContent>
    </Tooltip>
  );
}
