import React from "react";
import PropTypes from "prop-types";

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from "./PostEdit.module.scss";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { editPost, getPostsById } from "../../../redux/postsRedux";
import { PostForm } from "../../features/PostForm/PostForm";
import { useHistory } from "react-router-dom";

const Component = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const post = useSelector((state) => getPostsById(state, id));
  const handleSubmit = (post) => {
    dispatch(editPost({ ...post, id }));
    history.push("/");
  };
  return (
    <div className={styles.root}>
      <PostForm
        action={handleSubmit}
        actionText="Edit"
        actionTitleText="Edit your post!"
        href={`/post/${id}`}
        id={post.id}
        title={post.title}
        content={post.content}
        price={post.price}
        localization={post.localization}
        phone={post.phone}
        image={post.image}
        imageDescription={post.imageDescription}
        publishDate={post.publishDate}
        latestUpdate={post.latestUpdate}
        authorEmail={post.authorEmail}
        status={post.status}
      />
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as PostEdit,
  // Container as PostEdit,
  Component as PostEditComponent,
};
