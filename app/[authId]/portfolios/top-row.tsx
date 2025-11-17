"use client";

import {
  Folder,
  FolderPlus,
  Upload,
  Play,
  FileDown,
  Scale,
  DollarSign,
} from "lucide-react";
import { TooltipBtn } from "@/components/Tooltip/tip";
import { IconBox } from "./static";

function PortfolioCount() {
  return (
    <div className="col-start-1 w-full h-full bg-white text-black rounded-lg border border-zinc-200">
      <div className="w-full h-full flex gap-4 items-center justify-center p-4 relative">
        <Folder size={64} fill="black" />
        <p className="absolute top-10 left-23.5 font-bold text-white">3</p>
      </div>
    </div>
  );
}

// function box() {
//   return <div className="col-start-3 w-full h-full bg-red-50 "></div>;
// }

function TotalPortfolioValue() {
  return (
    <div className="col-start-2 w-full h-full bg-white text-black rounded-lg border border-zinc-200">
      <div className="w-full h-full flex gap-4 items-center justify-center p-4 relative"></div>
    </div>
  );
}

// Example implementation
function FunctionBar() {
  return (
    <div className="border border-zinc-200 col-start-4 w-full h-full flex items-center justify-around gap-2 px-4 rounded-lg">
      <TooltipBtn text="Create New Portfolio">
        <FolderPlus size={24} />
      </TooltipBtn>
      <TooltipBtn text="Compare Portfolios">
        <Scale size={24} />
      </TooltipBtn>
      <TooltipBtn text="Run Simulation">
        <Play size={24} />
      </TooltipBtn>
      <TooltipBtn text="Export Report">
        <FileDown size={24} />
      </TooltipBtn>
    </div>
  );
}

export { PortfolioCount, FunctionBar, TotalPortfolioValue };
