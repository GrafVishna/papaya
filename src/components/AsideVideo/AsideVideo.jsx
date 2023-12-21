import React, { useEffect, useRef, useState } from "react";
import UseScroll from "../../hooks/useScroll.jsx";
import AsideVideoElement from "./AsideVideoElement/AsideVideoElement.jsx";
import { fetchPosts } from "../../apiWP/getPosts.js";
import { PiVideo } from "react-icons/pi";

export default function AsideVideo() {
  const asideVideoRef = useRef();
  UseScroll(asideVideoRef);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPosts(3);
        setPosts(data);
      } catch (error) {
        console.error("Error setting posts:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="aside-video desktop:pl-5 pl-3 py-1 overflow-hidden  tablet:min-w-[340px] desktop:min-w-[460px] relative">
      <div className="pb-2">
        <h3 className="text-body-main opacity-70 flex items-center gap-2 ">
          <PiVideo size={23} />
          <span>Related Videos</span>
        </h3>
      </div>
      <div className="max-h-full" ref={asideVideoRef}>
        <ul className="flex flex-col gap-4 pb-8">
          {posts.map((element, index) => (
            <AsideVideoElement key={index} data={element} index={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}
