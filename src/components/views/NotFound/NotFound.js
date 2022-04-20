import React from "react";
import PropTypes from "prop-types";
import styles from "./NotFound.module.scss";
import { Button } from "../../common/button/Button/Button";

const Component = () => (
  <div className={styles.root}>
    <h2>You are in the wrong place!</h2>
    <Button href="/">GO BACK</Button>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as NotFound,
  // Container as NotFound,
  Component as NotFoundComponent,
};
