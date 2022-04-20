import React from "react";

import PropTypes from "prop-types";

import styles from "./Button.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";

const Component = ({ children, color, href }) => (
  <Link to={href} className={clsx(color, styles.button)}>
    {children}
  </Link>
);

Component.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  href: PropTypes.string,
};

export {
  Component as Button,
  // Container as Button,
  Component as ButtonComponent,
};
