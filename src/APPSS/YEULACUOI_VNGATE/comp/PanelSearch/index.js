import React, { useState } from "react";
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
            <h5>Tìm nhanh:</h5>
            <div className={cx("content2")}>
              <label htmlFor="PSf1">Tỉnh/Thành phố</label>
              <select className="form-select" aria-label="Default" id="PSf1">
                <option selected>tất cả</option>
                <option value="HCM">HCM</option>
                <option value="Bình Dương">Bình Dương</option>
                <option value="Long An">Long An</option>
                <option value="Tây Ninh">Tây Ninh</option>
              </select>
              <label htmlFor="PSf2">Quận/Huyện</label>
              <select className="form-select" aria-label="Default" id="PSf2">
                <option selected>tất cả</option>
                <option value="Quận 1">Quận 1</option>
                <option value="Quận 2">Quận 2</option>
                <option value="Quận 3">Quận 3</option>
                <option value="Quận 4">Quận 4</option>
                <option value="Quận 5">Quận 5</option>
                <option value="QUận 6">QUận 6</option>
                <option value="Quận 7">Quận 7</option>
                <option value="Quận 8">Quận 8</option>
                <option value="Quận 9">Quận 9</option>
                <option value="Quận 10">Quận 10</option>
                <option value="Quận 11">Quận 11</option>
                <option value="Quận 12">Quận 12</option>
                <option value="Quận Phú Nhuận">Phú Nhuận</option>
                <option value="Quận Bình Thạnh">Tân Phú</option>
                <option value="Quận Tân Phú">Bình Thạnh</option>
                <option value="Quận Gò Vấp">Gò Vấp</option>
                <option value="xxxx">Bình Chánh</option>
                <option value="xxxx">Thủ Đức</option>
                <option value="xxxx">Hốc Môn</option>
                <option value="xxxx">Củ Chi</option>
                <option value="xxxx">xxxxx</option>
                <option value="xxxx">xxxxx</option>
              </select>
              <label htmlFor="PSf3">Giới tính</label>
              <select className="form-select" aria-label="Default" id="PSf3">
                <option selected>tất cả</option>
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
              </select>
              <label htmlFor="PSf3">Độ tuổi</label>
              <select className="form-select" aria-label="Default" id="PSf3">
                <option selected>tất cả</option>
                <option value="xxxx">18-25t</option>
                <option value="xxxx">25-30t</option>
                <option value="xxxx">30-35t</option>
                <option value="xxxx">35-40t</option>
                <option value="xxxx">40-45t</option>
                <option value="xxxx">45-50t</option>
                <option value="xxxx">50-55t</option>
                <option value="xxxx">55-60t</option>
                <option value="xxxx">xxxxx</option>
                <option value="xxxx">xxxxx</option>
                <option value="xxxx">xxxxx</option>
                <option value="xxxx">xxxxx</option>
                <option value="xxxx">xxxxx</option>
                <option value="xxxx">xxxxx</option>
                <option value="xxxx">xxxxx</option>
              </select>
              <div onClick={handleSearchByPriceRange} str_search="0-10xxx!">
                0 - 10 tỷ
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
