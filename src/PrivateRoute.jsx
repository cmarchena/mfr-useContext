import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./context";
import { useContext } from "react";

export default function PrivateRoute({ children }) {
  const { isLoggedIn } = useContext(AuthContext);
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return { ...children };
}
