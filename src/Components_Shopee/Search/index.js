import React from "react";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";

const cx = classNames.bind(styles);

export default function Search() {
  return (
    <>
      <div className={cx("container")}>
        <div className="row">
          <div className={cx("col")}>
            <div className={cx("selection")}>
              <label htmlFor="a1" className={cx("labelInput")}>
                1. District:
              </label>
              <select name="cars" id="a1" className={cx("selectInput")}>
                <optgroup label="District:">
                  <option value="volvo">all</option>
                  <option value="saab">D2</option>
                  <option value="saab">D3</option>
                  <option value="saab">D4</option>
                  <option value="saab">D5</option>
                  <option value="saab">D6</option>
                </optgroup>
                <optgroup label="German Cars">
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </optgroup>
              </select>
            </div>
          </div>
          <div className={cx("col")}>
            <div className={cx("selection")}>
              <label htmlFor="a2" className={cx("labelInput")}>
                2. Project:
              </label>
              <select name="cars" id="a2" className={cx("selectInput")}>
                <optgroup label="Project:">
                  <option value="volvo">all</option>
                  <option value="saab">D2</option>
                  <option value="saab">D3</option>
                  <option value="saab">D4</option>
                  <option value="saab">D5</option>
                  <option value="saab">D6</option>
                </optgroup>
              </select>
            </div>
          </div>
        </div>
        <div className={cx("row")}>
          <div className={cx("col")}>
            <div className={cx("selection")}>
              <label htmlFor="a3" className={cx("labelInput")}>
                3. Bedroom:
              </label>
              <select name="cars" id="a3" className={cx("selectInput")}>
                <optgroup label="Number of Bedroom:">
                  <option value="volvo">all</option>
                  <option value="saab">1</option>
                  <option value="saab">2</option>
                  <option value="saab">3</option>
                  <option value="saab">4</option>
                  <option value="saab">5</option>
                </optgroup>
              </select>
            </div>
          </div>
          <div className={cx("col")}>
            <div className={cx("selection")}>
              <label htmlFor="a4" className={cx("labelInput")}>
                4. Bathroom:
              </label>
              <select name="cars" id="a4" className={cx("selectInput")}>
                <optgroup label="Number of Bathroom:">
                  <option value="volvo">all</option>
                  <option value="saab">1</option>
                  <option value="saab">2</option>
                  <option value="saab">3</option>
                  <option value="saab">4</option>
                  <option value="saab">5</option>
                </optgroup>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
