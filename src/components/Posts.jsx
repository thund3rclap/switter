import React from "react";
import { connect } from "react-redux";
import Post from "./Post";

const Posts = function (props) {
    if (!props.posts || !props.posts.length) {
        return <p className="text-content">Постов пока нет </p>;
    }
    return props.posts.map((post, index) => <Post data={post} key={index} />);
};

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, null)(Posts);
