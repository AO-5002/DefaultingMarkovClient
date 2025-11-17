import { Children } from "@/util/types/Children";
import { Hero } from "@/app/static";
import Nav from "@/components/Navbar/Nav";
import items from "@/components/Navbar/mod";
import { AuthContextProvider } from "@/contexts/AuthContext";

function HeroLayout({ children }: Children) {
  return (
    <AuthContextProvider>
      <section className="w-full min-h-screen">
        {/* Sticky Navbar - Dark Theme */}
        <div className="sticky top-0 z-50 bg-zinc-900 border-b border-zinc-800">
          <div className="max-w-screen-xl mx-auto px-8 py-2">
            <Nav items={items} variant="dark" />
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-zinc-900 min-h-screen grid grid-cols-12">
          <div className="col-start-2 col-span-10 p-8">
            <Hero />
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-12">
          <div className="col-start-2 col-span-10 p-8 flex flex-col items-center gap-12">
            {children}
          </div>
        </div>
      </section>
    </AuthContextProvider>
  );
}

export { HeroLayout };
