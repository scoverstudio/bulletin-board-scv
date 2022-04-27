import React, { useEffect } from "react";
import PropTypes from "prop-types";

import styles from "./Homepage.module.scss";
import { Header } from "../../layout/Header/Header";
import { Link } from "react-router-dom";
import { Button } from "../../common/button/Button/Button";

const Component = ({ posts, fetchPublished }) => {
  useEffect(() => {
    fetchPublished();
  }, [fetchPublished]);

  return (
    <div className={styles.root}>
      <Header />
      <h2 className={styles.homePageTitle}>Search for interesting posts!</h2>
      <div className={styles.loggedContainer}>
        <div className={styles.postsContainer}>
          {posts.map((post) => (
            <Link
              to={`/post/${post._id}`}
              className={styles.singlePost}
              key={post.title}
            >
              <h3>{post.title}</h3>
            </Link>
          ))}
        </div>
        <Button className={styles.button} href="/post/add">
          Add post
        </Button>
      </div>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  posts: PropTypes.array,
  fetchPublished: PropTypes.func,
};

export {
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
