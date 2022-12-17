import React from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
import CheckBox from "../CheckBox";
import { v4 } from "uuid";
const cx = classNames.bind(styles);

export default function Search(props) {
  //console.log(props.props.setSearchValue);
  const NhapId = () => {
    const handleSearchId = (e) => {
      const v = e.target.value.toUpperCase();
      //console.log(v);
      props.props.setSearchValue(v);
    };
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h6>Nhập vào ID cần tìm:</h6>
            </div>
            <div className={cx("col-12")}>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  ID
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="vd: B0011"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={handleSearchId}
                  autoFocus={true}
                ></input>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const RadioStatus = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5>Status of apartment</h5>
            </div>
            <div className={cx("col-6")}>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                ></input>
                <label
                  className="form-check-label"
                  htmlFor="flexRadioDefault1"
                  style={{ width: "80%" }}
                >
                  Available
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
                <label
                  className="form-check-label"
                  htmlFor="flexRadioDefault2"
                  style={{ width: "80%" }}
                >
                  All
                </label>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const ChooseDistrict = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5>Lọc theo quận</h5>
            </div>

            <div className="col-6">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>All Districts</option>
                <optgroup label="List of Districts">
                  <option value="1">District 1</option>
                  <option value="2">District 2</option>
                  <option value="3">District 3</option>
                  <option value="4">District 4</option>
                  <option value="5">District 5</option>
                  <option value="6">District 6</option>
                  <option value="7">District 7</option>
                  <option value="8">District 8</option>
                  <option value="9">District 9</option>
                  <option value="10">District 10</option>
                  <option value="11">District 11</option>
                  <option value="12">District 12</option>
                </optgroup>
              </select>
            </div>
            <div className={cx("col-6")}>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>All Projects</option>
                <optgroup label="List of Projects">
                  <option value="1">City Garden</option>
                  <option value="2">Diamond Island</option>
                  <option value="2">Empire City</option>
                  <option value="2">Estella Heights</option>
                  <option value="2">Feliz En Vista</option>
                  <option value="2">Masteri An Phu</option>
                  <option value="2">Masteri Thao Dien</option>
                  <option value="2">New City</option>
                  <option value="2">The Ascent</option>
                  <option value="2">The Estella</option>
                  <option value="2">The Gateway</option>
                  <option value="2">The Nassim</option>
                  <option value="2">The Vista</option>
                  <option value="2">Tropic Garden</option>
                  <option value="2">Vinhome Central Park</option>
                  <option value="2">Vinhome Golden River</option>
                  <option value="2">Vista Verde</option>
                  <option value="2">XI River View</option>
                </optgroup>
              </select>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className={cx("title")}>{/* <h4>Tìm kiếm</h4> */}</div>
      <div className={cx("contentx")}>{NhapId()}</div>
      {/* <div className={cx("contentx")}>{ChooseDistrict()}</div> */}
    </>
  );
}
