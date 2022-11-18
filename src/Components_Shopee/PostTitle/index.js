import React from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
const cx = classNames.bind(styles);

export default function PostTitle() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className={cx("wrapper")}>
              <div className={cx("wrapper-content")}>
                <h1>
                  D2N0006 - Apartment Studio 1 Bedroom 1 Bathroom 25 Sqm in
                  District 2 HCMC
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
