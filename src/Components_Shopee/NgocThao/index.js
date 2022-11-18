import React, { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
const cx = classNames.bind(styles);

export default function NgocThao() {
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("content")}></div>
      </div>
    </>
  );
}
