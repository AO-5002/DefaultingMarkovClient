"use client";

import { INavBar } from "./static";
import { TooltipBtn } from "../Tooltip/tip";

function Nav({ items }: INavBar) {
  return (
    <nav className="w-full h-24 flex flex-row justify-between">
      {items.map((item, i) => (
        <TooltipBtn key={i} text={item.title}>
          {item.icon}
        </TooltipBtn>
      ))}
    </nav>
  );
}

export default Nav;
