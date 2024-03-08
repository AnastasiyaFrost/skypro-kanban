import { Navigate, Outlet } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { useUser } from "../../hooks/useUser";

export default function PrivateRoute() {
  const { user } = useUser();
  return user ? <Outlet /> : <Navigate to={appRoutes.SIGNIN} />;
}
