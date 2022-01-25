# React Table Practice

## Simple Example

```jsx
const headers = ["First Name", "Last Name"];

const App = () => {
  return (
    <>
      <Table>
        <Header>
          <Row>
            {headers.map((header, index) => {
              return <HeaderCell key={index}>{header}</HeaderCell>;
            })}
          </Row>
        </Header>
        <Body>
          {people.map((person, index) => {
            return (
              <Row key={index}>
                <BodyCell>{person.firstName}</BodyCell>
                <BodyCell>{person.lastName}</BodyCell>
              </Row>
            );
          })}
        </Body>
      </Table>
    </>
  );
};
```

## Example With Checkbox Selection

```jsx
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
```

## Example With Pagination and Checkbox Selection

```jsx
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
```
