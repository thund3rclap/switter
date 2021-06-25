import React from "react";
import {
    profileContainer,
    profileInfo,
    profilePhoto,
    profilePhotoSvg,
    profileTitle,
    publications,
    subscribers,
    subscribesContainer,
    userName,
    userTitleButton,
    wrapper,
    profileWrapHide,
} from "./Instastyles";
import "../InstagramApp/Popupstyles.css";
import "../../App.css";

export default function Instaprofile(props) {
    let style = wrapper;
    if (props.profileState === false) {
        style = { ...style, ...profileWrapHide };
    }
    console.debug(props);
    return (
        <div style={style}>
            <div style={profileContainer}>
                <div style={profilePhoto}>
                    <img
                        src={"https://i.redd.it/tn5eslc3h5361.jpg"}
                        alt="loginphoto"
                        style={profilePhotoSvg}
                    />
                </div>
                <div style={profileInfo}>
                    <div style={profileTitle}>
                        <div onClick={() =>
                                window.open(
                                    `https://www.instagram.com/${props.user.username}`,"_blank")}
                            style={userName}
                        >
                            <h3>{props.user.username}</h3>
                        </div>
                        <button
                            onClick={() =>
                                window.open(
                                    "https://www.instagram.com/accounts/edit/","_blank")}
                            style={userTitleButton}
                        >
                            Pедактировать профиль
                        </button>
                    </div>
                    <div style={subscribesContainer}>
                        <div style={publications}>21 Публикаций</div>
                        <div style={subscribers}>87 Подписчиков</div>
                        <div>30 Подписок</div>
                    </div>
                    <div>Привет тебе!</div>
                </div>
            </div>
        </div>
    );
}
