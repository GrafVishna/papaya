import { useState } from "react";

export const useFileChange = (targetImage) => {
  const [file, setFile] = useState(null);
  if (targetImage) {
    const reader = new FileReader();
    reader.onload = () => {
      setFile(reader.result);
    };
    reader.readAsDataURL(targetImage);
    return file;
  }
};
