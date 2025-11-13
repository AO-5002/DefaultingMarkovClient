"use client";
import { INavBar } from "./static";
import { TooltipBtn } from "../Tooltip/tip";
import { UserAuth } from "@/contexts/AuthContext";
import SignIn from "../SignIn";
import UserProfile from "./UserProfile";
import { LogoImg } from "../Logo";

function Nav({ items }: INavBar) {
  const { user } = UserAuth();
  return (
    <>
      <nav className="w-full h-10 border-b border-zinc-200 flex justify-between items-center gap-4 p-2">
        <LogoImg />
        {user ? (
          <>
            <div className="w-full h-full flex flex-row-reverse items-center gap-4">
              <UserProfile user={user} />
              {items.map((item, i) => (
                <TooltipBtn key={i} text={item.title}>
                  {item.icon}
                </TooltipBtn>
              ))}
            </div>
          </>
        ) : (
          <SignIn />
        )}
      </nav>
    </>
  );
}
export default Nav;
