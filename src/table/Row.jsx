import PropTypes from "prop-types";

const Row = ({ children }) => {
  return <tr>{children}</tr>;
};

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Row;
