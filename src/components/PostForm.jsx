import React, { useState } from "react";
import ButtonPost from "./Buttons/ButtonPost";
import InputPost from "./Inputs/InputPost";

const PostForm = ({ create, post: { name, description, id } }) => {
  const [post, setPost] = useState({
    name: "",
    description: "",
  });

  const createPost = (elem) => {
    elem.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ name: "", description: "" });
  };

  return (
    <div>
      <InputPost
        value={post.name}
        onChange={(elem) => setPost({ ...post, name: elem.target.value })}
        type="text"
        placeholder="Name post"
      />
      <InputPost
        value={post.description}
        onChange={(elem) =>
          setPost({ ...post, description: elem.target.value })
        }
        type="text"
        placeholder="Description post"
      />
      <ButtonPost onClick={createPost}>AddPost</ButtonPost>
    </div>
  );
};

export default PostForm;
