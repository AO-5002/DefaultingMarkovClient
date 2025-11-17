"use client";
import { Button } from "@/components/ui/button";

function LearnMoreBtn() {
  return (
    <Button
      variant="outline"
      className="mt-4 w-xs bg-zinc-900 text-white py-8 font-bold"
    >
      Learn More
    </Button>
  );
}

function EnterBtn() {
  return <Button>Get Started</Button>;
}

export { LearnMoreBtn, EnterBtn };
