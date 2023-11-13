import React from "react";
import { MAIN_URL } from "../../../store/GlobalURL.js";

export default function VideoComments({ data }) {
  const avatar = MAIN_URL + data.avatar;
  const channel = data.channel;

  return (
    <div className="pt-10">
      <div>
        <div className="text-body-main font-bold mb-2">
          <span>899</span> Comments
        </div>
        <ul>
          <li className="py-4 gap-4 grid grid-cols-[auto_1fr]">
            <div className="">
              <span className="block w-10 h-10 rounded-full overflow-hidden relative">
                <img
                  src={avatar}
                  alt="User"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </span>
            </div>
            <div className="">
              <div className=" mb-2">
                <h5 className="font-headline-text font-bold mb-0.5">
                  {channel}
                </h5>
                <div className="opacity-60 text-small">12.04.2023</div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam consectetur, dolorem et ipsa laboriosam molestias
                officia quisquam recusandae voluptate? Atque deleniti ea fuga
                magnam nostrum quaerat quas repellat, suscipit veniam veritatis.
                Aperiam laudantium libero neque provident velit.
              </p>
            </div>
          </li>
          <li className="py-4 gap-4 grid grid-cols-[auto_1fr]">
            <div className="">
              <span className="block w-10 h-10 rounded-full overflow-hidden relative">
                <img
                  src={avatar}
                  alt="User"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </span>
            </div>
            <div className="">
              <div className=" mb-2">
                <h5 className="font-headline-text font-bold mb-0.5">
                  {channel}
                </h5>
                <div className="opacity-60 text-small">12.04.2023</div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam consectetur, dolorem et ipsa laboriosam molestias
                officia quisquam recusandae voluptate? Atque deleniti ea fuga
                magnam nostrum quaerat quas repellat, suscipit veniam veritatis.
                Aperiam laudantium libero neque provident velit.
              </p>
            </div>
          </li>
          <li className="py-4 gap-4 grid grid-cols-[auto_1fr]">
            <div className="">
              <span className="block w-10 h-10 rounded-full overflow-hidden relative">
                <img
                  src={avatar}
                  alt="User"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </span>
            </div>
            <div className="">
              <div className=" mb-2">
                <h5 className="font-headline-text font-bold mb-0.5">
                  {channel}
                </h5>
                <div className="opacity-60 text-small">12.04.2023</div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam consectetur, dolorem et ipsa laboriosam molestias
                officia quisquam recusandae voluptate? Atque deleniti ea fuga
                magnam nostrum quaerat quas repellat, suscipit veniam veritatis.
                Aperiam laudantium libero neque provident velit.
              </p>
            </div>
          </li>
          <li className="py-4 gap-4 grid grid-cols-[auto_1fr]">
            <div className="">
              <span className="block w-10 h-10 rounded-full overflow-hidden relative">
                <img
                  src={avatar}
                  alt="User"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </span>
            </div>
            <div className="">
              <div className=" mb-2">
                <h5 className="font-headline-text font-bold mb-0.5">
                  {channel}
                </h5>
                <div className="opacity-60 text-small">12.04.2023</div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam consectetur, dolorem et ipsa laboriosam molestias
                officia quisquam recusandae voluptate? Atque deleniti ea fuga
                magnam nostrum quaerat quas repellat, suscipit veniam veritatis.
                Aperiam laudantium libero neque provident velit.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
