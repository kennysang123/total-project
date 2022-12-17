import React from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
const cx = classNames.bind(styles);

function AlertTip(props) {
  console.log(props);
  let time = setTimeout(end, 2000);
  function end() {
    clearTimeout(time);
    props.props.setIsArlert(!props.props.isArlet);
  }

  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("content")}>{props.props.content}</div>
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
