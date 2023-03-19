import React from "react";
import ButtonPost from "./Buttons/ButtonPost";

const PostElement = ({ post, remove }) => {

  return (
    <div className="post">
      <div className="postContent">
        <p>
          {post.id}. {post.title}
        </p>
        <div>{post.body}</div>
      </div>
      <div className="postBtns">
        <ButtonPost>Edit task</ButtonPost>
        <ButtonPost onClick={() => remove(post)}>Delete task</ButtonPost> {/* вешаем слушатель событий, как параметр передаем туда текущий пост (у которого будут наши поля) */}
      </div>
    </div>
  );
};

export default PostElement;
