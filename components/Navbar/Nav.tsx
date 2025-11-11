"use client";
import { INavBar } from "./static";
import { TooltipBtn } from "../Tooltip/tip";
import { UserAuth } from "@/contexts/AuthContext";
import SignIn from "../SignIn";
import UserProfile from "./UserProfile";

function Nav({ items }: INavBar) {
  const { user } = UserAuth();
  return (
    <>
      <nav className="w-full h-8 flex flex-row-reverse items-center border-b border-zinc-200 gap-4">
        {user ? (
          <>
            <UserProfile user={user} />
            {items.map((item, i) => (
              <TooltipBtn key={i} text={item.title}>
                {item.icon}
              </TooltipBtn>
            ))}
          </>
        ) : (
          <SignIn />
        )}
      </nav>
    </>
  );
}
export default Nav;
