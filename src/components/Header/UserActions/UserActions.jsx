import { Camera, Notification } from "../../Icons.jsx";

export default function UserActions() {
  return (
    <div className="flex items-center tablet:gap-8 mobile:gap-5 gap-3">
      <button>
        <Camera className="mobile:w-[24px] mobile:h-[24px] h-[19px] w-[19px]" />
      </button>
      <button>
        <Notification className="mobile:w-[24px] mobile:h-[24px] h-[19px] w-[19px]" />
      </button>
      <div className="mobile:h-10 mobile:w-10 w-8 h-8 bg-blue rounded-full flex items-center justify-center">
        <span className="text-white text-xl font-medium">A</span>
      </div>
    </div>
  );
}
