import React, { useEffect, useState } from "react";
import { getUser } from "../../store/api/getUser.js";

export default function Author({ authorId, type }) {
  const [author, setAuthor] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUser(authorId);
        setAuthor(data);
      } catch (error) {
        console.error("Error setting posts:", error);
      }
    };

    fetchData();
  }, [authorId]);

  if (!author) {
    return;
  }

  // console.log(author);

  const channelAvatar = author["avatar_urls"]["48"];
  const channelName = author["name"];
  if (type === "avatar") {
    return (
      <span className="block w-8 h-8 rounded-full cursor-pointer overflow-hidden mt-0.5">
        <img
          src={channelAvatar && channelAvatar}
          alt={channelName && channelName}
        />
      </span>
    );
  } else if (type === "name") {
    return (
      <span className="uppercase mb-0.5 text-caption">
        {channelName && channelName}
      </span>
    );
  } else {
    return null;
  }
}
