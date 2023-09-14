import React from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
const cx = classNames.bind(styles);

export default function Active() {
  return (
    <>
      <section className={cx("id1")}>
        <div className={cx("wrapper")}>
          <div className={cx("areaDevice")}>
            <div className={cx("icon1")}>
              <img src="https://i.imgur.com/Af1oJmp.png"></img>
            </div>

            <div className={cx("text")}>
              <div className={cx("text1")}>Online</div>
              <div className={cx("text2")}>Activation</div>
            </div>
          </div>
          <div className={cx("divcol")}></div>
          <div className={cx("areaButton")}>
            <button className={cx("btnCon")}>
              <span class="material-icons">save_alt</span> Continue
            </button>
            <div className={cx("text3")}>
              <span class="material-icons">check_circle</span> Hight Speed {"&"}{" "}
              Unlimited.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
