import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { setUser } from "../store/slices/userSlice.js";

export const AuthProviderSetUser = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUser());
  }, [dispatch]);
  return <>{children}</>;
};
