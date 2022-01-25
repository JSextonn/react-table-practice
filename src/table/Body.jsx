const Body = ({ children, ...props }) => {
  return <tbody {...props}>{children}</tbody>;
};

export default Body;
