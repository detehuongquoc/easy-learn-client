import {
  Box,
  Button,
  Hidden,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import {
  isAuthenticatedSelector,
  loadUser,
  registerUser,
} from "../../store/reducers/userSlice";
import AlertMessage from "../layout/AlertMessage";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
const RegisterForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const [alert, setAlert] = useState(null);
  const [registerForm, setRegisterForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  // const [alert, setAlert] = useState(null);
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  const { username, password, confirmPassword } = registerForm;

  const onChangeRegisterForm = (event) =>
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });

  const register = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setAlert({ type: "error", message: "Passwords do not match" });
      setTimeout(() => setAlert(null), 5000);
      return;
    }

    try {
      const registerData = await dispatch(registerUser(registerForm));
      console.log(registerData.payload);
      if (!registerData.payload.success) {
        setAlert({
          type: "error",
          message: registerData.payload.message,
        });
        setTimeout(() => setAlert(null), 5000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      display="flex"
      style={{ width: "80%" }}
      alignContent="center"
      className="login"
    >
      <Hidden xsDown>
        <img
          src="https://assets.quizlet.com/a/j/dist/i/signup/signup-illo.9020601c63ffbc7.png"
          alt="Italian Trulli"
        />
      </Hidden>
      <Box display="flex" flexDirection="column" className="login-form">
        <h1>Sign Up</h1>
        <AlertMessage info={alert} />
        <form className={classes.root} autoComplete="off" onSubmit={register}>
          <div>
            <TextField
              type="text"
              label="UserName"
              value={username}
              name="username"
              onChange={onChangeRegisterForm}
              fullWidth
              required
            />
          </div>
          <div>
            <TextField
              label="Password"
              type="password"
              value={password}
              name="password"
              onChange={onChangeRegisterForm}
              fullWidth
              required
            />
          </div>
          <div>
            <TextField
              label="Repeat PassWord"
              type="password"
              value={confirmPassword}
              name="confirmPassword"
              onChange={onChangeRegisterForm}
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
            Sign Up
          </Button>
        </form>
        <Typography variant="p" style={{ marginTop: "40px" }}>
          Already have an account ?{" "}
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "#FA7FAB" }}
          >
            Login
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default RegisterForm;
