import React, { useEffect, useState } from "react";
import CheckBox from "../CheckBox";
import { v4 } from "uuid";

export default function CheckContent() {
  const d = new Date();
  const monthx = d.getMonth() + 1;
  console.log(d);
  const yearx = d.getFullYear();
  const day = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const mapx = day.map((val) => (
    <CheckBox
      key={v4()}
      props={{ day: val, month: monthx, year: yearx, dayCheck: "day" + val }}
    />
  ));
  const [reload, setReload] = useState(true);
  const [valInput, setValInput] = useState("");
  const [tb, setTb] = useState("");

  function handleClick() {
    if (valInput === "yes") {
      for (let i = 1; i < 32; i++) {
        localStorage.setItem("day" + i, JSON.stringify(false));
      }
      setTb("Thông báo: Đã xóa");
      setReload(!reload);
    } else {
      setTb(
        "Thông báo: Bạn chưa xác nhận xóa, để xác nhận xóa hãy nhập chữ yes vào ô trống rồi nhấn nút Xóa tất cả"
      );
    }
  }
  function handleInputChange(e) {
    setValInput(e.target.value);
  }
  //useEffect(() => {}, []);
  return (
    <>
      <div className="row">
        <div className="col-12">
          <p>
            App lưu data vào trình duyệt, nếu bạn đổi trình duyệt khác thì phải
            nhập lại từ đầu. App vẫn lưu dữ liệu ngay cả khi bạn tắt trình duyệt
          </p>
        </div>
        <div className="col-12">
          <p>
            Để xóa tất cả các ô đã check, hãy nhập chữ <b>yes</b> vào ô dưới rồi
            nhấn nút xóa tất cả
          </p>
        </div>
        <div className="col-md-4">
          <div className="input-group flex-nowrap">
            <input
              type="text"
              className="form-control"
              placeholder="Nhập chữ yes vào ô này"
              onChange={handleInputChange}
            ></input>
          </div>
        </div>
        <div className="col-md-4">
          <button className="btn btn-danger" onClick={handleClick}>
            Xóa tất cả
          </button>
        </div>
        <div className="col-12">
          <p style={{ color: "yellow" }}>{tb}</p>
        </div>
      </div>
      {mapx}
    </>
  );
}
