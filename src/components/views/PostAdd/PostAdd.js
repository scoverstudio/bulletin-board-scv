import React from "react";
import PropTypes from "prop-types";
import styles from "./PostAdd.module.scss";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPostRequest } from "../../../redux/postsRedux";
import { PostForm } from "../../features/PostForm/PostForm";

const Component = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (post) => {
    // dispatch(addPost(post));
    dispatch(addPostRequest(post));
    history.push("/");
  };
  return (
    <div className={styles.root}>
      <PostForm
        action={handleSubmit}
        actionText="Add"
        actionTitleText="Add your post!"
      />
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as PostAdd,
  // Container as PostAdd,
  Component as PostAddComponent,
};
