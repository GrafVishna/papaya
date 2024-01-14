import { useState } from "react";

export const useImageChange = (targetImage) => {
  const [image, setImage] = useState(null);
  if (targetImage) {
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(targetImage);
    return image;
  }
};
