import PropTypes from "prop-types";

const BodyCell = ({ children }) => {
  return <td>{children}</td>;
};

BodyCell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default BodyCell;
