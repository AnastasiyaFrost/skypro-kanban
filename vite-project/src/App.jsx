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
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  function loginUser(newUser) {
    setUser(newUser);
    navigate(appRoutes.MAIN);
  }
  function logout() {
    setUser(null);
    navigate(appRoutes.SIGNIN);
  }
  return (
    <Routes>
      <Route element={<PrivateRoute user={user} />}>
        <Route path={appRoutes.MAIN} element={<MainPage user={user} />}>
          <Route path={appRoutes.TASK} element={<TaskPage />} />
          <Route path={appRoutes.EXIT} element={<ExitPage logout={logout} />} />
        </Route>
      </Route>

      <Route
        path={appRoutes.SIGNIN}
        element={<Signin loginUser={loginUser} />}
      />
      <Route
        path={appRoutes.SIGNUP}
        element={<Register loginUser={loginUser} />}
      />
      <Route path={appRoutes.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}
