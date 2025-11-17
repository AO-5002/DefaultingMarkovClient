"use client";
import {
  Ellipsis,
  Import,
  Plus,
  Minus,
  ChevronDown,
  Clock,
  Check,
  ChevronLeft,
  Weight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

function BackBtn() {
  return (
    <div className="w-full h-8 flex-row justify-between">
      <Button className="bg-black text-white">
        <ChevronLeft size={48} />
      </Button>
    </div>
  );
}

function OptionHeader() {
  return (
    <div className="w-full h-2 border-zinc-200 flex flex-row items-center">
      <BackBtn />
    </div>
  );
}

function AddBtn() {
  return (
    <Button className="bg-zinc-900 text-white">
      <Plus />
    </Button>
  );
}

function ImportBtn() {
  return (
    <Button className="bg-zinc-900 text-white">
      <Import />
    </Button>
  );
}

function SaveBtn() {
  return (
    <Button className="bg-zinc-900 text-white">
      <Check />
    </Button>
  );
}

function InputField({
  children,
  Icon,
}: {
  children: React.ReactNode;
  Icon?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 items-start">
      <span className="flex items-center gap-2">
        {Icon ?? <Clock size={16} />}
        <p className=" text-base">{children}</p>
      </span>

      <Input />
    </div>
  );
}

function OptionParams() {
  return (
    <div className="flex h-16 flex-rows items-center gap-8">
      <InputField Icon={<Weight size={16} />}>LGD</InputField>
      <InputField>Time Horizon</InputField>
    </div>
  );
}

function EditableName() {
  return (
    <div className="w-full h-16 flex justify-between items-center gap-12 border-zinc-200 border-b">
      <h1 className="text-6xl font-light font-mono">Portfolio</h1>
      <div className="w-full h-full flex flex-row items-center justify-end gap-4">
        <AddBtn />
        <ImportBtn />
        <SaveBtn />
      </div>
    </div>
  );
}

interface IData {
  id: string;
  dpdState: string;
  ficoScore: number;
  balance: number;
}

function TableRowData({ data }: { data: IData }) {
  return (
    <TableRow>
      <TableCell className="font-medium">{data.id}</TableCell>
      <TableCell>{data.dpdState}</TableCell>
      <TableCell>{data.ficoScore}</TableCell>
      <TableCell className="text-right font-mono">${data.balance}</TableCell>
    </TableRow>
  );
}

function EditableTable() {
  return (
    <Table className="border border-zinc-200 rounded-lg">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow className="bg-zinc-200 text-black font-bold">
          <TableHead className="">Id</TableHead>
          <TableHead>DPD State</TableHead>
          <TableHead>FICO Score</TableHead>
          <TableHead className="text-right">Balance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right font-mono">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export { EditableName, EditableTable, OptionHeader, OptionParams };
