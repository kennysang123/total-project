import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
import CloseIcon from "@mui/icons-material/Close";
const cx = classNames.bind(styles);

export default function FavoriteItem(props) {
  const fiProps = props.props;
  console.log(333333333333333, fiProps, fiProps.isReLoad);
  const Code = props.props.name;
  //---------click favorite------------------------
  const handleClickFavorite = () => {
    fiProps.setSearchPayload(Code);
  };
  //------------delete Favorite Items---------------
  const handleDeleteFavorite = () => {
    fiProps.deleteItem(Code);
    //fiProps.setIsReLoad(!fiProps.isReLoad);
  };
  //---------return main FavoriteItem------------------
  return (
    <>
      <div className={cx("item")}>
        <div className={cx("text")} onClick={handleClickFavorite}>
          <div>{Code}</div>
        </div>
        <div className={cx("icon")} onClick={handleDeleteFavorite}>
          <CloseIcon></CloseIcon>
        </div>
      </div>
    </>
  );
}
