import React from "react";
import classNames from "classnames/bind";
import styles from "./Style.module.scss";
import CheckContent from "../CheckContent";
const cx = classNames.bind(styles);

export default function UongThuoc() {
  const date = new Date();
  console.log(date);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="mt-3">
            <h1>CHECK VIỆC MỖI NGÀY</h1>
          </div>
        </div>
        <div className="row">
          <CheckContent />
        </div>
      </div>
    </>
  );
}
