import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Homepage.module.scss";
import { useSelector } from "react-redux";
import { getAll } from "../../../redux/postsRedux";
import { Header } from "../../layout/Header/Header";
import { Link } from "react-router-dom";
import { Button } from "../../common/button/Button/Button";

const Component = ({ className, children }) => {
  const posts = useSelector(getAll);
  const logged = true;

  return (
    logged && (
      <div className={clsx(className, styles.root)}>
        <Header />
        <h2 className={styles.homePageTitle}>Search for interesting posts!</h2>
        <div className={styles.loggedContainer}>
          <div className={styles.postsContainer}>
            {posts.map((post) => (
              <Link
                to={`/post/${post.id}`}
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
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
