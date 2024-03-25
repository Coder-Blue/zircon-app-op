/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useUserAuth } from "./UserAuthContext";

function PrivateRoute({ children }) {
  const { currentUser } = useUserAuth();

  if (!currentUser) {
    return <Navigate to={"/"} />;
  }

  return children;
}

export default PrivateRoute;
