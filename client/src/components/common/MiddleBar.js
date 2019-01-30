import React from "react";
import PropTypes from "prop-types";

const MiddleBar = ({ content }) => {
  return (
    <div id="heading-breadcrumbs">
      <div className="container">
        <div className="row d-flex align-items-center flex-wrap middle_bar">
          <div className="col-md-7">
            <h1 className="h2">{content}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

MiddleBar.propTypes = {
  content: PropTypes.string.isRequired
};

export default MiddleBar;
