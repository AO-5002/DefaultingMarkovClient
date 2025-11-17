import { Children } from "@/util/types/Children";
import { Hero } from "@/app/static";

function HeroLayout({ children }: Children) {
  return (
    <section className="w-full min-h-screen grid grid-cols-12">
      <div className="bg-zinc-900 col-start-1 col-span-12 min-h-screen grid grid-cols-12">
        <div className="col-start-2 col-span-10 p-8">
          <Hero />
        </div>
      </div>
      <div className="col-start-2 col-span-10 p-8 flex flex-col items-center gap-12">
        {children}
      </div>
    </section>
  );
}

export { HeroLayout };
