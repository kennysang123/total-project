import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
const cx = classNames.bind(styles);

export default function PostIcon(props) {
  const [show, setShow] = useState("display-off");
  let myTimeout;
  //console.log(props.props);
  function handleShow() {
    console.log("show");
    setShow("display-on");
    myTimeout = setTimeout(handleHide, 800);
  }
  function handleHide() {
    clearTimeout(myTimeout);
    setShow("display-off");
  }
  let str = props.props.tooltip;
  //str = "Days left Apartment will Available";
  //str = "Area of Apartment";

  const len = str.length * 9 + "px";

  console.log(len);
  return (
    <>
      <div
        className={cx("icon-wrapper")}
        style={{ width: props.props.width }}
        onClick={handleShow}
      >
        <div className={cx("tooltipx", show)} style={{ width: len }}>
          {str}
        </div>
        <div className={cx("icon")}>
          <span className="material-icons">{props.props.name}</span>
        </div>
        <div className={cx("icon-content")}>{props.props.quality}</div>
      </div>
    </>
  );
}
