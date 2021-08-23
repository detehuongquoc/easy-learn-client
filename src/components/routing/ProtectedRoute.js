import { Route, Redirect } from "react-router-dom";
import { Skeleton } from "@material-ui/lab";
import { useDispatch, useSelector } from "react-redux";
import {
  loadUser,
  acessTokenSelector,
  authLoadingSelector,
  isAuthenticatedSelector,
} from "../../store/reducers/userSlice";
import { CircularProgress } from "@material-ui/core";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const authLoading = useSelector(authLoadingSelector);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <>
            <Component {...rest} {...props} />
          </>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;
