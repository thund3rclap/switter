import React, { useState } from "react";
import InstapostCard from "../InstagramApp/InstapostCard";
import Instaprofile from "../InstagramApp/Instaprofile";
import InstaNavBar from "../InstagramApp/InstaNavBar";
import { postsContent, postsWrapper } from "../InstagramApp/Instastyles";
import Modal from "../InstagramApp/InstaModal";

export default function InstaRouter(props) {
    //modal window
    const [modalActive, setModalActive] = useState(false);

    // postlist, username
    const [state, setState] = React.useState({
        postlist: [],
        user: null,
    });

    //search
    const [value, searchSetValue] = useState("");
    const SearchPosts = state.postlist;

    //profileHide
    const [profileState, setProfileState] = useState(true);

    //searchFilter
    const filteredPosts = value
        ? SearchPosts.filter((post) => {
              return (
                  post.caption &&
                  post.caption.toLowerCase().includes(value.toLowerCase())
              );
          })
        : state.postlist;

    React.useEffect(() => {
        fetch("//api.switter.maxqnei.com/getinstaposts", {
            credentials: "include",
        })
            .then((r) => r.json())
            .then(({ result, error }) => {
                if (error) {
                    alert(error);
                } else {
                    setState({
                        ...state,
                        user: result.user,
                        postlist: result.posts.data,
                    });
                }
            });
    }, []);
    console.log("render", state.postlist);

    if (!state.user) {
        return <h3>Loading....</h3>;
    }

    const userNameItems = state.user;
    return (
        <React.Fragment>
            {modalActive && (
                <Modal
                    postlist={state.postlist}
                    active={modalActive}
                    setActive={setModalActive}
                    user={userNameItems}
                    post={filteredPosts[modalActive.postIndex]}
                >
                    <InstapostCard
                        post={filteredPosts[modalActive.postIndex]}
                    />
                </Modal>
            )}
            <InstaNavBar
                postlist={state.postlist}
                searchSetValue={searchSetValue}
                setProfileState={setProfileState}
            />
            <Instaprofile user={userNameItems} profileState={profileState} />
            <div style={postsWrapper}>
                <div style={postsContent}>
                    {filteredPosts.map((post, index) => (
                        <InstapostCard
                            key={post.id}
                            post={post}
                            onClick={() => setModalActive({ postIndex: index })}
                        />
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
}
