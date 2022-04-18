import React from "react";
import PropTypes from "prop-types";

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from "./PostAdd.module.scss";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/postsRedux";
import { PostForm } from "../../features/PostForm/PostForm";

const Component = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (post) => {
    dispatch(addPost(post));
    history.push("/");
  };
  return (
    <div className={styles.root}>
      <PostForm
        action={handleSubmit}
        actionText="Add"
        actionTitleText="Add your post!"
        href={`/post/${id}`}
      />
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as PostAdd,
  // Container as PostAdd,
  Component as PostAddComponent,
};
