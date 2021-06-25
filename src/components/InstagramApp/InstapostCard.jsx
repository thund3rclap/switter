import React from "react";
import { InstapostCardPhoto, postCardContainer } from "./Instastyles";
import "../InstagramApp/Popupstyles.css";

export default function InstapostCard(props) {
    return (
        <React.Fragment>
            <div onClick={props.onClick} style={postCardContainer}>
                <img
                    src={props.post.media_url}
                    alt="post-foto"
                    style={InstapostCardPhoto}
                />
                {/* пропс пост и данные которые нужно отрендерить */}
            </div>
        </React.Fragment>
    );
}
