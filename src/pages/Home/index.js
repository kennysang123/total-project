import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import GetDataGoogleScript from "../api/getDataGoogleScript";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Panel2 from "../../Components_Shopee/Tools/Panel2";
const cx = classNames.bind(styles);
export default function Home() {
  return (
    <>
      <Panel2 />
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <div className={cx("space")}></div>
          <div className={cx("d-flex justify-content-center")}>
            <div className={cx("logo")}>
              <div className={cx("title")}>BeST Rent</div>
              <div className={cx("title-dsp")}>
                The best app for you find Apartment for rent in VietNam
              </div>
            </div>
          </div>
          <div className={cx("content d-flex justify-content-center")}>
            <div className={cx("ios", "btnX", "btn btn-outline-danger")}>
              Download App on AppStore
            </div>
            <div className={cx("android", "btnX", "btn btn-outline-danger")}>
              Download App on GooglePlay
            </div>
          </div>
          <div className={cx("space-bottom")}></div>
        </div>
      </div>
    </>
  );
}
