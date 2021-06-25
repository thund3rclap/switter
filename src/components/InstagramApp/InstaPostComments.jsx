import React, { useContext, useState } from "react";
import { Context } from "../..";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase";
import {
    commentbutton,
    commentbuttonContainer,
    commentsInputContainer,
    commentTextArea,
    modalCommentContent,
    modalCommentsList,
    textAreaButtonContainer,
} from "./Instastyles";

export default function InstaPostComments(props) {
    const { firestore } = useContext(Context);

    const [value, setValue] = useState("");
    const [comments] = useCollectionData(
        firestore.collection(`comments-post${props.post.id}`)
    );

    const sendComment = async () => {
        firestore.collection(`comments-post${props.post.id}`).add({
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setValue("");
    };

    if (!comments) {
        return null;
    }

    return (
        <div style={commentsInputContainer}>
            <div
                style={{
                    position: "relative",
                }}
            >
                <div style={modalCommentContent}>
                    {comments.map((comment, index) => (
                        <div key={index} style={modalCommentsList}>
                            <div>
                                <h5>{props.post.username}</h5>
                            </div>
                            <div>{comment.text}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div style={textAreaButtonContainer}>
                <div>
                    <textarea
                        style={commentTextArea}
                        placeholder={"Оставить комментарий"}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    ></textarea>
                </div>
                <div style={commentbuttonContainer}>
                    <button onClick={sendComment} style={commentbutton}>
                        ОТПРАВИТЬ
                    </button>
                </div>
            </div>
        </div>
    );
}
