import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import {
  authLoadingSelector,
  isAuthenticatedSelector,
  loginUser,
} from "../../store/reducers/userSlice";
import AlertMessage from "../layout/AlertMessage";
import {
  Box,
  makeStyles,
  TextField,
  Button,
  Typography,
  Hidden,
  CircularProgress,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
const LoginForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const authLoading = useSelector(authLoadingSelector);
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const [alert, setAlert] = useState(null);
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  const { username, password } = loginForm;
  const onChangeLoginForm = (event) => {
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
    console.log(loginForm);
  };

  const login = async (event) => {
    event.preventDefault();
    try {
      const response = await dispatch(loginUser(loginForm));
      console.log(response);
      if (response.payload.success === false) {
        setAlert({
          type: "error",
          message: response.payload.message,
        });
        setTimeout(() => setAlert(null), 3000);
      } else if (response.payload.success) {
        setAlert({
          type: "success",
          message: response.payload.message,
        });
        setTimeout(() => setAlert(null), 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box
        display="flex"
        style={{ width: "80%" }}
        alignContent="center"
        className="login"
      >
        <Hidden xsDown>
          <img src="https://assets.quizlet.com/a/j/dist/i/signup/signup-illo.9020601c63ffbc7.png" />
        </Hidden>
        <Box display="flex" flexDirection="column" className="login-form">
          <h1>Login</h1>
          <AlertMessage info={alert} />
          <form className={classes.root} autoComplete="off" onSubmit={login}>
            <div>
              <TextField
                type="text"
                label="UserName"
                value={username}
                name="username"
                onChange={onChangeLoginForm}
                fullWidth
                required
              />
            </div>
            <div>
              <TextField
                label="PassWord"
                type="password"
                value={password}
                name="password"
                onChange={onChangeLoginForm}
                fullWidth
                required
              />
            </div>
            <Button
              variant="outlined"
              color="secondary"
              style={{ marginTop: "25px" }}
              type="submit"
            >
              Login
            </Button>
          </form>
          <Typography variant="p" style={{ marginTop: "40px" }}>
            Don't have an account ?{" "}
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "#FA7FAB" }}
            >
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default LoginForm;
