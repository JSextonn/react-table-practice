import PropTypes from "prop-types";
import React from "react";

const Table = ({ children }) => {
  return <table>{children}</table>;
};

Table.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Table;
