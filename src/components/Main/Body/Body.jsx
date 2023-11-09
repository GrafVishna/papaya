import React from "react";
import GridElement from "../GridElement/GridElement.jsx";
import SimpleBar from "simplebar-react";

const data = [
  {
    poster: "./img/img1.jpg",
    avatar: "./img/avatars/u1.jpg",
    time: "4:30",
    title: "Design and Prototype an App with Play - Full 3-hour Course",
    channel: "Designcode",
    views: "14000",
    date: "20.9.2023",
  },
  {
    poster: "./img/img2.jpg",
    avatar: "./img/avatars/u2.jpg",
    time: "4:30",
    title: "Create 3D Site with Spline and React - Full Course",
    channel: "Designcode",
    views: "14000",
    date: "20.9.2023",
  },
  {
    poster: "./img/img3.jpg",
    avatar: "./img/avatars/u3.jpg",
    time: "4:30",
    title: "Design and Prototype an App with Play - Full 3-hour Course",
    channel: "Designcode",
    views: "14000",
    date: "20.9.2023",
  },
  {
    poster: "./img/img4.jpg",
    avatar: "./img/avatars/u4.jpg",
    time: "4:30",
    title: "Design and Prototype an App with Play - Full 3-hour Course",
    channel: "Designcode",
    views: "14000",
    date: "20.9.2023",
  },
  {
    poster: "./img/img5.jpg",
    avatar: "./img/avatars/u5.jpg",
    time: "4:30",
    title: "Design and Prototype an App with Play - Full 3-hour Course",
    channel: "Designcode",
    views: "14000",
    date: "20.9.2023",
  },
  {
    poster: "./img/img6.jpg",
    avatar: "./img/avatars/u6.jpg",
    time: "4:30",
    title: "Design and Prototype an App with Play - Full 3-hour Course",
    channel: "Designcode",
    views: "14000",
    date: "20.9.2023",
  },
];

export default function Body() {
  return (
    <div className=" h-full overflow-hidden">
      <SimpleBar className="h-full overflow-auto px-4 mobile:px-8 desktop:px-14 py-8">
        <div className="grid grid-cols-video-items gap-x-4 gap-y-10 h-full">
          {data.map((element, index) => (
            <GridElement key={index} data={element} />
          ))}
        </div>
      </SimpleBar>
    </div>
  );
}
