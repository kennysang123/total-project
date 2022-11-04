import React from "react";
import classNames from "classnames/bind";
import styles from "./Style.module.scss";
const cx = classNames.bind(styles);

export default function GoToTop() {
  return (
    <>
      <div className={cx("wrapper")}>
        <span class="material-icons">navigation</span>TOP
      </div>
    </>
  );
}
