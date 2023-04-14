import React from "react";
import Button from "./Button/Button";

function PostItem(props) {
    const handleEditClick = () => {
        props.onEdit(props.post.id);
    };

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>

            <div>
                <Button
                    className="post__btn"
                    onClick={() => props.remove(props.post.id)}
                >
                    delete
                </Button>
            </div>
            <div>
                <Button className="post__btn" onClick={handleEditClick}>
                    edit
                </Button>
            </div>
        </div>
    );
}

export default PostItem;
