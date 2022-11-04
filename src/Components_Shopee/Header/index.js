import React from "react";
import { useNavigate } from "react-router-dom";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);

export default function Header() {
  const navigate = useNavigate();
  function handleHome() {
    navigate("/");
  }
  function handleProduct() {
    navigate("/product");
  }
  return (
    <>
      <div className={cx("wrapper")}>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <a className={cx("navbar-brand")} onClick={handleHome}>
              Logo
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mynavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a className="nav-link" onClick={handleProduct}>
                    Product
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0)">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0)">
                    Link
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="text"
                  placeholder="Search"
                ></input>
                <button className="btn btn-primary" type="button">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
