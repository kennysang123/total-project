import React, { useState } from "react";
import Button from "@atlaskit/button";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
const cx = classNames.bind(styles);

let value2;
let value3 = "Sẵn sàng tìm kiếm";
export default function PanelSearch(props) {
  const d = props.props;
  ///----search element--------
  let timer;
  const SearchPanel = () => {
    const [seachValue, setSeachValue] = useState(value2);
    const [searchStatus, setSearchStatus] = useState(value3);
    const handleXoaKqTk = () => {
      d.setSearchPayload("");
      value3 = "Sẵn sàng tìm kiếm";
    };
    const handleSearchId = (e) => {
      const v = e.target.value;
      value2 = v;
      setSeachValue(v);
      if (v != "") {
        clearTimeout(timer);
        setSearchStatus("Đang tìm...");
        timer = setTimeout(() => {
          console.log("tick");
          d.setSearchPayload(v);
          value3 = "Đã tìm xong, đóng bảng này để xem kết quả";
          setSearchStatus("Đã tìm xong, đóng bảng này để xem kết quả");
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
                <h6>Xem hướng dẫn Mục 1</h6>
              </div>
              <div className={cx("col-12")}>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Tìm
                  </span>
                  <input
                    type="text"
                    className={cx("inputText", "form-control")}
                    placeholder="ex. R0005"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={handleSearchId}
                    /* autoFocus={true} */
                    value={seachValue}
                  ></input>
                </div>
                <div>{searchStatus}</div>
                <hr></hr>
                {/* <Button onClick={handleXoaKqTk} appearance="danger">
                  Xóa kết quả
                </Button> */}
                <div className={cx("BtnXoaKqContent")}>
                  <button className="btn btn-warning" onClick={handleXoaKqTk}>
                    Xóa kết quả
                  </button>
                </div>
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
  //---------filter panel----------
  const FilterSection = () => {
    const handleClickOnly = () => {
      d.setSearchPayload("onlyxxx!");
    };
    return (
      <>
        <div className={cx("FilterSection")}>
          <div className="container">
            <div>
              <h4>Condition of the apartments:</h4>
            </div>
            <button
              className="btn btn-outline-primary"
              onClick={handleClickOnly}
            >
              Only available {"<"} 20 days
            </button>
          </div>
        </div>
      </>
    );
  };
  //-----------quick search prex d8_---------------
  const QuickSearch = () => {
    const handleSearchByPriceRange = (e) => {
      const d8_value = e.target.attributes.str_search.value;
      console.log(d8_value);
      d.setSearchPayload(d8_value);
    };
    return (
      <>
        <div className="container">
          <div className={cx("QuickSearch")}>
            <h5>Tìm nhanh theo khoảng giá:</h5>
            <div className={cx("content2")}>
              <div onClick={handleSearchByPriceRange} str_search="0-10xxx!">
                0 - 10 tỷ
              </div>
              <div onClick={handleSearchByPriceRange} str_search="10-20xxx!">
                10 - 20 tỷ
              </div>
              <div onClick={handleSearchByPriceRange} str_search="20-50xxx!">
                20 - 50 tỷ
              </div>
              <div onClick={handleSearchByPriceRange} str_search="50-100xxx!">
                50 - 100 tỷ
              </div>
              <div onClick={handleSearchByPriceRange} str_search="100-200xxx!">
                100 - 200 tỷ
              </div>
              <div onClick={handleSearchByPriceRange} str_search="200-500xxx!">
                200 - 500 tỷ
              </div>
              <div onClick={handleSearchByPriceRange} str_search="500-MAXxxx!">
                {">"} 500 tỷ
              </div>
            </div>
          </div>
        </div>
      </>
    );
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
          <SearchPanel />
          <QuickSearch />

          {/* {<FilterSection />} */}
        </div>
      </div>
    </>
  );
}
