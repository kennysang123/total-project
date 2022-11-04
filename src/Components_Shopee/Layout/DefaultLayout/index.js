import React from "react";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import ContentMain from "../../ContentMain";

import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Product from "../../../pages/Product";
import NavBarBottom from "../../NavBarBottom";

const cx = classNames.bind(styles);

export default function DefaultLayout() {
  return (
    <>
      <Product />
      <NavBarBottom />
    </>
  );
}
