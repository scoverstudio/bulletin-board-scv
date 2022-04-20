import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import styles from "./Header.module.scss";
import { Button } from "../../common/button/Button/Button";

const Component = ({ className }) => {
  const logged = true;

  if (!logged)
    return (
      <div className={styles.root}>
        <h2>Login to board!</h2>
        <div className={styles.container}>
          <Button href="www.google.com">Log in</Button>
        </div>
      </div>
    );

  if (logged)
    return (
      <div className={clsx(className, styles.root)}>
        <h2>Welcome to Notice Board!</h2>
        <div className={styles.container}>
          <Button href="/">open your posts</Button>
          <Button color={styles.logoutBtn} href="/">
            log out
          </Button>
        </div>
      </div>
    );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
