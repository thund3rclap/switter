import LogIn from "./components/LogIn";
import Home from "./containers/Home";
import Profile from "./components/Profile.jsx";
import { LOGIN_ROUTE, PROFILE_ROUTE, WALL_ROUTE } from "./utils/consts";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: LogIn
  }
]

export const privateRoutes = [
  {
    path: PROFILE_ROUTE,
    Component: Profile
  },
  {
    path: WALL_ROUTE,
    Component: Home
  }
]

