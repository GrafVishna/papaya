import React from "react";

export default function InfoChannel({ data }) {
  return (
    <div className="flex-auto">
      <div className="flex gap-4">
        <span className="rounded-full overflow-hidden w-12 h-12 relative">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={data.avatar}
            alt={data.channel}
          />
        </span>
        <div className="opacity-60 font-[600] flex-auto">
          <h5 className="uppercase">{data.channel}</h5>
          <p>197K subscribers</p>
        </div>
      </div>
    </div>
  );
}
