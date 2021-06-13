import { Button, Container, Grid, Box } from "@material-ui/core";
import React, { useContext } from "react";
import { Context } from "../index.js";
import firebase from "firebase";
import Switter from "../images/switter.svg";
import Google from "../images/google.svg";
import Facebook from "../images/facebook.svg";
import {
    ContentWrapper,
    LogoContainer,
    LogInTextContainer,
    LogInButtonContainer,
    GoogleButton,
    FacebookButton,
} from "../utils/styles";

export default function LogIn(props) {
    const { auth } = useContext(Context);

    const login = (platform) => {
        let provider;
        if (platform === "facebook") {
            provider = new firebase.auth.FacebookAuthProvider();
        } else if (platform === "google") {
            provider = new firebase.auth.GoogleAuthProvider();
        }

        auth.signInWithPopup(provider)
            .then((x) => {
                console.log("x", x);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <Container>
            <Grid container style={ContentWrapper}>
                <Grid style={LogoContainer}>
                    <img src={Switter} alt={"Switter logo"} />
                </Grid>
                <Grid container style={LogInTextContainer}>
                    <h1>Welcome to Switter project</h1>
                    <h4>We have something special for you</h4>
                    {/* <p>Please Sign In to start</p> */}
                </Grid>
                <Grid style={LogInButtonContainer}>
                    <Box p={0}>
                        <Button
                            onClick={login.bind(null, "google")}
                            style={GoogleButton}
                        >
                            <img src={Google} alt={"Google"} />
                            Sign in with GOOGLE
                        </Button>
                        <Button
                            onClick={login.bind(null, "facebook")}
                            style={FacebookButton}
                        >
                            <img src={Facebook} alt={"Facebook"} />
                            Sign in with Facebook
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
