import React from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
const cx = classNames.bind(styles);

export default function Menu() {
  const typeSelect = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Chọn lĩnh vực bạn quan tâm</h2>
            </div>
            <div className="col-6">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                ></input>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Rent Apartment(english)
                </label>
              </div>
            </div>
            <div className="col-6">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                ></input>
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Mua bán nhà đất(vietnamese)
                </label>
              </div>
            </div>
            <div className="col-6">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  checked
                ></input>
                <label className="form-check-label" htmlFor="flexRadioDefault3">
                  Thuốc đặc trị
                </label>
              </div>
            </div>
            <div className="col-6">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault4"
                  checked
                ></input>
                <label className="form-check-label" htmlFor="flexRadioDefault4">
                  Thiết bị kỹ thuật
                </label>
              </div>
            </div>
            <div className="col-6">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault5"
                  checked
                ></input>
                <label className="form-check-label" htmlFor="flexRadioDefault5">
                  Thực phẩm
                </label>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className={cx("wrapper")}>{typeSelect()}</div>
    </>
  );
}
