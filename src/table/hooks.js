import { useState } from "react";

export const useToggle = (initState = false) => {
  const [isToggled, setToggle] = useState(initState);

  const toggle = () => {
    setToggle(!isToggled);
  };

  return { isToggled, setToggle, toggle };
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

  return { paginatedItems, page, setPage, pageCount };
};
