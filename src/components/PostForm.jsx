import React, { useState } from "react";
import ButtonPost from "./Buttons/ButtonPost";
import InputPost from "./Inputs/InputPost";

const PostForm = ({ create, post: { title, body, id } }) => {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const createPost = (elem) => {
    elem.preventDefault(); // предотвращаем дефолтное поведение браузера
    const newPost = {
      ...post,
      id: Date.now(), // дату получаем в милисекундах, в рамках нашего прилож будет уникальностьы
    };
    create(newPost);
    setPost({ title: "", body: "" }); // очистка полей после ввода
  };

  return (
    <div>
      <InputPost
        value={post.title} // делаем двухстронее свзяывание и в value передаем состояние name через props
        onChange={(elem) => setPost({ ...post, title: elem.target.value })} // вызываем функцию setPost в которую разворачиваем все посты, но перезатираем нужное поле этого инпута
        type="text"
        placeholder="Title post"
      />
      <InputPost
        value={post.body}
        onChange={(elem) =>
          setPost({ ...post, body: elem.target.value })
        }
        type="text"
        placeholder="Body post"
      />
      <ButtonPost onClick={createPost}>AddPost</ButtonPost>
    </div>
  );
};

export default PostForm;
