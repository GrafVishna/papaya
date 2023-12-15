import axios from "axios";
import { GET_USER_API, MAIN_URL_API } from "../api/GlobalURL.js";

export const getUser = async (userId) => {
  try {
    const response = await axios.get(`${MAIN_URL_API}${GET_USER_API}${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching User", error);
    return null;
  }
};
