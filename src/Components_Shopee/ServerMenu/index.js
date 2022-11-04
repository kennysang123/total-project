import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./ServerMenu.module.scss";
import InsertPanel from "../InsertPanel";
import UpdatePanel from "../UpdatePanel";
import SelectPanel from "../SelectPanel";
const cx = classNames.bind(styles);

export default function ServerMenu() {
  const [insertRows, setInsertRows] = useState(false);
  const [view, setView] = useState("view");
  const [display1, setDisplay1] = useState();

  function handleInsertRows() {
    //setView("Insert");
    //setDisplay1((prevState) => ({ ...prevState, display: "block" }));
    setDisplay1(<InsertPanel />);
  }
  function handleUpdateRows() {
    setDisplay1(<UpdatePanel />);
  }
  function handleDeleteRows() {
    setView("Delete");
  }
  function handleSelectRows() {
    setDisplay1(<SelectPanel />);
  }
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("containerX")}>
          <div className={cx("content")}>
            <ol className={cx("menulist")}>
              <li onClick={handleInsertRows}>1 - InsertRows</li>
              <li onClick={handleUpdateRows}>2 - UpdateRow</li>
              <li onClick={handleDeleteRows}>3 - DeleteRow</li>
              <li onClick={handleSelectRows}>4 - SelectRow</li>
            </ol>
          </div>
        </div>
        <div className={cx("containerX")}>
          <div className={cx("content")}>
            <div className={cx("wrapperView")}>{display1}</div>
          </div>
        </div>
      </div>
    </>
  );
}
