import React, { useState, useEffect } from "react";
import SlidePhotoPost from "../SlidePhotoPost";
import PostInfo from "../PostInfo";
import classNames from "classnames/bind";
import styles from "./S.module.scss";
const cx = classNames.bind(styles);

export default function PostModal(props) {
  console.log(props);
  function handleClose() {
    document.body.style.overflow = "auto";
    props.props.openM(false);
  }
  //document.body.classList.add("no-scroll");
  document.body.style.overflow = "hidden";
  function strX(Code) {
    let CodeX = "";
    for (let i = 0; i < 200; i++) {
      CodeX = CodeX + Code + " ";
    }
    return CodeX;
  }

  return (
    <>
      <div className={cx("modal")}>
        <h2 className={cx("modal-title")}>
          Details: Apartment{" "}
          <span className={cx("modal-title-code")}>{props.props.data}</span>
        </h2>
        <div className={cx("modal-close")}>
          <span className="material-icons" onClick={handleClose}>
            close
          </span>
        </div>
        <div className={cx("modal-content")}>
          <SlidePhotoPost />
          <PostInfo />
          <div>{strX(props.props.data)}</div>
        </div>
      </div>
    </>
  );
}
