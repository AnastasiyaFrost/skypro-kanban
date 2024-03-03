import { Navigate, Outlet } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";

export default function PrivateRoute({ user }) {
  return user ? <Outlet /> : <Navigate to={appRoutes.SIGNIN} />;
}
