import React, { useState } from "react";
import PropTypes from "prop-types";

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from "./PostForm.module.scss";

const Component = ({ action, actionText, actionTitleText, href, ...props }) => {
  const [title, setTitle] = useState(props.title || "");
  const [content, setContent] = useState(props.content || "");
  const [publishDate, setPublishDate] = useState(props.publishDate || "---");
  const [latestUpdate, setlatestUpdate] = useState(props.publishDate || "---");
  const [authorEmail, setauthorEmail] = useState(props.authorEmail || "---");
  const [status, setStatus] = useState(props.publishDate || "---");

  const clearState = () => {
    setTitle("");
    setContent("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.publishDate !== "") {
      setPublishDate(new Date());
    }
    setlatestUpdate(new Date());
    action({
      title,
      content,
      publishDate,
      latestUpdate,
      authorEmail,
      status,
    });
    clearState();
  };

  return (
    <div className={styles.root}>
      <h2>{actionTitleText}</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title">Title</label>
        <input
          name="title"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="content">Content</label>
        <input
          name="content"
          type="text"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <label htmlFor="publishDate">Publish Date</label>
        <input
          name="publishDate"
          type="date"
          onChange={(e) => setPublishDate(e.target.value)}
          value={props.publishDate}
        />
        <label htmlFor="latestUpdate">Latest Update</label>
        <input name="latestUpdate" readOnly value={latestUpdate} />
        <label htmlFor="authorEmail">Author</label>
        <input
          name="authorEmail"
          onChange={(e) => setauthorEmail(e.target.value)}
          type="text"
          value={props.authorEmail}
        />
        <label htmlFor="status">Status</label>
        <input
          name="status"
          type="text"
          onChange={(e) => setStatus(e.target.value)}
          value={props.status}
        />
        <button type="submit">{actionText}</button>
      </form>
    </div>
  );
};

Component.propTypes = {
  action: PropTypes.func,
  id: PropTypes.string,
  actionText: PropTypes.string,
  actionTitleText: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  publishDate: PropTypes.string,
  latestUpdate: PropTypes.string,
  authorEmail: PropTypes.string,
  status: PropTypes.string,
  href: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as PostForm,
  // Container as PostForm,
  Component as PostFormComponent,
};
