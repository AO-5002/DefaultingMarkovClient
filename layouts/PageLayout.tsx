import { Children } from "@/util/types/Children";
import Nav from "@/components/Navbar/Nav";
import items from "@/components/Navbar/mod";
import { AuthContextProvider } from "@/contexts/AuthContext";

function PageLayout({ children }: Children) {
  return (
    <section className="w-full min-h-screen grid grid-cols-12">
      <div className="w-full h-full p-8 col-start-2 col-span-10 flex flex-col items-center gap-12 ">
        <AuthContextProvider>
          <Nav items={items} />
          {children}
        </AuthContextProvider>
      </div>
    </section>
  );
}

export default PageLayout;
