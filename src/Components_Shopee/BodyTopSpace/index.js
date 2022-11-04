import React from "react";
import classNames from "classnames/bind";
import styles from "./BodyTopSpace.module.scss";
const cx = classNames.bind(styles);

export default function BodyTopSpace() {
  return (
    <>
      <div className={cx("BodyTopSpace")}></div>
    </>
  );
}
