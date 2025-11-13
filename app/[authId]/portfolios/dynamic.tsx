import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import { Children } from "@/util/types/Children";
import { DollarSign, TrendingDown, Icon } from "lucide-react";
import { ChartLineDefault } from "./charts";

interface ItemContentProps {
  heading: string;
  description?: string;
}

function IconBox({ children }: Children) {
  return (
    <div className="bg-zinc-800 p-4 flex w-[100px] h-[100px] rounded-xl justify-center items-center">
      {children}
    </div>
  );
}

function EADBox() {
  return (
    <div className="col-start-1 row-start-1 col-span-3 border border-zinc-500 w-full h-full rounded-xl p-4 flex flex-row justify-between items-center gap-2">
      <div className="h-full flex flex-col justify-between">
        <span className="text-base font-medium text-zinc-200">Total EAD</span>
        <h1 className="text-3xl font-mono">$129.1M</h1>
      </div>
      <IconBox>
        <DollarSign size={36} />
      </IconBox>
    </div>
  );
}

function DeliquantBox() {
  return (
    <div className="col-start-4 row-start-1 col-span-3 border border-zinc-500 w-full h-full rounded-xl p-4 flex flex-row justify-between items-center gap-2">
      <div className="h-full flex flex-col justify-between">
        <span className="text-base font-medium text-zinc-200">
          Deliquancy %
        </span>
        <h1 className="text-3xl font-mono">8.8</h1>
      </div>
      <IconBox>
        <TrendingDown size={36} />
      </IconBox>
    </div>
  );
}

function ExpectedLossChart() {
  return (
    <div className="col-start-1 row-start-2 col-span-8 w-full h-full rounded-xl overflow-hidden">
      <ChartLineDefault />
    </div>
  );
}

function HealthPortfolio() {
  return (
    <div className="col-start-7 row-start-1 col-span-2 border border-zinc-500 w-full h-full rounded-xl"></div>
  );
}

function ItemContent({ heading, description }: ItemContentProps) {
  return (
    <>
      <h1 className="text-6xl font-bold">{heading}</h1>
      <div className="w-full h-full grid grid-cols-8 grid-rows-[125px_1fr] mt-8 gap-4">
        <EADBox />
        <DeliquantBox />
        <HealthPortfolio />
        <ExpectedLossChart />
      </div>
    </>
  );
}

function ScrollItems() {
  return (
    <ScrollStack stackPosition="10%">
      <ScrollStackItem itemClassName="bg-zinc-900 text-white flex flex-col gap-4">
        <ItemContent heading="Portfolio" />
      </ScrollStackItem>
      <ScrollStackItem itemClassName="bg-zinc-900 text-white flex flex-col gap-4">
        <ItemContent heading="BoA" />
      </ScrollStackItem>
      <ScrollStackItem itemClassName="bg-zinc-900 text-white flex flex-col gap-4">
        <ItemContent heading="Chase" />
      </ScrollStackItem>
    </ScrollStack>
  );
}

export { ScrollItems };
