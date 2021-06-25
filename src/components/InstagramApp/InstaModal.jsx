import React from "react";
import "../InstagramApp/Popupstyles.css";
import {
    modalTitle,
    modalTitleCaption,
    modalTitleImg,
    modatCommentWrapper,
} from "./Instastyles";
import InstaPostComments from "./InstaPostComments";

const Modal = (props) => {
    return (
        <div
            className={props.active ? "my-modal active" : "my-modal"}
            onClick={() => props.setActive(null)}
        >
            <div
                className={"my-modal-content popup-image"}
                onClick={(e) => e.stopPropagation()}
            >
                {props.children}
                <div>
                    <div style={modalTitle}>
                        <img
                            src="https://i.redd.it/tn5eslc3h5361.jpg"
                            alt="user-avatar"
                            style={modalTitleImg}
                        />
                        <h5>{props.user.username}</h5>
                    </div>
                    <div style={modatCommentWrapper}>
                        <div>
                            <div style={modalTitleCaption}>
                                {props.post.caption}
                            </div>
                        </div>
                        <div>
                            <InstaPostComments post={props.post} />
                        </div>
                        <div>{props.post.timestamp}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
