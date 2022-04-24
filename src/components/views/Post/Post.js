import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./Post.module.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPostsById } from "../../../redux/postsRedux";
import Control from "../../../Control/Control";

const Component = ({ className, children }) => {
  const { id } = useParams();

  const logged = true;
  const postData = useSelector((state) => getPostsById(state, id));

  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.post}>
        <h2>{postData.title}</h2>
        <p className={styles.content}>{postData.content}</p>
        <div className={styles.moreInfo}>
          {postData.img && (
            <div className={styles.imageContainer}>
              <img src={postData.img} alt={postData.imgDescription}></img>
            </div>
          )}
          {postData.price && (
            <div className={styles.price}>Price: {postData.price}$</div>
          )}
          {postData.phone && (
            <div className={styles.phone}>phone: {postData.phone}</div>
          )}
          {postData.localization && (
            <div className={styles.localization}>
              Localization: {postData.localization}
            </div>
          )}
        </div>

        <div className={styles.infoContainer}>
          <p>author: {postData.authorEmail}</p>
          <p>status: {postData.status}</p>
          <p className={styles.date}>published: {postData.publishDate}</p>
          <p className={styles.date}>last update: {postData.latestUpdate}</p>
        </div>
      </div>
      {logged && <Control classStyle={styles.control} id={id} />}
      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Post,
  // Container as Post,
  Component as PostComponent,
};
