import { Children } from "@/util/types/Children";
import Nav from "@/components/Navbar/Nav";
import items from "@/components/Navbar/mod";
import { AuthContextProvider } from "@/contexts/AuthContext";

function PageLayout({ children }: Children) {
  return (
    <section className="w-full min-h-screen grid grid-cols-12">
      <div className="w-full h-full col-start-2 col-span-10">
        <AuthContextProvider>
          {/* Sticky Navbar - Light Theme */}
          <div className="sticky top-0 z-50 bg-white border-b border-zinc-200 px-8 py-2 -mx-8">
            <Nav items={items} variant="light" />
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col items-center gap-12">
            {children}
          </div>
        </AuthContextProvider>
      </div>
    </section>
  );
}

export default PageLayout;
