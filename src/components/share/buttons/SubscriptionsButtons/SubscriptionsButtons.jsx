import React from "react";
import { Notification } from "../../../Icons.jsx";
import ActionsWrapper from "../../../CurrentVideo/ActionsWrapper/ActionsWrapper.jsx";

export default function SubscriptionsButtons() {
  return (
    <ActionsWrapper>
      <button>
        <span>Join</span>
      </button>
      <button className="active">
        <Notification />
        <span>Subscribed</span>
      </button>
    </ActionsWrapper>
  );
}
