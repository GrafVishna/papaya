import { Microphone, Search } from "../../Icons.jsx";
import RButton from "../../RButton/RButton.jsx";

export default function SearchInput() {
  return (
    <div className="flex flex-auto tablet:-ml-14 tablet:max-w-[442px] items-center bg-lg-sec p-1 rounded-full border border-white/10">
      <span className="">
        <Search />
      </span>
      <div className="flex-auto">
        <input
          placeholder="Search"
          type="text"
          className="min-w-0 bg-transparent w-full outline-0"
        />
      </div>
      <RButton
        tag="button"
        visible={true}
        className="mobile:w-8 mobile:h-8 w-7 h-7"
      >
        <Microphone className="mobile:w-[19px] mobile:h-[19px] h-[15px] w-[15px]" />
      </RButton>
    </div>
  );
}
