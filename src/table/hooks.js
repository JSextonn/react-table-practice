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

export const usePagination = (items, pageSize, initPage = 0) => {
  if (pageSize < 1) {
    throw new Error("usePagination pageSize must be a positive integer");
  }
  if (initPage < 0) {
    throw new Error("usePagination initPage must be a non negative integer");
  }

  const [page, setPage] = useState(initPage);

  const start = page * pageSize;
  const end = start + pageSize;
  const paginatedItems = items.slice(start, end);

  const pageCount = Math.round(items.length / pageSize);

  const pageAwareIndex = (index) => {
      return page * 2 + index;
  };

  return { paginatedItems, page, setPage, pageCount, pageAwareIndex };
};
