import React from "react";

import classNames from "classnames/bind";
import styles from "./SidebarItemLine.module.scss";
const cx = classNames.bind(styles);

export default function SidebarItemLine() {
  return (
    <>
      <div className={cx("button")}>Button</div>
    </>
  );
}
