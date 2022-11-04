import React from "react";
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import SidebarItemLine from "./comp/SidebarItemLine";
import Search from "../Search";

const cx = classNames.bind(styles);

export default function Sidebar() {
  return (
    <>
      <div className={"col-md-2"}>
        <div className={cx("wrapper")}>
          <h4 className={cx("title")}>Search Panel</h4>
          <Search />
        </div>
      </div>
    </>
  );
}
