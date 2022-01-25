import { useRef } from "react";
import Body from "./table/Body";
import BodyCell from "./table/BodyCell";
import Header from "./table/Header";
import HeaderCell from "./table/HeaderCell";
import { useToggle } from "./table/hooks";
import { SelectableRow } from "./table/SelectableRow";
import Table from "./table/Table";

const people = [
  {
    firstName: "Justin",
    lastName: "Sexton",
  },
  {
    firstName: "Foo",
    lastName: "Bar",
  },
  {
    firstName: "Baz",
    lastName: "Bob",
  },
];

const headers = ["First Name", "Last Name"];

const App = () => {
  const selectedValues = useRef({});
  const { isToggled: allValuesSelected, toggle: toggleAll } = useToggle();

  const toggleSingle = (selected, { firstName, lastName }) => {
    const key = `${firstName}${lastName}`;
    selectedValues.current = {
      ...selectedValues.current,
      [key]: allValuesSelected || selected,
    };
  };

  return (
    <>
      <Table>
        <Header>
          <SelectableRow onChange={toggleAll} selected={allValuesSelected}>
            {headers.map((header, index) => {
              return <HeaderCell key={index}>{header}</HeaderCell>;
            })}
          </SelectableRow>
        </Header>
        <Body>
          {people.map((person, index) => {
            return (
              <SelectableRow
                key={index}
                selected={allValuesSelected}
                onChange={(selected) => toggleSingle(selected, person)}
              >
                <BodyCell>{person.firstName}</BodyCell>
                <BodyCell>{person.lastName}</BodyCell>
              </SelectableRow>
            );
          })}
        </Body>
      </Table>
    </>
  );
};

export default App;
