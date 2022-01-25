const CheckBox = ({ selected, onChange }) => {
  return <input type="checkbox" checked={selected} onChange={onChange} />;
};

export default CheckBox;
