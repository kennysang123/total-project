import React from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
import IconNav from "../IconNav";
const cx = classNames.bind(styles);

export default function NavBar(props) {
  const propsNavBar = props.props;

  //-----------------hanlde show panel------------------
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
            <div className={cx("tit1")}>NHÀ ĐẤT</div>
            <div className={cx("tit2")}>bds.vngate.top</div>
          </div>

          <IconNav
            props={{ name: "favorite" }}
            onClick={handlePressFavoriteIcon}
          />

          <IconNav props={{ name: "search" }} onClick={handlePressSearchIcon} />
        </div>
      </div>
    </>
  );
}
