import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import {
  authLoadingSelector,
  isAuthenticatedSelector,
} from "../store/reducers/userSlice";
const Auth = ({ authRoute }) => {
  const authLoading = useSelector(authLoadingSelector);
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  const dispatch = useDispatch();
  let body;

  if (authLoading)
    body = (
      <div className="d-flex justify-content-center mt-2">
        <Skeleton variant="rect" style={{ width: "80%", height: "500px" }} />
      </div>
    );
  else if (isAuthenticated) return <Redirect to="/dashboard" />;
  else
    body = (
      <>
        {authRoute === "login" && <LoginForm />}
        {authRoute === "register" && <RegisterForm />}
      </>
    );
  return <div>{body}</div>;
};

export default Auth;
