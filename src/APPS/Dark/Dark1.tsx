import React from "react";
import { AppProvider } from "./Context/AppContext";
import Main from "./comp/Main";

export default function Dark1() {
  return (
    <>
      <AppProvider>
        <Main />
      </AppProvider>
    </>
  );
}
