import PropTypes from "prop-types";

const Row = ({ children, ...props }) => {
  return <tr {...props}>{children}</tr>;
};

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Row;
