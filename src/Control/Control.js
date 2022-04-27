import React from "react";
import PropTypes from "prop-types";
import { Button } from "../components/common/button/Button/Button";

const Control = ({ id, classStyle }) => {
  return (
    <div className={classStyle}>
      <Button href={`/`} id={id}>
        Edit
      </Button>
      <Button href={`/`} id={id}>
        Delete
      </Button>
    </div>
  );
};

Control.propTypes = {
  id: PropTypes.string,
  classStyle: PropTypes.string,
};

export default Control;
