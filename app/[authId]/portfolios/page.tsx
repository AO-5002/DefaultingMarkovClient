import React from "react";
import PageLayout from "@/layouts/PageLayout";
import { GridContents } from "./static";
import { ScrollItems } from "./dynamic";

function page() {
  return (
    <PageLayout>
      <GridContents>
        <div className="w-full h-full row-start-1 rounded"></div>
        <div className="w-full h-full row-start-2 rounded bg-green-50">
          <ScrollItems />
        </div>
      </GridContents>
    </PageLayout>
  );
}

export default page;
