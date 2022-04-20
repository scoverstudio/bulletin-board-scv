import React from "react";
import PropTypes from "prop-types";
import styles from "./MainLayout.module.scss";
import { Link } from "react-router-dom";

const Component = ({ children }) => (
  <div className={styles.root}>
    <Link to="/">
      <h2 className={styles.logo}>Notice Board!</h2>
    </Link>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as MainLayout,
  // Container as MainLayout,
  Component as MainLayoutComponent,
};
