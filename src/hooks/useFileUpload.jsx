import { useState } from "react";

export const useFileUpload = () => {
  const [fileUpload, setFileUpload] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileUpload(file);
  };

  const clearFileUpload = () => {
    setFileUpload(null);
  };

  return {
    fileUpload,
    setFileUpload,
    handleFileChange,
    clearFileUpload,
  };
};
