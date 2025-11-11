import { Children } from "@/util/types/Children";

function GridContents({ children }: Children) {
  return (
    <div className="w-full h-[calc(100vh-100px)] grid grid-cols-1 grid-rows-[100px_1fr] gap-4">
      {children}
    </div>
  );
}

export { GridContents };
