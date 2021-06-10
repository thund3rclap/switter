import { Button, Container, Grid, Box } from "@material-ui/core";
import React, { useContext } from "react";
import { Context } from "../index.js";
import firebase from "firebase";

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
        .then(x => {console.log('x', x)})
        .catch(error => {console.log(error)});
        
    };
    return (
        <Container>
            <Grid
                container
                style={{ height: window.innerHeight - 50 }}
                alignItems={"center"}
                justify={"center"}
            >
                <Grid
                    style={{ width: 400, background: "lightgray" }}
                    container
                    alignItems={"center"}
                    direction={"column"}
                >
                    <Box p={5}>
                        <Button
                            onClick={login.bind(null, "google")}
                            variant={"outlined"}
                        >
                            Войти с помощью GOOGLE
                        </Button>
                        <Button
                            onClick={login.bind(null, "facebook")}
                            variant={"outlined"}
                        >
                            Войти с помощью Facebook
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
