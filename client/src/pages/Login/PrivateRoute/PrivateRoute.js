import React from "react";
import useAuth from "./../../../Hooks/useAuth";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const PrivateRoute = () => {
  let location = useLocation();

  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <CircularProgress color="secondary" />;
  }

  return user.email ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
