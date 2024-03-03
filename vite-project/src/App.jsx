import { Routes, Route, useNavigate } from "react-router-dom";
import { appRoutes } from "./lib/appRoutes";
import Signin from "./pages/SigninPage/SigninPage";
import Register from "./pages/SignupPage/SignupPage";
import NotFound from "./pages/NotFoundPage/NotFoundPage";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import MainPage from "./pages/MainPage/MainPage";
import TaskPage from "./pages/TaskPage/TaskPage";
import ExitPage from "./pages/ExitPage/ExitPage";
import "./App.css";

export default function App() {
  const [user, setUser] = useState(true);
  const navigate = useNavigate();
  function login() {
    setUser(true);
    navigate(appRoutes.MAIN)
  }
  function logout() {
    setUser(false);
    navigate(appRoutes.SIGNIN);
  }
  return (
    <Routes>
      <Route element={<PrivateRoute user={user} />}>
        <Route path={appRoutes.MAIN} element={<MainPage />}>
          <Route path={appRoutes.TASK} element={<TaskPage />} />
          <Route path={appRoutes.EXIT} element={<ExitPage logout={logout} />} />
        </Route>
      </Route>
      <Route element={<PrivateRoute />} />
      <Route path={appRoutes.SIGNIN} element={<Signin login={login} />} />
      <Route path={appRoutes.SIGNUP} element={<Register />} />
      <Route path={appRoutes.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}
