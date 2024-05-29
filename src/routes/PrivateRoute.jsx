import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ children }) {
  const {user,
    googleLogin, 
    EmailPassLogin,
    createUser,
    logout,
    authLoading} =useAuth()
  let location = useLocation();
  if (authLoading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return children;
   
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
 
}
