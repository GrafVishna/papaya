// api/getPosts.js
import { GET_CURRENT_POST_API, MAIN_URL_API } from "../GlobalURL.js";
import axios from "axios";
import { getFileUrl } from "./getVideo.js";
import { getPoster } from "./getPoster.js";
import { getUser } from "./getUser.js";

export const getAllPostData = async (postId) => {
  try {
    let allData = {
      postData: null,
      videoData: null,
      posterData: null,
      authorData: null,
    };
    const response = await axios.get(
      `${MAIN_URL_API}${GET_CURRENT_POST_API}${postId}`,
    );
    const data = response.data;
    if (data) {
      const currentVideoLink = data?.acf?.video_file;
      const videoData = await getFileUrl(currentVideoLink);
      const posterApi = data._links["wp:featuredmedia"][0]["href"];
      const videoPoster = await getPoster(posterApi);
      const authorId = data.author;
      const authorData = await getUser(authorId);

      allData = {
        postData: data,
        videoData: videoData,
        posterData: videoPoster,
        authorData: authorData,
      };
    }

    return allData;
  } catch (error) {
    console.error("Error fetching post", error);
    return null;
  }
};
