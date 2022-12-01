import React from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
import CheckBox from "../CheckBox";
import { v4 } from "uuid";
const cx = classNames.bind(styles);

export default function Search() {
  const list = [
    { id: "id1", label: "Availabe" },
    { id: "id2", label: "Thao Dien" },
    { id: "id3", label: "Thao Dien3" },
    { id: "id4", label: "Thao Dien4" },
  ];

  const mapx = list.map((value, index) => (
    <CheckBox key={v4()} props={value} />
  ));
  return (
    <>
      <div className={cx("title")}>
        <h4>Quick search</h4>
      </div>
      <div className={cx("content")}>{mapx}</div>
    </>
  );
}
