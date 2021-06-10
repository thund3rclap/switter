import LogIn from "./components/LogIn";
import Home from "./containers/Home";
import { LOGIN_ROUTE, WALL_ROUTE } from "./utils/consts";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: LogIn
  }
]

export const privateRoutes = [
  {
    path: WALL_ROUTE,
    Component: Home
  }
]