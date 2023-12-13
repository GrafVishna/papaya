// api/getPosts.js
import axios from "axios";

export const getPoster = async (posterApiLink) => {
  try {
    const response = await axios.get(`${posterApiLink}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching post", error);
    return null;
  }
};
