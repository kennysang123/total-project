import React from "react";
import classNames from "classnames/bind";
import styles from "./S.module.scss";
const cx = classNames.bind(styles);

export default function PostInfo() {
  return (
    <>
      <div className={cx("info-wrapper")}>
        <h2>Apartment details</h2>
        <div>Link share:</div>
        <div>http://rent.top/product/D2N0005</div>
        <button className="btn btn-success">Copy link</button>
        <div className={cx("info-wrapper-list")}>
          <ol>
            <li>
              Bedroom:<span className={cx("info-wrapper-list-value")}> 1</span>
            </li>
            <li>
              Bathroom:<span className={cx("info-wrapper-list-value")}> 1</span>
            </li>
            <li>
              Area:
              <span className={cx("info-wrapper-list-value")}> 32 Sqm</span>
            </li>
            <li>
              Price:
              <span className={cx("info-wrapper-list-value")}>
                {" "}
                12,000,000 VND/month
              </span>
            </li>
            <li>
              Day available:
              <span className={cx("info-wrapper-list-value")}> 22/12/2022</span>
            </li>
            <li>
              Day Update:
              <span className={cx("info-wrapper-list-value")}> 23/44/2022</span>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
