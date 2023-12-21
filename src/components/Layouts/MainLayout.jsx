import React from "react";
import Header from "../Header/Header.jsx";
import Aside from "../Aside/Aside.jsx";
import { Outlet } from "react-router-dom";
import ContentWrapper from "../Wrappers/ContentWrapper.jsx";

export default function MainLayout() {
  return (
    <>
      <Header />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      <Aside />
    </>
  );
}
