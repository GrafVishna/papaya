import React from "react";
import { Notification } from "../../Icons.jsx";
import ActionsWrapper from "../ActionsWrapper/ActionsWrapper.jsx";

export default function SubscriptionsButtons() {
  return (
    <ActionsWrapper>
      <button className="">
        <span>Join</span>
      </button>
      <button className="active">
        <Notification />
        <span>Subscribed</span>
      </button>
    </ActionsWrapper>
  );
}
