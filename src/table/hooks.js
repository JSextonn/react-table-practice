import { useState } from "react";

export const useRowSelection = (init) => {
  const state = getInitializedState(init);
  const [selected, setSelected] = useState(state);

  const handleSelectAll = (event) => {
    const updateValue = event.target.checked ? true : false;
    setSelected(new Array(selected.length).fill(updateValue));
  };

  const handleSelectOne = (event, index) => {
    const newSelections = [...selected];
    newSelections[index] = event.target.checked ? true : false;
    setSelected(newSelections);
  };

  return { selected, setSelected, handleSelectAll, handleSelectOne };
};

// Generates the initial state the hook should be in. If a number is provided, an array of that size is generated and
// filled with false values. If an array is passed, that array will be used as the initial state. Otherwise an error is thrown.
const getInitializedState = (init) => {
  if (typeof init === "number") {
    return new Array(init).fill(false);
  } else if (Array.isArray(init)) {
    return init;
  } else {
    throw new Error(
      "useRowSelection initializer must be a row length or bool array representing selected rows"
    );
  }
};
