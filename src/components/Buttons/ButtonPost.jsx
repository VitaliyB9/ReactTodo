import React from "react";
import classes from "./Button.module.css";

const ButtonPost = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.btn}> {/* получаем стиль как сво-во объекта, делаем ...props - чтобы все пропсы улетали в кнопку и мы могли ими пользоваться */}
      {children} {/* оставляем без props. потому что сделали деструктуризацию выше */}
    </button>
  );
};

export default ButtonPost;
