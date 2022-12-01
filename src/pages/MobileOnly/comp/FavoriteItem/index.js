import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
import { v4 } from "uuid";
import { useStore, actions } from "../../../../store";
const cx = classNames.bind(styles);

export default function FavoriteItem(props) {
  //console.log("Favorite Item :", props.props.setIsRefresh);
  const Code = props.props.name;
  //console.log("FI", props.props);
  function handleClose() {
    props.props.deleteItem(Code);
    props.props.setIsRefresh(!props.props.isRefresh);
  }
  return (
    <>
      <div className={cx("item")}>
        <div className={cx("text")}>{Code} - 12,000,000 VND</div>
        <div className={cx("icon")} onClick={handleClose}>
          <span className="material-icons">close</span>
        </div>
      </div>
    </>
  );
}
