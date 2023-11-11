import React from "react";

export default function PageWrapper({ children }) {
  return (
    <div className="wrapper w-screen  min-h-screen bg-lg-main overflow-hidden">
      {children}
    </div>
  );
}
