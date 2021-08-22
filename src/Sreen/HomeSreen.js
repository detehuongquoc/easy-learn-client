import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthenticatedSelector } from "../store/reducers/userSlice";
import Introduce from "../components/HomeSreen/Introduce";
import CenterHome from "../components/HomeSreen/CenterHome";
import LastHome from "../components/HomeSreen/LastHome";
const HomeSreen = () => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  if (isAuthenticated) return <Redirect to="/dashboard" />;
  return (
    <div style={{ marginTop: "-80px" }}>
      <Introduce />
      <CenterHome />
      <LastHome />
    </div>
  );
};

export default HomeSreen;
