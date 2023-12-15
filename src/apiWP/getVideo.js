import { GET_VIDEO_API, MAIN_URL_API } from "../api/GlobalURL.js";
import axios from "axios";

export const getFileUrl = async (fileId) => {
  try {
    const response = await axios.get(
      `${MAIN_URL_API}${GET_VIDEO_API}${fileId}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching file URL", error);
    return null;
  }
};
