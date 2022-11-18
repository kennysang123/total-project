import React from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
const cx = classNames.bind(styles);

function AlertTip({ ...props }) {
  let time = setTimeout(end, 2000);
  function end() {
    clearTimeout(time);
    props.props.setA(false);
  }

  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("content")}>Link share has copied</div>
      </div>
    </>
  );
}

export { AlertTip };

export default function UseMod() {
  return (
    <>
      <p>UseMod</p>
    </>
  );
}
