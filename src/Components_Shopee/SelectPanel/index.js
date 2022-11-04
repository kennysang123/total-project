import React from "react";
import classNames from "classnames/bind";
import styles from "./Style.module.scss";
import { FuncX1 } from "../Functions";

const cx = classNames.bind(styles);

export default function SelectPanel() {
  function handleClick() {
    let url = "http://vd2.epizy.com/serverphp/api/v1/product/";
    const FuncX1x = new FuncX1();
    const data = FuncX1x.SelectData(url, "all");
  }

  function Read() {}
  return (
    <>
      <div className={cx("text")}>
        <p>select</p>
        <button className="btn btn-outline-primary" onClick={handleClick}>
          Select
        </button>
      </div>
    </>
  );
}
