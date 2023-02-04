import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
const cx = classNames.bind(styles);

let value2;
let value3 = "Ready to search";
export default function PanelSearch(props) {
  const d = props.props;
  ///----search element--------
  let timer;
  const SearchPanel = () => {
    const [seachValue, setSeachValue] = useState(value2);
    const [searchStatus, setSearchStatus] = useState(value3);
    const handleXoaKqTk = () => {
      d.setSearchPayload("");
      value3 = "Ready to search";
    };
    const handleSearchId = (e) => {
      const v = e.target.value;
      value2 = v;
      setSeachValue(v);
      if (v != "") {
        clearTimeout(timer);
        setSearchStatus("Searching...");
        timer = setTimeout(() => {
          console.log("tick");
          d.setSearchPayload(v);
          value3 = "Done, close this panel to see result";
          setSearchStatus("Done, close this panel to see result");
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
                <h6>See Help Section 1</h6>
              </div>
              <div className={cx("col-12")}>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Search
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
                    Delete result
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
              Only available {"<"} 30 days
            </button>
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
            <h2 className={cx("title")}>Search</h2>
            <div className={cx("close")} onClick={handleClose}>
              <span className="material-icons">clear</span>
            </div>
          </div>
          {<SearchPanel />}
          {<FilterSection />}
        </div>
      </div>
    </>
  );
}
