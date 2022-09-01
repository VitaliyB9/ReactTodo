import React from "react";
import ButtonPost from "./Buttons/ButtonPost";

const PostElement = ({ post, number, remove }) => {

  return (
    <div className="post">
      <div className="postContent">
        <p>
          {number}. {post.name}
        </p>
        <div>{post.description}</div>
      </div>
      <div className="postBtns">
        <ButtonPost>Edit task</ButtonPost>
        <ButtonPost onClick={() => remove(post)}>Delete task</ButtonPost>
      </div>
    </div>
  );
};

export default PostElement;
