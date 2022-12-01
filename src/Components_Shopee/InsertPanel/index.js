import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Style.module.scss";
const cx = classNames.bind(styles);

export default function InsertPanel() {
  const [in1, setIn1] = useState("");
  const [in2, setIn2] = useState("");
  function handleChange(e) {
    setIn1(e.target.value);
  }
  function handleChangePrivateKey(e) {
    setIn2(e.target.value);
  }

  function handleClick() {
    console.log(in1);
    PostData(_data);
  }

  // data to be sent to the POST request
  let _data = {
    Code: in1,
    Method: "POST",
    PrivateKey: in2,
  };
  let url = "https://jsonplaceholder.typicode.com/posts";

  url = "http://vd2.epizy.com/serverphp/api/v1/product/";
  url = "http://linkngan.atwebpages.com/serverphp-min/api/v1/product/";

  async function PostData(data) {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      /* headers: { "Content-type": "application/json; charset=UTF-8" }, */
    })
      .then((response) => response.json())
      .then((json) => console.log("data nhan ve: ", json))
      .catch((err) => console.log("Nhan that bai, loi: ", err));
  }

  return (
    <>
      <form>
        <div className="form-row">
          <div className={cx("form-group col", "x")}>
            <label className={cx("x3")} htmlFor="in1">
              Nhập danh sách Code cần thêm:
            </label>
            <input
              type="text"
              id="in1"
              className={cx("form-control", "x4")}
              placeholder="vd: D2N0001,D2N0002,D2N0003"
              onChange={handleChange}
            ></input>
          </div>
          <div className={cx("form-group col", "x")}>
            <label className={cx("x3")} htmlFor="in2">
              Nhập Private Key:
            </label>
            <input
              type="text"
              id="in2"
              className={cx("form-control", "x4")}
              placeholder="Private Key..."
              onChange={handleChangePrivateKey}
            ></input>
          </div>
        </div>
      </form>
      <div className={cx("btn btn-outline-danger", "x2")} onClick={handleClick}>
        Accept
      </div>
    </>
  );
}
