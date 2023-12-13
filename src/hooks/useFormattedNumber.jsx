import React from "react";

export default function useFormattedNumber(number) {
  let value;

  // Конвертація рядка в число
  const numericValue = parseFloat(number);

  if (!isNaN(numericValue)) {
    if (numericValue >= 1000000) {
      const numb = (value = `${(numericValue / 1000000).toFixed(1)}m`);
    } else if (numericValue >= 1000) {
      value = `${(numericValue / 1000).toFixed(1)}K`;
    } else {
      value = numericValue.toString();
    }
  } else {
    value = "";
  }

  return value;
}
