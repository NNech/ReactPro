import React, { useState } from "react";
import Button from "./Button/Button";

function EditPost(props) {
    const [title, setTitle] = useState(props.post.title);
    const [body, setBody] = useState(props.post.body);

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(props.post.id, title, body);
        setTitle("");
        setBody("");
    };

    const handleCancelClick = () => {
        props.onCancel();
    };

    return (
        <div>
            <h2>Edit post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <textarea
                        type="text"
                        id="content"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>
                <div>
                    <textarea
                        id="content"
                        value={body}
                        onChange={(event) => setBody(event.target.value)}
                    />
                </div>
                <div style={{ marginTop: 20 }}>
                    <Button type="submit">save</Button>
                    <Button type="button" onClick={handleCancelClick}>
                        cancel
                    </Button>
                </div>
            </form>
        </div>
    );
}
export default EditPost;
