import Header from "../Header/Header.jsx";
import { Outlet } from "react-router-dom";
import Aside from "../Aside/Aside.jsx";
import React from "react";
import { ProfileWrapper } from "../Wrappers/ProfileWrapper.jsx";

export const ProfileLayout = () => {
  return (
    <>
      <Header />
      <ProfileWrapper>
        <Outlet />
      </ProfileWrapper>
      <Aside />
    </>
  );
};
