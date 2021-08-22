import { Container } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import Footer from "./components/layout/Footer";
import Header2 from "./components/layout/Header2";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import Auth from "./Sreen/Auth";
import DashBoard from "./Sreen/DashBoard";
import HomeSreen from "./Sreen/HomeSreen";
import TodayVocabularySreen from "./Sreen/TodayVocabularySreen";
import {
  acessTokenSelector,
  isAuthenticatedSelector,
  loadUser,
} from "./store/reducers/userSlice";
import setAuthToken from "./utils/setAuthenToken";
function App() {
  const accessToken = useSelector(acessTokenSelector);
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  const dispatch = useDispatch();
  useEffect(async () => {
    if (accessToken) {
      setAuthToken(accessToken);
      const response = await dispatch(loadUser());
      console.log(response.payload.success);
    }
    // if (isAuthenticated) {
    //   dispatch(getAllVocabulary());
    // }
  }, [accessToken]);

  return (
    <Router>
      <div>
        <Header2 />

        <Switch>
          {/* <Route path="/detail/:id" component={CartDetail} /> */}
          <Route exact path="/">
            <HomeSreen />
          </Route>
          <Container style={{ margin: "40px 0" }}>
            <Route path="/detail/:id" component={LoginForm} />
            <Route
              path="/register"
              render={(props) => <Auth {...props} authRoute="register" />}
            />
            <ProtectedRoute exact path="/dashboard" component={DashBoard} />
            <ProtectedRoute
              exact
              path="/today"
              component={TodayVocabularySreen}
            />
            {/* <ProtectedRoute exact path="/dictionary" component={Dictionary} /> */}
            {/* <Route path="*" component={Error} /> */}
          </Container>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
