import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
import GlobalClass from "../../../../components_global/GlobalClass";
const cx = classNames.bind(styles);

let data = {};
export default function EditJson() {
  const [content, setContent] = useState({});
  const [outS, setOutS] = useState({});
  const [update, setUpdate] = useState({});
  const code = "B0011";
  let data4 = {
    code: `${code}`,
    title: "Nhà  phố Tp.HCM",
    phone: "0907852416",
    price: "7,68 tỷ VND",
    city: "Tp.Hồ Chí Minh",
    ward: "Quận Phú Nhuận",
    dayUpdate: "08/12/2022",
    address: "",
    sale: [
      {
        phone: "0907852416",
        name: "Phạm Như Ý",
        zalo: "https://zalo.me/0907852416",
      },
    ],
    short:
      "Diện tích: 3.3x12m hiện trạng 38m2. 1 trệt 3 lầu 2 sân thượng. 5PN 4WC.",
    private: "phan xich long, p3, phú nhuận , hcm",
    content: [
      "Diện tích: 3.3x12m hiện trạng 38m2. 1 trệt 3 lầu 2 sân thượng. 5PN 4WC.",
    ],
    photoMain: `${code}_T.jpg`,
    photoList: [
      `${code}_1.jpg`,
      `${code}_2.jpg`,
      `${code}_3.jpg`,
      `${code}_4.jpg`,
      `${code}_5.jpg`,
      `${code}_6.jpg`,
      `${code}_7.jpg`,
      `${code}_8.jpg`,
      `${code}_9.jpg`,
      `${code}_10.jpg`,
      `${code}_11.jpg`,
    ],
  };

  function handleGet(e) {
    setContent({ ...data });
  }
  function handleCode(e) {
    const v = e.target.value;
    data = { ...data, code: v };
  }
  function handlePrice(e) {
    const v = e.target.value;
    data = { ...data, price: v };
  }
  function handleTypeBds(e) {
    const v = e.target.value;
    data = { ...data, typeBds: v };
  }
  function handleQuan(e) {
    const v = e.target.value;
    data = { ...data, dist: v };
  }
  function handleCity(e) {
    const v = e.target.value;
    data = { ...data, city: v };
  }
  function handleContent(e) {
    const v = e.target.value;
    data = { ...data, content: v };
  }
  function handlePhoto(e) {
    const v = e.target.value;
    data = { ...data, photolist: v };
  }
  function handlePrivate(e) {
    const v = e.target.value;
    data = { ...data, private: v };
  }
  function handleDayUpdate(e) {
    const v = e.target.value;
    data = { ...data, dayUpdate: v };
  }
  function handlePass(e) {
    const v = e.target.value;
    data = { ...data, pass: v };
  }
  function handleUpserver() {
    const data2 = { ...data, method: "iu" };
    const cla = new GlobalClass();
    const d = cla.UpNewBds("https://vngate.top/API/BdsPHP/", data2);
    d.then((res) => setOutS(res));
  }
  function handleSelectAll() {
    const data2 = { ...data, method: "selectall" };
    const cla = new GlobalClass();
    const d = cla.UpNewBds("https://vngate.top/API/BdsPHP/", data2);
    d.then((res) => setOutS(res));
  }

  const Form = () => {
    const handleDateNow = () => {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const dateVN = `${day}/${month}/${year}`;
      //document.writeln(dateVN + "<hr>");
      data = { ...data, dayUpdate: dateVN };
      return dateVN;
    };
    const autoPass = () => {
      const pass = "home";
      data = { ...data, pass: pass };
      return pass;
    };

    return (
      <>
        <div className="container">
          <div className="row">
            <hr></hr>
          </div>
          <div className="row">
            <div className="col-9">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Code:
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="B0001"
                  onChange={handleCode}
                ></input>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon2">
                  Giá: $$$ tỷ VND
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="12,5"
                  onChange={handlePrice}
                ></input>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon3">
                  Loại BDS:
                </span>
                <select
                  class="form-select"
                  id="inputGroupSelect01"
                  onChange={handleTypeBds}
                >
                  <option selected>Choose...</option>
                  <option value="Nhà phố">Nhà phố</option>
                  <option value="Đất nền">Đất nền</option>
                  <option value="Căn hộ">Căn hộ</option>
                  <option value="Biệt thự">Biệt thự</option>
                </select>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon4">
                  Quận/Huyện:
                </span>
                <select
                  class="form-select"
                  id="inputGroupSelect02"
                  onChange={handleQuan}
                >
                  <option selected>Choose...</option>
                  <option value="Quận 1">Quận 1</option>
                  <option value="Quận 2">Quận 2</option>
                  <option value="Quận 3">Quận 3</option>
                  <option value="Quận 4">Quận 4</option>
                  <option value="Quận 5">Quận 5</option>
                  <option value="Quận 6">Quận 6</option>
                  <option value="Quận 7">Quận 7</option>
                  <option value="Quận 8">Quận 8</option>
                  <option value="Quận 9">Quận 9</option>
                  <option value="Quận 10">Quận 10</option>
                  <option value="Quận 11">Quận 11</option>
                  <option value="Quận 12">Quận 12</option>
                  <option value="Quận Phú Nhuận">Quận Phú Nhuận</option>
                  <option value="Quận Bình Thạnh">Quận Bình Thạnh</option>
                  <option value="Quận Tân Phú">Quận Tân Phú</option>
                  <option value="Quận Thủ Đức">Quận Thủ Đức</option>
                  <option value="Quận Gò Vấp">Quận Gò Vấp</option>
                  <option value="Quận Bình Chánh">Quận Bình Chánh</option>
                  <option value="Quận Củ Chi">Quận Củ Chi</option>
                  <option value="Huyện Cần Đước">Huyện Cần Đước</option>
                </select>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon5">
                  Tỉnh/Thành phố:
                </span>
                <select
                  class="form-select"
                  id="inputGroupSelect03"
                  onChange={handleCity}
                >
                  <option selected>Choose...</option>
                  <option value="TP.HCM">TP.HCM</option>
                  <option value="Long An">Long An</option>
                </select>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon6">
                  Content:
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="content..."
                  onChange={handleContent}
                ></input>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon7">
                  Photo số lượng:
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="10"
                  onChange={handlePhoto}
                ></input>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon8">
                  Private:
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="ĐT 0907852444 Andy, Zalo Andy, 123/65 Lê duẩn,p2,tphcm..."
                  onChange={handlePrivate}
                ></input>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon9">
                  Ngày cập nhật:
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="22/02/2022"
                  onChange={handleDayUpdate}
                  value={handleDateNow()}
                  disabled
                ></input>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon10">
                  Pass:
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="pass..."
                  onChange={handlePass}
                  value={autoPass()}
                  disabled
                ></input>
              </div>
            </div>
            <div className="col-3">
              <button className="btn btn-outline-danger" disabled>
                Load
              </button>
              <button className="btn btn-outline-danger" onClick={handleGet}>
                Copy
              </button>
              <button className="btn btn-outline-danger" disabled>
                Up Data
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={handleUpserver}
              >
                Insert Data
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={handleSelectAll}
              >
                Select All
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

  const TextOut = (props) => {
    return (
      <>
        <div className="container">
          <div className="row">
            <hr></hr>
          </div>
          <div className="row">
            <div className="col-12">
              <div class="input-group">
                <textarea
                  value={JSON.stringify(content)}
                  class="form-control"
                  aria-label="With textarea"
                  style={{ height: "10vh" }}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const TextOutFromServer = (props) => {
    return (
      <>
        <div className="container">
          <div className="row">
            <hr></hr>
          </div>
          <div className="row">
            <div className="col-12">
              <div class="input-group">
                <textarea
                  value={JSON.stringify(outS)}
                  class="form-control"
                  aria-label="With textarea"
                  style={{ height: "24vh" }}
                ></textarea>

                {/* <span class="input-group-text">
                  <button className="btn btn-outline-primary">
                    Out from Server
                  </button>
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Form />
      <TextOut />
      <TextOutFromServer />
    </>
  );
}
