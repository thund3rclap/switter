import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import { INSTA_WALL, LOGIN_ROUTE} from "../utils/consts";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { Context } from "../index";
import { useSelector } from "react-redux";

export default function AppRouter (props) {
    
    // const { auth } = useContext(Context);
    // const [user] = useAuthState(auth);

    const {idUser} = useSelector( (state) => ({
        idUser: state.account.id
    }))
    return idUser ? (
        <Switch>
            {privateRoutes.map(({ path, Component }) => (
                <Route
                    key={path}
                    path={path}
                    component={Component}
                    exact={true}
                />
            ))}
            <Redirect to={INSTA_WALL} />
        </Switch>
    ) : (
        <Switch>
            {publicRoutes.map(({ path, Component }) => (
                <Route
                    key={path}
                    path={path}
                    component={Component}
                    exact={true}
                />
            ))}
            <Redirect to={LOGIN_ROUTE} />
        </Switch>
    );
};


