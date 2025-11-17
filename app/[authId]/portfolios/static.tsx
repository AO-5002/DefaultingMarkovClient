import { Children } from "@/util/types/Children";

function TopRow({ children }: Children) {
  return (
    <div className="w-full h-full grid grid-cols-[200px_200px_200px_1fr] gap-4">
      {children}
    </div>
  );
}

function GridContents({ children }: Children) {
  return (
    <div className="w-full h-[calc(90vh-100px)] grid grid-cols-1 grid-rows-[100px_1fr] gap-4">
      {children}
    </div>
  );
}

function IconBox({ children }: Children) {
  return (
    <div className="bg-zinc-800 p-4 flex w-[100px] h-[100px] rounded-xl justify-center items-center">
      {children}
    </div>
  );
}

export { GridContents, TopRow, IconBox };
