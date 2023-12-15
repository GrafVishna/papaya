// apiWP/getPosts.js
import { GET_CURRENT_POST_API, MAIN_URL_API } from "../api/GlobalURL.js";
import axios from "axios";

export const getCurrentPost = async (postId) => {
  try {
    const response = await axios.get(
      `${MAIN_URL_API}${GET_CURRENT_POST_API}${postId}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching post", error);
    return null;
  }
};
