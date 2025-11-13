"use client";

import { Folder, FolderPlus } from "lucide-react";

function PortfolioCount() {
  return (
    <div className="col-start-1 w-full h-full bg-white text-black rounded-lg border border-zinc-200">
      <div className="w-full h-full flex gap-4 items-center justify-center p-4 relative">
        <Folder size={64} fill="black" />
        <p className="absolute top-9.5 left-23.5 font-bold text-white">3</p>
      </div>
    </div>
  );
}

function f() {
  return <div className="col-start-2 w-full h-full bg-red-50 "></div>;
}

function FunctionBar() {
  return (
    <div className="border-l border-zinc-400 bg-green-50 col-start-4 w-full h-full bg-green"></div>
  );
}

export { PortfolioCount, FunctionBar };
