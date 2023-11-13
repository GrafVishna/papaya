import { useState } from "react";

const useTextTruncation = (initialText, maxLength) => {
  const [truncatedText, setTruncatedText] = useState(
    initialText.length > maxLength
      ? initialText.substring(0, maxLength) + "..."
      : initialText,
  );

  const truncateText = (text) => {
    text.length > maxLength
      ? setTruncatedText(text.substring(0, maxLength) + "...")
      : setTruncatedText(text);
  };

  return [truncatedText];
};

export default useTextTruncation;
