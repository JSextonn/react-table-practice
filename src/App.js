import Body from "./table/Body";
import BodyCell from "./table/BodyCell";
import Header from "./table/Header";
import HeaderCell from "./table/HeaderCell";
import { usePagination, useRowSelection } from "./table/hooks";
import SelectableRow from "./table/SelectableRow";
import Table from "./table/Table";

const people = [
  {
    firstName: "Justin",
    lastName: "Sexton",
  },
  {
    firstName: "Shawn",
    lastName: "Sexton",
  },
  {
    firstName: "Jeff",
    lastName: "Sexton",
  },
  {
    firstName: "Jack",
    lastName: "Sexton",
  },
  {
    firstName: "Sandra",
    lastName: "Sexton",
  },
];

const headers = ["First Name", "Last Name"];

const App = () => {
  const pageSize = 2;
  const { paginatedItems, page, setPage, pageCount, pageAwareIndex } =
    usePagination(people, pageSize);
  const { selected, handleSelectOne, handleSelectAll } = useRowSelection(
    people.length
  );

  const handleNextPage = () => {
    if (page + 1 < pageCount) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page - 1 >= 0) {
      setPage(page - 1);
    }
  };

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
          {paginatedItems.map((person, index) => {
            const newIndex = pageAwareIndex(index);
            const isSelected = selected[newIndex];
            return (
              <SelectableRow
                key={index}
                selected={isSelected}
                onChange={(e) => handleSelectOne(e, newIndex)}
              >
                <BodyCell>{person.firstName}</BodyCell>
                <BodyCell>{person.lastName}</BodyCell>
              </SelectableRow>
            );
          })}
        </Body>
      </Table>
      <button onClick={handlePrevPage}>Previous</button>
      <button onClick={handleNextPage}>Next</button>
    </>
  );
};

export default App;
