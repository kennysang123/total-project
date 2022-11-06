import React from "react";
import classNames from "classnames/bind";
import styles from "./Style.module.scss";
const cx = classNames.bind(styles);

export default function SlidePhotoPost() {
  return (
    <>
      <div className={cx("wrapper")}>
        <img
          className={cx("wrapper-photo")}
          src="https://docs.google.com/uc?export=download&id=19YeYUQNGvxXzUoMORis_rux6fnfRd4cY"
          alt="Girl in a jacket"
        ></img>
        <div className={cx("wrapper-after")}>
          <span className={cx("material-icons", "wrapper-after-icon")}>
            navigate_before
          </span>
        </div>
        <div className={cx("wrapper-before")}>
          <span className={cx("material-icons", "wrapper-before-icon")}>
            navigate_next
          </span>
        </div>
        <div className={cx("wrapper-numofphoto")}>1/10</div>
      </div>
    </>
  );
}
