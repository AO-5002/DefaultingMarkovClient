import React from "react";
import { TooltipBtn } from "../Tooltip/tip";

function UserProfile({ user }: any) {
  return (
    <TooltipBtn text={user.displayName}>
      <div className="h-5 w-5">
        <img src={user.photoURL} className="rounded w-full h-full" />
      </div>
    </TooltipBtn>
  );
}

export default UserProfile;
