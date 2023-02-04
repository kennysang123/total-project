import React from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
import IconNav from "../IconNav";
const cx = classNames.bind(styles);

export default function NavBar(props) {
  const propsNavBar = props.props;

  //-----------------hanlde show panel------------------
  const handlePressHDanIcon = () => {
    propsNavBar.panelShow != "readme"
      ? propsNavBar.setPanelShow("readme")
      : propsNavBar.setPanelShow("");
  };
  const handlePressMenuIcon = () => {
    propsNavBar.panelShow != "menu"
      ? propsNavBar.setPanelShow("menu")
      : propsNavBar.setPanelShow("");
  };
  const handlePressFavoriteIcon = () => {
    propsNavBar.panelShow != "favorite"
      ? propsNavBar.setPanelShow("favorite")
      : propsNavBar.setPanelShow("");
  };
  const handlePressSearchIcon = () => {
    propsNavBar.panelShow != "search"
      ? propsNavBar.setPanelShow("search")
      : propsNavBar.setPanelShow("");
  };

  //----------return main NavBar---------------
  return (
    <>
      <div style={{ width: "100%", height: "100px" }}></div>
      <div className={cx("NavBar")}>
        <div className={cx("popup")}>
          <div className={cx("logo")}>
            <div className={cx("tit1")}>Kết đôi</div>
            <div className={cx("tit2")}>ketdoi.vngate.top</div>
          </div>

          <IconNav
            props={{ name: "favorite" }}
            onClick={handlePressFavoriteIcon}
          />
          <IconNav props={{ name: "search" }} onClick={handlePressSearchIcon} />
          <IconNav props={{ name: "menu" }} onClick={handlePressMenuIcon} />
        </div>
      </div>
    </>
  );
}
