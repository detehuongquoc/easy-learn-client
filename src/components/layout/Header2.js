import {
  Typography,
  Toolbar,
  makeStyles,
  Button,
  AppBar,
  useMediaQuery,
  Hidden,
} from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { emtyVocabulary } from "../../store/reducers/vocabularySlice";
import { Link } from "react-router-dom";
import {
  isAuthenticatedSelector,
  logoutUser,
} from "../../store/reducers/userSlice";

const Header2 = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const handleLogoutUser = (event) => {
    event.preventDefault();
    dispatch(logoutUser());
    dispatch(emtyVocabulary());
    console.log("ok");
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-wrap">
      <div class="container-fluid navbar-container">
        <a class="navbar-brand" href="#">
          <img
            src="https://i.ibb.co/2kSb7KX/logoweb.png"
            alt="Italian Trulli"
          ></img>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ul-navbar">
            <Typography
              component={Link}
              to="/"
              variant="h6"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              Home
            </Typography>
            {isAuthenticated && (
              <>
                <Typography
                  component={Link}
                  to="/"
                  variant="h7"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  All Vocabularys
                </Typography>
                <Typography
                  component={Link}
                  to="/today"
                  variant="h7"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Today Vocabularys
                </Typography>
                {/* <Typography
                    component={Link}
                    to="/dictionary"
                    variant="h7"
                    style={{ textDecoration: "none", color: "white" }}
                    className={classes.title}
                  >
                    Dictionary
                  </Typography> */}
              </>
            )}
            {isAuthenticated ? (
              <Button
                className="navbar-button"
                onClick={handleLogoutUser}
                color="inherit"
                style={{ position: "absolute", right: "0", color: "white" }}
              >
                Logout
              </Button>
            ) : (
              <div className="navbar-button">
                <Button
                  component={Link}
                  to="/login"
                  color="inherit"
                  style={{ color: "white" }}
                >
                  Login
                </Button>

                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  component={Link}
                  to="/register"
                >
                  Sign up
                </Button>
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header2;
