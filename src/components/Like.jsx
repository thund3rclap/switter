import React from "react";
import Like from "../images/like.svg";
import Liked from "../images/liked.svg";
import { ButtonBase } from "@material-ui/core";
import { PostLikeButton } from "../utils/styles";

class LikeButton extends React.Component {
    state = {
        liked: false,
    };
    Liker = () => {
        let localLiked = this.state.liked;
        localLiked = !localLiked;
        this.setState({ liked: localLiked });
    };

    render() {
        return (
            <ButtonBase onClick={() => this.Liker()}>
                {this.state.liked === false ? (
                    <img style={PostLikeButton} src={Like} alt="like" />
                ) : (
                    <img style={PostLikeButton} src={Liked} alt="liked" />
                )}
            </ButtonBase>
        );
    }
}

export default LikeButton;
