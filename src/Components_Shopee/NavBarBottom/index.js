import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import classNames from "classnames/bind";
import styles from "./NavBarBottom.module.scss";
import Search from "../Search";
import ServerMenu from "../ServerMenu";
import HomeIcon from "../HomeIcon";
import ApartmentIcon from "../ApartmentIcon";
const cx = classNames.bind(styles);

export default function NavBarBottom() {
  let num = 1;
  const [homeIcon, setHomeIcon] = useState(true);
  const [toggle, setToggle] = useState(true);
  const [searchToggle, setSearchToggle] = useState(true);
  const [transLeft, setTransLeft] = useState("");
  const [transLeftSearch, setTransLeftSearch] = useState("");
  function handleSearchToggle() {
    if (searchToggle) {
      setTransLeftSearch("transleft");
      setTransLeft("");
      setToggle(true);
    } else {
      setTransLeftSearch("");
    }
    setSearchToggle(!searchToggle);
    //console.log(toggle);
  }
  function handleAparment() {
    setTransLeft("");
    setToggle(true);
    setTransLeftSearch("");
    setSearchToggle(true);
  }
  function handleMeuToggle() {
    if (toggle) {
      setTransLeft("transleft");
      setTransLeftSearch("");
      setSearchToggle(true);
    } else {
      setTransLeft("");
    }
    setToggle(!toggle);
    //console.log(toggle);
  }
  /* chuyen huong trang */
  const navigate = useNavigate();
  function handleHomeIconClick() {
    setTransLeft("");
    setTransLeftSearch("");
    console.log("close");
    navigate("/");
  }
  function handleApartmentIconClick() {
    setTransLeft("");
    setTransLeftSearch("");
    console.log("close");
    navigate("/product");
  }
  return (
    <>
      <div className={cx("sideBar-search", transLeftSearch)}>
        <div
          className={cx("panelleft-search")}
          onClick={handleSearchToggle}
        ></div>
        <div className={cx("panel-search")}>
          <div className={cx("titlepanel")}>
            Search Panel
            <span
              className={cx("close", "material-icons")}
              onClick={handleSearchToggle}
            >
              close
            </span>
          </div>
          <Search />
        </div>
      </div>

      <div className={cx("sideBar", transLeft)}>
        <div className={cx("panelleft")} onClick={handleMeuToggle}></div>
        <div className={cx("panel")}>
          <div className={cx("titlepanel")}>
            Menu Panel
            <span
              className={cx("close", "material-icons")}
              onClick={handleMeuToggle}
            >
              close
            </span>
          </div>
          <ServerMenu />
        </div>
      </div>
      <div className={cx("wrapper")}>
        <div className="container2">
          <div className="row">
            <div className={cx("center")}>
              <div className={cx("content")}>
                {/* <HomeIcon onClick={handleHomeIconClick} /> */}
                <ApartmentIcon onClick={handleApartmentIconClick} />
                <div className={cx("navIcon")} onClick={handleSearchToggle}>
                  <div className={cx("iconTop", "material-icons")}>search</div>
                  <div className={cx("titleIcon")}>Search</div>
                </div>
                <div className={cx("navIcon")} onClick={handleMeuToggle}>
                  <div className={cx("iconTop", "material-icons")}>menu</div>
                  <div className={cx("titleIcon")}>Menu</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
