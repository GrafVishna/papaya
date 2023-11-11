import React from "react";

export default function GridElementImage({ image, alt }) {
  return (
    <div className="relative pb-video-card cursor-pointer">
      <img
        src={image}
        alt={alt}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    </div>
  );
}
