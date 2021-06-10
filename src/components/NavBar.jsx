import React from "react";
import { NavLink } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/Appbar";
import { Button, Grid } from "@material-ui/core";
import { LOGIN_ROUTE } from "../utils/consts";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../index";
import { useContext } from "react";

const Navbar = () => {
    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);
    const onSignOutClick = () => {
        auth.signOut().then(x => console.debug('x', x)).catch(error => console.error(error))
    }
    return (
        <AppBar color={"primary"} position="static">
            <Toolbar variant={"dense"}>
                <Grid container justify={"flex-end"}>
                    {user ? (
                        <>
                            <Button>Личный кабинет</Button>
                            <Button onClick={onSignOutClick}>
                                Выйти
                            </Button>
                        </>
                    ) : (
                        <NavLink to={LOGIN_ROUTE}>
                            <Button>Войти</Button>
                        </NavLink>
                    )}
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
