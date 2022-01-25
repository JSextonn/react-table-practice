const Header = ({ children, ...props}) => {
  return <thead {...props}>{children}</thead>;
};

export default Header;
