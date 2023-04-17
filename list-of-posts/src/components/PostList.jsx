import React, { useState } from "react";
import PostItem from "./PostItem";
import EditPost from "./EditPost";

function PostList(props) {
    const [editPostId, setEditPostId] = useState(null);

    const handleEdit = (postId) => {
        setEditPostId(postId);
    };

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>{props.title}</h1>
            {editPostId && (
                <EditPost
                    post={props.posts.find((post) => post.id === editPostId)}
                    onSubmit={props.onPostSubmit}
                    onCancel={() => setEditPostId(null)}
                />
            )}
            {props.posts.map((post) => (
                <PostItem
                    remove={props.remove}
                    onEdit={handleEdit}
                    post={post}
                    key={post.id}
                />
            ))}
        </div>
    );
}

export default PostList;
