import React from "react";

export default function ActionsWrapper({ children }) {
  return (
    <div className="video-actions-buttons">
      <div className="flex items-center">{children}</div>
    </div>
  );
}
