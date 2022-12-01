import React, { useReducer, useState } from "react";
import Context from "./Context";
import reducer, { initState } from "./reducer";
import logger from "./logger";

function Provider({ children }) {
  const [state, dispatch] = useReducer(logger(reducer), initState);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Context.Provider value={([state, dispatch], isOpen, setIsOpen)}>
      {children}
    </Context.Provider>
  );
}
export default Provider;
