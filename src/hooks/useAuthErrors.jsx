import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { setUser } from "../store/slices/userSlice.js";
import { auth } from "../firebase.js";

export const useAuthErrors = () => {
  const [error, setError] = useState(null);
  return { error, setError };
};
