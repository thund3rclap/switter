import React from "react";
import PostForm from "../components/PostForm.jsx";
import Posts from "../components/Posts.jsx";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../index";
import { useContext } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import "firebase/firestore";

export default function Home() {
    const { auth, firestore } = useContext(Context);
    const [user] = useAuthState(auth);
    const [messages] = useCollectionData(firestore.collection("messages"));
    console.log(messages);
    const sendMessages = async (data) => {
        firestore.collection("messages").add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            created: Date.now(),
            liked: false,
            ...data,
        });
    };

    return (
        <div className="container pt-3">
            <div className="row">
                <div className="col">
                    {/* <PostForm onsend={(text) => {sendMessages(text)}} /> */}
                    <PostForm sendMessages={sendMessages} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2>Посты:</h2>
                    <Posts posts={messages} />
                </div>
            </div>
        </div>
    );
}
