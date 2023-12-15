import React, { useEffect, useRef, useState } from "react";
import UseScroll from "../../hooks/useScroll.jsx";
import Filters from "../Header/Filters/Filters.jsx";
import AsideVideoElement from "./AsideVideoElement/AsideVideoElement.jsx";
import data from "../../testData/testData.json";
import { fetchPosts } from "../../apiWP/getPosts.js";

export default function AsideVideo({ videoId }) {
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
    <div className="aside-video desktop:pl-5 pl-3 py-1 overflow-hidden pt-14 tablet:min-w-[340px] desktop:min-w-[460px] relative">
      <Filters className="absolute w-full top-0" />
      <div className="max-h-full pt-4" ref={asideVideoRef}>
        <ul className="flex flex-col gap-4 pb-8">
          {posts.map((element, index) => (
            <AsideVideoElement key={index} data={element} index={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}
