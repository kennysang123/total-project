import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Style.module.scss";
const cx = classNames.bind(styles);

export default function CheckBox(props) {
  const day = props.props.day;
  const month = props.props.month;
  const year = props.props.year;
  const id = props.props.dayCheck;

  const dayCheck1 = JSON.parse(localStorage.getItem(id));
  const [check, setCheck] = useState(false);
  function handleChange() {
    localStorage.setItem(id, JSON.stringify(true));
    setCheck(!check);
  }

  return (
    <>
      <div className="col-4">
        <div className="form-check mt-3 ">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id={id}
            checked={dayCheck1}
            onChange={handleChange}
          ></input>
          <label className={cx("form-check-label", "none")} htmlFor={id}>
            {day}/{month}/{year}
          </label>
        </div>
      </div>
    </>
  );
}
