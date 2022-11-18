import React from "react";
import { v4 } from "uuid";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
import CheckBox from "../CheckBox";
const cx = classNames.bind(styles);

export default function Panel({ className, ...props }) {
  const list = [
    { id: "id1", label: "Availabe" },
    { id: "id2", label: "Thao Dien" },
    { id: "id3", label: "Thao Dien3" },
    { id: "id4", label: "Thao Dien4" },
  ];

  const mapx = list.map((value, index) => (
    <CheckBox key={v4()} props={value} />
  ));
  console.log(mapx);
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("panel-hide")} {...props}></div>
        <div className={cx("panel")}>
          <p>panel</p>
          <div className={cx("title")}>
            <h4>Quick search</h4>
          </div>

          <div className={cx("content")}>{mapx}</div>
        </div>
      </div>
    </>
  );
}
