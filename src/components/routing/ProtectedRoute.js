import { Route, Redirect } from "react-router-dom";
import { Skeleton } from "@material-ui/lab";
import { useDispatch, useSelector } from "react-redux";
import {
  loadUser,
  acessTokenSelector,
  authLoadingSelector,
  isAuthenticatedSelector,
} from "../../store/reducers/userSlice";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const authLoading = useSelector(authLoadingSelector);

  if (authLoading)
    return (
      <div className="d-flex justify-content-center mt-2">
        <Skeleton variant="rect" style={{ width: "80%", height: "500px" }} />
      </div>
    );

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
