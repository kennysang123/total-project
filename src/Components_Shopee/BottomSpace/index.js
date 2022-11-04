import React from "react";
import classNames from "classnames/bind";
import styles from "./Style.module.scss";
const cx = classNames.bind(styles);

export default function BottomSpace() {
  return (
    <>
      <div className={cx("space")}></div>
    </>
  );
}
