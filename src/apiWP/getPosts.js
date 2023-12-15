// apiWP.js
import axios from "axios";
import { GET_POST_API, MAIN_URL_API } from "../api/GlobalURL.js";

export const fetchPosts = async (category) => {
  const postCategory = category;
  try {
    const response = await axios.get(
      `${MAIN_URL_API}${GET_POST_API}${
        postCategory ? `&categories=${postCategory}` : ""
      }`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
