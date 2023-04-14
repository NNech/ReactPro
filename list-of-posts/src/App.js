import React, { useEffect, useState } from "react";
import "./App.css";
import PostList from "./components/PostList";
import axios from "axios";

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setPosts(response.data);
            });
    }, []);

    const handlePostSubmit = (id, title, body) => {
        const updatedPosts = posts.map((post) => {
            if (post.id === id) {
                return { id, title, body };
            } else {
                return post;
            }
        });
        setPosts(updatedPosts);
    };

    function removePost(id) {
        if (window.confirm("Are you sure you want to delete?")) {
            setPosts(posts.filter((post) => post.id !== id));
        }
    }

    return (
        <div className="App">
            <PostList
                posts={posts}
                remove={removePost}
                onPostSubmit={handlePostSubmit}
                title={"List of Posts"}
            />
        </div>
    );
}
export default App;
