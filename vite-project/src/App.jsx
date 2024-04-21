import { Routes, Route } from "react-router-dom";
import { appRoutes } from "./lib/appRoutes";
import Signin from "./pages/SigninPage/SigninPage";
import Register from "./pages/SignupPage/SignupPage";
import NotFound from "./pages/NotFoundPage/NotFoundPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import MainPage from "./pages/MainPage/MainPage";
import TaskPage from "./pages/TaskPage/TaskPage";
import ExitPage from "./pages/ExitPage/ExitPage";
import NewTaskPage from "./pages/NewTaskPage/NewTaskPage";
import { GlobalStyle } from "./styled/common/GlobalStyle.styled.js";

export default function App() {
  
  return (
    <>
    <GlobalStyle/>
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path={appRoutes.MAIN} element={<MainPage />}>
          <Route path={appRoutes.TASK} element={<TaskPage />} />
          <Route path={appRoutes.NEW_TASK} element={<NewTaskPage />} />
          <Route path={appRoutes.EXIT} element={<ExitPage />} />
        </Route>
      </Route>

      <Route path={appRoutes.SIGNIN} element={<Signin />} />
      <Route path={appRoutes.SIGNUP} element={<Register />} />
      <Route path={appRoutes.NOT_FOUND} element={<NotFound />} />
    </Routes>
    </>
  );
}
