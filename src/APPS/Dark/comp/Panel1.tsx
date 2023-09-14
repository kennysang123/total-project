import React, { useContext } from "react";

import { AppContext } from "../Context/AppContext";
/* csss module */
import classNames from "classnames/bind";
import styles from "./Panel1.module.scss";
const cx = classNames.bind(styles);
/* end css module */

export default function Panel1() {
  const {
    setOpenDrawerProduct,
    setIdProduct,
    apartments,
    productIndex,
    setProductIndex,
  } = useContext(AppContext);

  return (
    <>
      <div
        className={cx(
          "wrapper",
          "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-x-2 gap-y-4"
        )}
      >
        <div className={cx("box")}>Box</div>
        <div className={cx("box2")}>Box2</div>
        <div className={cx("circle")}>circle</div>
      </div>
    </>
  );
}
