import React, { useState } from "react";
import Button from "@atlaskit/button";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
const cx = classNames.bind(styles);

let value2;
let value3 = "Sẵn sàng tìm kiếm.";
export default function PanelSearch(props) {
  const d = props.props;
  console.log(77777, d);
  ///----search element--------
  let timer;
  const SearchPanel = () => {
    const [seachValue, setSeachValue] = useState(value2);
    const [searchStatus, setSearchStatus] = useState(value3);
    const handleXoaKqTk = () => {
      d.setSearchPayload("");
      value3 = "Sẵn sàng tìm kiếm.";
    };
    const handleSearchId = (e) => {
      const v = e.target.value;
      value2 = v;
      setSeachValue(v);
      if (v != "") {
        clearTimeout(timer);
        setSearchStatus("Đang tìm kiếm...");
        timer = setTimeout(() => {
          console.log("tick");
          d.setSearchPayload(v);
          value3 = "Đã tìm xong. Đóng bảng để xem kết quả.";
          setSearchStatus("Đã tìm xong. Đóng bảng để xem kết quả.");
          clearTimeout(timer);
        }, 2000);
      }
    };
    return (
      <>
        <div className={cx("SearchPanel")}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h6>Nhập vào ID cần tìm: private</h6>
              </div>
              <div className={cx("col-12")}>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Tìm
                  </span>
                  <input
                    type="text"
                    className={cx("inputText", "form-control")}
                    placeholder="vd: B0011"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={handleSearchId}
                    /* autoFocus={true} */
                    value={seachValue}
                  ></input>
                </div>
                <div>{searchStatus}</div>
                <hr></hr>
                <Button onClick={handleXoaKqTk} appearance="danger">
                  Xóa kết quả tìm kiếm
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  //----------handle close----------------
  const handleClose = () => {
    d.setPanelShow("");
  };
  //----------return main-----------------
  return (
    <>
      <div className={cx("Panel")}>
        <div className={cx("panel-hide")} onClick={handleClose}></div>
        <div className={cx("panel")}>
          <div className={cx("panel-header")}>
            <h2 className={cx("title")}>Tìm kiếm</h2>
            <div className={cx("close")} onClick={handleClose}>
              <span className="material-icons">clear</span>
            </div>
          </div>
          {console.log(4444, d)}
          {<SearchPanel />}
        </div>
      </div>
    </>
  );
}
