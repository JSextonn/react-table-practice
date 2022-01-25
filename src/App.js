import Body from "./table/Body";
import BodyCell from "./table/BodyCell";
import Header from "./table/Header";
import HeaderCell from "./table/HeaderCell";
import { useRowSelection } from "./table/hooks";
import SelectableRow from "./table/SelectableRow";
import Table from "./table/Table";

const people = [
  {
    firstName: "Justin",
    lastName: "Sexton",
  },
  {
    firstName: "Justin",
    lastName: "Sexton",
  },
  {
    firstName: "Justin",
    lastName: "Sexton",
  },
  {
    firstName: "Justin",
    lastName: "Sexton",
  },
  {
    firstName: "Justin",
    lastName: "Sexton",
  },
  {
    firstName: "Justin",
    lastName: "Sexton",
  },
  {
    firstName: "Justin",
    lastName: "Sexton",
  },
];

const headers = ["First Name", "Last Name"];

const App = () => {
  const { selected, handleSelectOne, handleSelectAll } = useRowSelection(
    people.length
  );

  return (
    <>
      <Table>
        <Header>
          <SelectableRow onChange={handleSelectAll}>
            {headers.map((header, index) => {
              return <HeaderCell key={index}>{header}</HeaderCell>;
            })}
          </SelectableRow>
        </Header>
        <Body>
          {people.map((person, index) => {
            const isSelected = selected[index];
            return (
              <SelectableRow
                key={index}
                selected={isSelected}
                onChange={(e) => handleSelectOne(e, index)}
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
