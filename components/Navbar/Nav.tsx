"use client";
import { INavBar } from "./static";
import { TooltipBtn } from "../Tooltip/tip";
import { UserAuth } from "@/contexts/AuthContext";
import SignIn from "../SignIn";
import UserProfile from "./UserProfile";
import { LogoImg } from "../Logo";

interface NavProps extends INavBar {
  variant?: "light" | "dark";
}

function Nav({ items, variant = "light" }: NavProps) {
  const { user } = UserAuth();
  // Set text color on the nav container - all children will inherit
  const textColor = variant === "dark" ? "text-white" : "text-black";

  return (
    <nav
      className={`w-full h-10 flex justify-between items-center gap-4 ${textColor}`}
    >
      <LogoImg />
      {user ? (
        <div className="w-full h-full flex flex-row-reverse items-center gap-4">
          <UserProfile user={user} />
          {items.map((item, i) => (
            <TooltipBtn key={i} text={item.title} variant={variant}>
              {item.icon}
            </TooltipBtn>
          ))}
        </div>
      ) : (
        <SignIn variant={variant} />
      )}
    </nav>
  );
}
export default Nav;
