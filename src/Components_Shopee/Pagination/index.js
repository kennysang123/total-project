import React from "react";
import classNames from "classnames/bind";
import styles from "./Style.module.scss";
const cx = classNames.bind(styles);

export default function Pagination() {
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;

    if (scrolled < 40) {
      console.log(scrolled);
    }
  });
  return (
    <>
      <div className={cx("wrapper")}>
        <div>
          <span className={cx("before", "material-icons")}>
            navigate_before
          </span>
        </div>
        <div className={cx("textcenter")}>1 of 10</div>
        <div>
          <span className={cx("next", "material-icons")}>navigate_next</span>
        </div>
      </div>
    </>
  );
}
