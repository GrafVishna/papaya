import React from "react";
import ActionsWrapper from "../ActionsWrapper/ActionsWrapper.jsx";
import { Dislike, Dots, Like, Notification } from "../../Icons.jsx";
import UseFormattedNumber from "../../../hooks/useFormattedNumber.jsx";

export default function VideoActions({ likes }) {
  const likesValue = UseFormattedNumber(likes);
  return (
    <ActionsWrapper>
      <button>
        <Like />
        <span>{likesValue}</span>
      </button>
      <button>
        <Dislike />
      </button>
      <button>
        <Notification />
        <span>Share</span>
      </button>
      <button>
        <Dots />
      </button>
    </ActionsWrapper>
  );
}
