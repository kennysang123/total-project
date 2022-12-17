import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
import { v4 } from "uuid";
import { useStore, actions } from "../../../../store";
const cx = classNames.bind(styles);

export default function FavoriteItem(props) {
  //console.log("Favorite Item :", props.props.setIsRefresh);
  const Code = JSON.parse(props.props.name);
  //console.log("FI", props.props);
  function handleClose() {
    props.props.deleteItem(JSON.stringify(Code));
    props.props.setIsRefresh(!props.props.isRefresh);
  }
  const handleClickFavorite = () => {
    const codex = Code.code;
    props.props.setSearchValue(codex);
    //console.log(x);
    //console.log(55555, codex);
  };
  return (
    <>
      <div className={cx("item")}>
        <div className={cx("text")} onClick={handleClickFavorite}>
          <div>{Code.code}</div>
          <div>{Code.price}</div>
        </div>
        <div className={cx("icon")} onClick={handleClose}>
          <span className="material-icons">close</span>
        </div>
      </div>
    </>
  );
}
