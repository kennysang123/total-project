import React, { useState, useEffect } from "react";
import SlidePhotoPost from "../SlidePhotoPost";
import PostInfo from "../PostInfo";
import classNames from "classnames/bind";
import styles from "./S.module.scss";
import PostTitle from "../PostTitle";
import PostPhotoMain from "../PostPhotoMain";
import PostDetails from "../PostDetails";
import PostUtilities from "../PostUtilities";
import PostUtilitiesAround from "../PostUtilitiesAround";
import PostFurnitures from "../PostFurnitures";
import PostPhotoList from "../PostPhotoList";
import { CloseSvg } from "../IconSVG";
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
        <div className={cx("modal-close")} onClick={handleClose}>
          {/* <span className="material-icons">close</span> */}
          <CloseSvg />
        </div>
        <div className={cx("modal-content")}>
          <PostTitle />
          <PostPhotoMain />
          <PostDetails />
          <PostUtilities />
          <PostUtilitiesAround />
          <PostFurnitures />
          <PostPhotoList />
        </div>
      </div>
    </>
  );
}
