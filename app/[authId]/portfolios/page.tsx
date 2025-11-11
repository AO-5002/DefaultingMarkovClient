import React from "react";
import PageLayout from "@/layouts/PageLayout";
import { GridContents } from "./static";
import { ScrollItems } from "./dynamic";

function page() {
  return (
    <PageLayout>
      <GridContents>
        <div className="w-full h-full row-start-1 rounded-lg border border-zinc-200">
          <div className="w-full h-full grid grid-cols-[200px_200px_200px_1fr] gap-4">
            <div className="col-start-1 w-full h-full bg-red-50 "></div>
            <div className="col-start-2 w-full h-full bg-red-50 "></div>
            <div className="col-start-3 w-full h-full bg-red-50 "></div>
            <div className="border-l border-zinc-400 bg-green-50 col-start-4 w-full h-full bg-green"></div>
          </div>
        </div>
        <div className="w-full h-full row-start-2 rounded-lg border border-zinc-200 overflow-hidden">
          <ScrollItems />
        </div>
      </GridContents>
    </PageLayout>
  );
}

export default page;
