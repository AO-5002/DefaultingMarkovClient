import PageLayout from "@/layouts/PageLayout";

function page() {
  return (
    <PageLayout>
      <section className="w-full h-full grid grid-cols-6 grid-rows-[600px_1fr] gap-4">
        <div className="rounded w-full h-full col-start-1 row-start-1 col-span-4 bg-red-400">
          h
        </div>
        <div className="rounded w-full h-full col-start-5 row-start-1 col-span-2 bg-green-400">
          h
        </div>
        <div className="rounded w-full h-full col-start-1 row-start-2 col-span-6 bg-zinc-400"></div>
      </section>
    </PageLayout>
  );
}

export default page;
