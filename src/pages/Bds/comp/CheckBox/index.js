import React from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
const cx = classNames.bind(styles);

export default function CheckBox(props) {
  return (
    <>
      <div className={cx("wrapper", "form-check")}>
        <input
          type="checkbox"
          className="form-check-input"
          id={props.props.id}
          name={props.props.id}
          value="something"
        ></input>
        <label
          className={cx("labelx", "form-check-label")}
          htmlFor={props.props.id}
        >
          {props.props.label}
        </label>
      </div>
    </>
  );
}
