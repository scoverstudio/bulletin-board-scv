import React, { useEffect } from "react";
import PropTypes from "prop-types";

import styles from "./Homepage.module.scss";
import { useSelector } from "react-redux";
import { fetchPublished, getAllPublished } from "../../../redux/postsRedux";
import { Header } from "../../layout/Header/Header";
import { Link } from "react-router-dom";
import { Button } from "../../common/button/Button/Button";
import { useDispatch } from "react-redux";

const Component = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPublished());
  }, [dispatch]);

  const posts = useSelector((state) => getAllPublished(state));
  const logged = true;

  return (
    logged && (
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
    )
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
