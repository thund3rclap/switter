import React from "react";
import { connect } from "react-redux";
import { createPost } from "../redux/actions.js";

class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            text: "",
        };
    }

    submitHandler = (event) => {
        event.preventDefault();

        const { title, text } = this.state;

        const newPost = {
            title,
            text,
            id: Date.now().toString(),
        };
        this.props.createPost(newPost);
        this.setState({ title: "", text: "" });
    };

    changeTextareaHandler = (event) => {
        event.persist();
        this.setState((prev) => ({
            ...prev,
            ...{
                [event.target.name]: event.target.value,
            },
        }));
    };

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="input-content">
                    <label htmlFor="title">Заголовок поста</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Заголовок"
                        id="title"
                        value={this.state.title}
                        name="title"
                        onChange={this.changeTextareaHandler}
                    />
                </div>
                <div className="input-content">
                    <label htmlFor="text">Текст поста</label>
                    <textarea
                        className="form-control"
                        placeholder="Текст"
                        id="text"
                        value={this.state.text}
                        name="text"
                        onChange={this.changeTextareaHandler}
                    ></textarea>
                    {/* <button onClick={() => {this.props.onsend(this.state.text)}}  className='btn' type='submit'>Добавить пост</button> */}
                    <button
                        onClick={() => {
                            this.props.sendMessages({
                                title: this.state.title,
                                text: this.state.text,
                            });
                        }}
                        className="btn"
                        type="submit"
                    >
                        Добавить пост
                    </button>
                </div>
            </form>
        );
    }
}

const mapDispatchToProps = {
    createPost: createPost,
};

export default connect(null, mapDispatchToProps)(PostForm);
