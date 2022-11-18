import React from "react";
import SlidePhotoPost from "../../Components_Shopee/SlidePhotoPost";
import classNames from "classnames/bind";
import styles from "./Style.module.scss";
import PostInfo from "../../Components_Shopee/PostInfo";
import PostUtilities from "../../Components_Shopee/PostUtilities";
import PostUtilitiesAround from "../../Components_Shopee/PostUtilitiesAround";
import PostFurnitures from "../../Components_Shopee/PostFurnitures";
import PostSlideShow from "../../Components_Shopee/PostSlideShow";
import PostPhotoMain from "../../Components_Shopee/PostPhotoMain";
import PostTitle from "../../Components_Shopee/PostTitle";
import PostPhotoList from "../../Components_Shopee/PostPhotoList";
import PostDetails from "../../Components_Shopee/PostDetails";
import { CloseSvg } from "../../Components_Shopee/IconSVG";
const cx = classNames.bind(styles);

export default function SinglePost() {
  return (
    <>
      {/* <PostSlideShow /> */}
      <CloseSvg />
      <PostTitle />
      <PostPhotoMain />
      <PostDetails />
      <PostUtilities />
      <PostUtilitiesAround />
      <PostFurnitures />
      <PostPhotoList />
    </>
  );
}
/* <PostPhotoList /> */
