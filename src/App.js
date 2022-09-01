import React, { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./todoStyle.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, name: "First task", description: "Doing something" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} post={{}} />
      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title="TodoList" />
      ) : (
        <h2>Good work, you doing all tasks!</h2>
      )}
    </div>
  );
}

export default App;
