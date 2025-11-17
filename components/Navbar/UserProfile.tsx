import React from "react";
import { TooltipBtn } from "../Tooltip/tip";

function UserProfile({ user, variant }: any) {
  const textColor = variant === "dark" ? "text-white" : "text-black";
  return (
    <TooltipBtn text={user.displayName}>
      <div className="h-5 w-5">
        <img
          src={user.photoURL}
          className={`rounded w-full h-full ${textColor}`}
        />
      </div>
    </TooltipBtn>
  );
}

export default UserProfile;
