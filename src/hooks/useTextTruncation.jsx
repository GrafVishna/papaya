import { useState } from "react";

const useTextTruncation = (initialText, maxLength) => {
  const [truncatedText, setTruncatedText] = useState(
    initialText.length > maxLength
      ? initialText.substring(0, maxLength) + "..."
      : initialText,
  );

  const truncateText = (text) => {
    const truncated =
      text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

    setTruncatedText(truncated);

    return {
      truncatedText: truncated,
      isTruncated: text.length > maxLength,
    };
  };

  const resetText = () => {
    setTruncatedText(initialText);
  };

  return {
    truncatedText,
    truncateText,
    resetText,
  };
};

export default useTextTruncation;
