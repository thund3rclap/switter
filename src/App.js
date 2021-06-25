import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/NavBar.jsx";
import AppRouter from "./components/AppRouter.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "./index.js";
import { useContext } from "react";
import AuthCheck from "./components/AuthCheck.jsx";



export default function App() {
    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <BrowserRouter>
            <Navbar />
            <AppRouter />
            <AuthCheck />
        </BrowserRouter>
    );
}
