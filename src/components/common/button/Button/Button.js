import React from "react";

import PropTypes from "prop-types";

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from "./Button.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";

const Component = ({ children, id, color, href }) => (
  <Link to={href} className={clsx(color, styles.button)}>
    {children}
  </Link>
);

Component.propTypes = {
  children: PropTypes.string,
  id: PropTypes.string,
  color: PropTypes.string,
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
  Component as Button,
  // Container as Button,
  Component as ButtonComponent,
};
