import { useEffect } from "react";
import BodyCell from "./BodyCell";
import CheckBox from "./CheckBox";
import { useToggle } from "./hooks";
import Row from "./Row";

export const SelectableRow = ({
  checkBoxProps,
  bodyCellProps,
  children,
  selected,
  onChange,
  ...props
}) => {
  const { isToggled, toggle, setToggle } = useToggle();

  useEffect(() => {
    setToggle(selected);
  }, [selected, setToggle]);

  const handleChange = () => {
    toggle();
    onChange(isToggled);
  };

  return (
    <Row {...props}>
      <BodyCell {...bodyCellProps}>
        <CheckBox
          checked={isToggled}
          onChange={handleChange}
          {...checkBoxProps}
        />
      </BodyCell>
      {children}
    </Row>
  );
};
