import React, { useContext } from "react";

import { AppContext } from "../Context/AppContext";
/* csss module */
import classNames from "classnames/bind";
import styles from "./Main.module.scss";
import Panel1 from "./Panel1";
const cx = classNames.bind(styles);
/* end css module */

export default function Main() {
  const {
    setOpenDrawerProduct,
    setIdProduct,
    apartments,
    productIndex,
    setProductIndex,
  } = useContext(AppContext);

  return (
    <>
      <div className={cx("wrapper")}>
        <Panel1 />
      </div>
    </>
  );
}
