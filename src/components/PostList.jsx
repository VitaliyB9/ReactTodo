import React from "react";
import PostElement from "./PostElement";

const PostList = ({ posts, title, remove }) => {
  return (
    <div>
      <h2>{title}</h2>
      {posts.map((post, index) => (
        <PostElement
          number={index + 1}
          remove={remove}
          post={post}
          key={post.id}
        />
      ))}
    </div>
  );
};

export default PostList;
