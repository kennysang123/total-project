import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
import FavoriteItem from "../FavoriteItem";
import { v4 } from "uuid";
const cx = classNames.bind(styles);

export default function PanelHuongDan(props) {
  const d = props.props;

  //----------handle close panel----------------
  //document.body.style.overflow = "hidden";
  const handleClose = () => {
    //document.body.style.overflow = "scroll";
    d.setPanelShow("");
    d.setIsReLoad(!d.isReLoad);
  };
  //----------Noi Dung huong dan -----------
  const NoiDung = () => {
    return (
      <>
        <div className={cx("NoiDung")}>
          <h4>Section 1: Search Guide</h4>
          <p>
            Enter in the search box the values you want to find such as:
            apartment code, district name, city name, ... After stopping typing
            for about 2 seconds, it will automatically search. To delete the
            search results press the <b>Delete Results button</b>.
          </p>
          <h4>Section 2: Instructions for adding a favorite list</h4>
          <p>
            Favorites list helps you save the items you want to keep track of.
            To add an item to the favorites list, tap the <b>heart</b>{" "}
            <span className="material-icons colorGreen">favorite_border</span>{" "}
            in the upper right corner of each item. After adding to the
            favorites list, the heart shape will change to a <b>V</b>{" "}
            <span className="material-icons colorGreen">check</span> shape,
            indicating that it has been successfully added.
          </p>
          <p>
            Tap the <b>Favorites Button</b>{" "}
            <span className="material-symbols-outlined colorGreen">
              favorite
            </span>{" "}
            to open the favorites list. Then click on each item's code to see
            detailed information for each item. Press the x button to the right
            of each item to remove it from the favorites list.
          </p>
        </div>
      </>
    );
  };
  //----------return main-----------------
  return (
    <>
      <div className={cx("Panel")}>
        <div className={cx("panel-hide")} onClick={handleClose}></div>
        <div className={cx("panel")}>
          <div className={cx("panel-header")}>
            <h2 className={cx("title")}>Help</h2>
            <div className={cx("close")} onClick={handleClose}>
              <span className="material-icons">clear</span>
            </div>
          </div>
          <div className={cx("PanelFavorite")}>
            <div className={cx("contentP")}>
              <NoiDung />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
