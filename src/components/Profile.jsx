import React, { Component } from "react";
import {
    UserProfileTitle,
    UserProfilePhoto,
    UserProfileInfo,
    Photo,
} from "../utils/styles";
import firebase from "firebase";

class Profile extends Component {
    render() {
        const user = firebase.auth().currentUser;
        if (user !== null) {
            const displayName = user.displayName;
            const email = user.email;
            const photoUrl = user.photoURL;

            console.log(displayName);
            console.log(email);
            console.log(photoUrl);
        }

        return (
            <div style={{ margin: "0 auto" }}>
                <div style={UserProfileTitle}>
                    <div style={UserProfilePhoto}>
                        <img
                            style={Photo}
                            src={user.photoURL}
                            alt="Userphoto"
                        />
                    </div>
                    <div style={UserProfileInfo}>
                        Name: <h3>{user.displayName}</h3>
                        Email: <h3>{user.email}</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
