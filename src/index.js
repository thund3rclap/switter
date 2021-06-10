import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { compose, createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/rootReducer";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const store = createStore(
    rootReducer,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

firebase.initializeApp({
    apiKey: "AIzaSyA_o8wD73UPhy0lN6l8bAzON0MocnAhFqU",
    authDomain: "switter-ba60b.firebaseapp.com",
    projectId: "switter-ba60b",
    storageBucket: "switter-ba60b.appspot.com",
    messagingSenderId: "910823627216",
    appId: "1:910823627216:web:017ed622d8a66e635541d5",
    measurementId: "G-X78XXYCENT",
});
firebase.analytics();

const auth = firebase.auth();
const firestore = firebase.firestore();

export const Context = createContext(null);

ReactDOM.render(
    <Context.Provider
        value={{
            firebase,
            auth,
            firestore,
        }}
    >
        <Provider store={store}>
            <App />
        </Provider>
    </Context.Provider>,
    document.getElementById("root")
);

reportWebVitals();
