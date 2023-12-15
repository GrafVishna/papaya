import { Camera, Notification } from "../../Icons.jsx";
import UserDropdown from "../../UserDropdown/UserDropdown.jsx";
import React from "react";

export default function UserActions() {
  return (
    <div className="flex items-center tablet:gap-8 mobile:gap-5 gap-3">
      <button>
        <Camera className="mobile:w-[24px] mobile:h-[24px] h-[19px] w-[19px]" />
      </button>
      <button>
        <Notification className="mobile:w-[24px] mobile:h-[24px] h-[19px] w-[19px]" />
      </button>
      <div>
        <UserDropdown />
      </div>
    </div>
  );
}
