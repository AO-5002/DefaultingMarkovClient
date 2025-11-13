import React from "react";
import PageLayout from "@/layouts/PageLayout";
import { GridContents, TopRow } from "./static";
import { ScrollItems } from "./dynamic";
import { PortfolioCount, FunctionBar } from "./top-row";

function page() {
  return (
    <PageLayout>
      <GridContents>
        <div className="w-full h-full row-start-1 rounded-lg ">
          <TopRow>
            <PortfolioCount />
            <div className="col-start-3 w-full h-full bg-red-50 "></div>
            <FunctionBar />
          </TopRow>
        </div>
        <div className="w-full h-full row-start-2 rounded-lg border border-zinc-200 overflow-hidden">
          <ScrollItems />
        </div>
      </GridContents>
    </PageLayout>
  );
}

export default page;
