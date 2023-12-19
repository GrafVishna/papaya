import { useState } from "react";

export const useAuthErrors = () => {
  const [error, setError] = useState(null);
  return { error, setError };
};
