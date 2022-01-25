import BodyCell from "./BodyCell";
import CheckBox from "./CheckBox";
import Row from "./Row";

const SelectableRow = ({ selected, onChange, children }) => {
  return (
    <Row>
      <BodyCell>
        <CheckBox selected={selected} onChange={onChange} />
      </BodyCell>
      {children}
    </Row>
  );
};

export default SelectableRow;
