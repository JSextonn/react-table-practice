import { useState } from "react";

export const useToggle = (initState = false) => {
  const [isToggled, setToggle] = useState(initState);

  const toggle = () => {
    setToggle(!isToggled);
  };

  return { isToggled, setToggle, toggle };
};
