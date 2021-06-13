import { Avatar } from "@material-ui/core";
import React from "react";
import { PostLikeButton } from "../utils/styles";
import LikeButton from "./Like";

export default function Post(props) {
    return (
        <div className="card">
            <div className="card-body">
                <div
                    style={{
                        display: "grid",
                        gridAutoFlow: "column",
                        gridGap: "10px",
                        gridTemplateColumns: "0fr 1fr",
                    }}
                >
                    <Avatar src={props.data.photoURL} />
                    <div>{props.data.displayName}</div>
                    <div>
                        <LikeButton style={PostLikeButton} />
                    </div>
                </div>
                <h5 className="card-title">{props.data.title}</h5>
                <p className="card-text">{props.data.text}</p>
                <p>{formatDate(props.data.created)}</p>
            </div>
        </div>
    );
}

function formatDate(time, format = "h:m:s D/M/Y") {
    const d = new Date(time);
    return format
        .replace(/Y/g, d.getFullYear())
        .replace(/M/g, (d.getMonth() + 1).toString().padStart(2, "0"))
        .replace(/D/g, d.getDate().toString().padStart(2, "0"))
        .replace(/h/g, d.getHours().toString().padStart(2, "0"))
        .replace(/m/g, d.getMinutes().toString().padStart(2, "0"))
        .replace(/s/g, d.getSeconds().toString().padStart(2, "0"));
}
