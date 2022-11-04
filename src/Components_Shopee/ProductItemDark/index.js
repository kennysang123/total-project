import React from "react";
import CurrencyFormat from "react-currency-format";
import classNames from "classnames/bind";
import styles from "./Style.module.scss";
const cx = classNames.bind(styles);

export default function ProductItemDark({ props }) {
  return (
    <>
      <div className={cx("col-md-4")}>
        <div className={cx("card")}>
          <div className={cx("card-photo", "my-2")}></div>
          <div className={cx("card-title")}>
            <span className={cx("card-code")}>{props.Code}</span> -&nbsp;
            {props.PostTitleEn}
          </div>
          <div className={cx("card-icon")}>
            <span className={cx("card-span")}>
              <span className="material-icons">shower</span> {props.Bathroom}
            </span>
            <span className={cx("card-span")}>
              <span className="material-icons">bed</span> {props.Bedroom}
            </span>
            <span className={cx("card-span")}>
              <span className="material-icons">aspect_ratio</span> {props.Area}
              &nbsp;Sqm
            </span>
          </div>
          <div className={cx("card-price")}>
            Price:{" "}
            {
              <CurrencyFormat
                value={props.Vnd}
                displayType={"text"}
                thousandSeparator={true}
                suffix={" VND/Month"}
              />
            }
          </div>
          <div className={cx("card-header")}>
            <div className={cx("card-title-left")}>Description:</div>
            <div className={cx("card-title-right")}>
              <button className={cx("card-button")}>
                SEE DETAIL
                <span
                  className={cx("card-button-icon-right", "material-icons")}
                >
                  navigate_next
                </span>
              </button>
            </div>
          </div>

          <div className={cx("card-body")}>
            <div>
              <div>
                <b>Location: </b>
              </div>
              <div>
                <span>
                  {props.Ward}, {props.Dist}, {props.City}
                </span>
              </div>
            </div>
            <div className={cx("card-body-line")}>
              <b>Available: </b>
              <span className={cx("card-body-time")}>{props.Duration}</span>
              &nbsp;-
              <b>&nbsp;&nbsp;&nbsp;Update: </b>
              <span className={cx("card-body-time")}>{props.LatestUpdate}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
