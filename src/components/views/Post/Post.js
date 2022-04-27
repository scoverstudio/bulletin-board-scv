import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./Post.module.scss";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchSinglePost } from "../../../redux/postsRedux";
import Control from "../../../Control/Control";

const Component = ({ className, children }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    dispatch(fetchSinglePost(id, setData, setIsLoading));
  }, [dispatch, id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    data && (
      <div className={clsx(className, styles.root)}>
        <div className={styles.post}>
          <h2>{data.title}</h2>
          <p className={styles.content}>{data.content}</p>
          <div className={styles.moreInfo}>
            {data.img && (
              <div className={styles.imageContainer}>
                <img src={data.img} alt={data.imgDescription}></img>
              </div>
            )}
            {data.price && (
              <div className={styles.price}>Price: {data.price}$</div>
            )}
            {data.phone && (
              <div className={styles.phone}>phone: {data.phone}</div>
            )}
            {data.localization && (
              <div className={styles.localization}>
                Localization: {data.localization}
              </div>
            )}
          </div>

          <div className={styles.infoContainer}>
            <p>author: {data.authorEmail}</p>
            <p>status: {data.status}</p>
            <p className={styles.date}>published: {data.publishDate}</p>
            <p className={styles.date}>last update: {data.latestUpdate}</p>
          </div>
        </div>
        <Control classStyle={styles.control} id={id} />
        {children}
      </div>
    )
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
