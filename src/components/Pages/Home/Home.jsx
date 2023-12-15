import GridElement from "../../Main/GridElement/GridElement.jsx";
import "overlayscrollbars/styles/overlayscrollbars.css";

import { useEffect, useState } from "react";
import { fetchPosts } from "../../../apiWP/getPosts.js";

export default function Home() {
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
    <div className="grid page-content mobile:grid-cols-video-items-t desktop:grid-cols-video-items-tb desktop-big:grid-cols-video-items grid-cols-video-items-m gap-x-4 mobile:gap-y-10 gap-y-5">
      {posts.map((element, index) => (
        <GridElement key={index} videoData={element} />
      ))}
    </div>
  );
}
