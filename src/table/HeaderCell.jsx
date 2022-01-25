const HeaderCell = ({ children, ...props}) => {
  return <th {...props}>{children}</th>;
};

export default HeaderCell;
