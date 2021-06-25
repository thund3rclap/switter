import LogIn from "./components/LogIn";
// import Home from "./containers/Home";
import Profile from "./components/Profile.jsx";
import InstaRouter from "../src/components/InstagramApp/InstaRouter";
import {
    LOGIN_ROUTE,
    PROFILE_ROUTE,
    // WALL_ROUTE,
    INSTA_LOGIN,
    INSTA_WALL,
} from "./utils/consts";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: LogIn,
    },
    {
        path: INSTA_LOGIN,
        Component: LogIn,
    },
];

export const privateRoutes = [
    {
        path: PROFILE_ROUTE,
        Component: Profile,
    },
    // {
    //   path: WALL_ROUTE,
    //   Component: Home
    // },
    {
        path: INSTA_WALL,
        Component: InstaRouter,
    },
];
