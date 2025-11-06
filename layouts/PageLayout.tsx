import { Children } from "@/util/types/Children";
import Nav from "@/components/Navbar/Nav";
import items from "@/components/Navbar/mod";

function PageLayout({ children }: Children) {
  return (
    <section className="w-full min-h-screen grid grid-cols-12">
      <div className="w-full h-full p-8 col-start-2 col-span-10 flex flex-col items-center gap-12 ">
        <Nav items={items} />
        {children}
      </div>
    </section>
  );
}

export default PageLayout;
