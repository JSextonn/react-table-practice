import BodyCell from "./BodyCell";
import CheckBox from "./CheckBox";
import Row from "./Row";
import { useToggle } from "./hooks";
import { useEffect } from "react";

export const BaseSelectableRow = ({ 
  checkBoxProps, 
  bodyCellProps, 
  children, 
  checked,
  onChange,
  ...props  
}) => {
  return (
    <Row {...props}>
      <BodyCell {...bodyCellProps}>
        <CheckBox 
          checked={checked}
          onChange={onChange}
          {...checkBoxProps}
        />
      </BodyCell>
      {children}
    </Row>
  );
};

const SelectableRow = ({
  children,
  selectAll,
  ...props
}) => {
  const {
    isToggled,
    toggle,
    setToggle,
  } = useToggle();
  useEffect(() => {
    setToggle(selectAll);
  }, [selectAll]);
  
  return <BaseSelectableRow {...props} checked={isToggled} onChange={toggle} >{children(isToggled)}</BaseSelectableRow>;
};


export default SelectableRow;
