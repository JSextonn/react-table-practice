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
