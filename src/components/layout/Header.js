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
import {
  isAuthenticatedSelector,
  logoutUser,
} from "../../store/reducers/userSlice";
import { emtyVocabulary } from "../../store/reducers/vocabularySlice";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  // title: {
  //   margin: "20px",
  // },
  grow: {
    flexGrow: 1,
  },
  appbar: {
    height: "80px",
    display: "flex",
    justifyContent: "center",
    top: "0",
    marginBottom: "100px",
  },
  // appbar: ({ sm }) => ({
  //   width: sm && "100%",
  // }),
  title: ({ sm }) => ({
    margin: sm ? "15px" : "25px",
  }),
  logo: ({ sm, xs }) => ({
    width: sm && "50%",
  }),
}));

export default function ButtonAppBar() {
  const sm = useMediaQuery("(max-width: 600px)");
  const classes = useStyles({ sm });
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const handleLogoutUser = (event) => {
    event.preventDefault();
    dispatch(logoutUser());
    dispatch(emtyVocabulary());
    console.log("ok");
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={classes.appbar}
        color="primary"
        style={{ marginBottom: "200px" }}
      >
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Hidden xsDown>
              <img
                src="https://i.ibb.co/2kSb7KX/logoweb.png"
                alt="Italian Trulli"
                className={classes.logo}
              ></img>
            </Hidden>
            <div style={{}}>
              <Typography
                component={Link}
                to="/"
                variant="h6"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                className={classes.title}
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
                    className={classes.title}
                  >
                    All Vocabularys
                  </Typography>
                  <Typography
                    component={Link}
                    to="/today"
                    variant="h7"
                    style={{ textDecoration: "none", color: "white" }}
                    className={classes.title}
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
            </div>
          </div>
          {isAuthenticated ? (
            <Button onClick={handleLogoutUser} color="inherit">
              Logout
            </Button>
          ) : (
            <div>
              <Button component={Link} to="/login" color="inherit">
                Login
              </Button>

              <Button
                variant="contained"
                color="secondary"
                size="small"
                component={Link}
                to="/register"
                style={{ marginLeft: "5px" }}
              >
                Sign up
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
