import { useRef } from "react";
import Body from "./table/Body";
import BodyCell from "./table/BodyCell";
import Header from "./table/Header";
import HeaderCell from "./table/HeaderCell";
import { useToggle } from "./table/hooks";
import SelectableRow, { BaseSelectableRow } from "./table/SelectableRow";
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
  }
];

const headers = ["First Name", "Last Name"];

const App = () => {
  const selectedValues = useRef({});;
  const { 
    isToggled: allValuesSelected, 
    toggle 
  } = useToggle();
  
  return (
    <>
      <Table>
        <Header>
          <BaseSelectableRow onChange={toggle} checked={allValuesSelected} >
            {
              headers.map((header, index) => {
                return <HeaderCell key={index}>{header}</HeaderCell>;
              })   
            }
          </BaseSelectableRow>
        </Header>
        <Body>
          {people.map(({
            firstName,
            lastName,
          }, index) => {
            return (
              <SelectableRow
                key={index}
                selectAll={allValuesSelected}
              >
                {(selected) => {
                  const key = `${firstName}${lastName}${index}`;
                  selectedValues.current = {
                    ...selectedValues.current,
                    [key]: allValuesSelected || selected,
                  };
                  return (
                    <>
                      <BodyCell>{firstName}</BodyCell>
                      <BodyCell>{lastName}</BodyCell>
                    </>
                    );
                }}
              </SelectableRow>
            );
          })}
        </Body>
      </Table>
    </>
  );
};

export default App;
