import React from "react";
import classes from "./Input.module.css";

const InputPost = (props) => {
  return <input {...props} className={classes.input}></input>;
};

export default InputPost;
