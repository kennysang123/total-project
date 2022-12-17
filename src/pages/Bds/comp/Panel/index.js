import React, { useState } from "react";
import { v4 } from "uuid";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
import CheckBox from "../CheckBox";
import FavoriteItem from "../FavoriteItem";
import Favorite from "../Favorite";
import Menu from "../Menu";
import Home from "../Home";
import Search from "../Search";
const cx = classNames.bind(styles);

export default function Panel({ className, ...props }) {
  //console.log("Panel:", props);
  //console.log("Panel:", props.props.setIsRefresh);

  //props.props.handleScroll("hidden");
  //props.props.setIsScrollDisable(true);

  //console.log(mapx);
  function handleClose() {
    //props.props.handleScroll("scroll");
    props.props.setIsPanelSearch(false);
  }

  function SearchView() {
    const list = [
      { id: "id1", label: "Availabe" },
      { id: "id2", label: "Thao Dien" },
      { id: "id3", label: "Thao Dien3" },
      { id: "id4", label: "Thao Dien4" },
    ];

    const mapx = list.map((value, index) => (
      <CheckBox key={v4()} props={value} />
    ));
    return (
      <>
        <div className={cx("title")}>
          <h4>Quick search</h4>
        </div>
        <div className={cx("content")}>{mapx}</div>
      </>
    );
  }

  function showType() {
    switch (props.props.type) {
      case "search":
        return (
          <Search props={{ setSearchValue: props.props.setSearchValue }} />
        );
        break;
      case "home":
        return <Home />;
        break;
      case "favorite":
        return (
          <Favorite
            props={{
              isRefresh: props.props.isRefresh,
              setIsRefresh: props.props.setIsRefresh,
              setSearchValue: props.props.setSearchValue,
            }}
          />
        );
        break;
      case "menu":
        return <Menu />;
        break;

      default:
        break;
    }
  }
  const viewType = showType();

  const titlePanel = () => {
    switch (props.props.type) {
      case "home":
        return "Home";
        break;
      case "favorite":
        return "Yêu thích";
        break;
      case "menu":
        return "Menu";
        break;
      case "search":
        return "Tìm kiếm";
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("panel-hide")} onClick={handleClose}></div>
        <div className={cx("panel")}>
          <div className={cx("panel-header")}>
            <h2 className={cx("title")}>{titlePanel()}</h2>
            <div className={cx("close")} onClick={handleClose}>
              <span className="material-icons">clear</span>
            </div>
          </div>
          {viewType}
        </div>
      </div>
    </>
  );
}
