import PropTypes from "prop-types";

const BodyCell = ({ children, ...props }) => {
  return <td {...props}>{children}</td>;
};

BodyCell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default BodyCell;
