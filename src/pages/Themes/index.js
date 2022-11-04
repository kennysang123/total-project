import React from "react";
import classNames from "classnames/bind";
import styles from "./Style.module.scss";
const cx = classNames.bind(styles);

export default function Themes() {
  function Card() {
    return (
      <>
        <div className={cx("col-md-4")}>
          <div className={cx("card")}>
            <div className={cx("card-photo", "my-2")}></div>
            <div className={cx("card-title")}>
              <span className={cx("card-code")}>D2N0005</span> - Studio Has
              Unique Design Super Nice In Le Loi
            </div>
            <div className={cx("card-icon")}>
              <span className={cx("card-span")}>
                <span className="material-icons">shower</span> 1
              </span>
              <span className={cx("card-span")}>
                <span className="material-icons">bed</span> 2
              </span>
              <span className={cx("card-span")}>
                <span className="material-icons">aspect_ratio</span> 32 Sqm
              </span>
            </div>
            <div className={cx("card-price")}>
              Price: 12,000,000 VND / Month
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
              {/* <div>23.5kView70%Like30%Dislike</div> */}
              <div>
                <div>
                  <b>Location: </b>
                </div>
                <div>
                  <span>Thao Dien Ward, Binh Thanh Dist, HCMC</span>
                </div>
              </div>
              <div className={cx("card-body-line")}>
                <b>Available: </b>
                <span className={cx("card-body-time")}>22/09/2023</span>
                &nbsp;-
                <b>&nbsp;&nbsp;&nbsp;Update: </b>
                <span className={cx("card-body-time")}>22/09/2023</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  let carda = [];
  const cardx = Card();
  carda.push(cardx);
  carda.push(cardx);
  carda.push(cardx);
  carda.push(cardx);
  carda.push(cardx);
  carda.push(cardx);
  carda.push(cardx);
  return (
    <>
      <body className={cx("body")}>
        <div className={cx("space")}>2</div>
        <div className={cx("container")}>
          <div className={cx("row")}>{carda}</div>
        </div>
      </body>
    </>
  );
}
