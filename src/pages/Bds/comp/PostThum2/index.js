import React from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
const cx = classNames.bind(styles);

export default function PostThum2() {
  const data3 = {
    code: "L0001",
    title: "Nhà phố Tp.HCM",
    price: "3,750 tỷ VND",
    phone: "0907852416",
    city: "Tp.Hồ Chí Minh",
    ward: "Quận Phú Nhuận",
    dayUpdate: "22/12/2022",
    address: "Phan Đình Phùng, Phường 1, Quận Phú Nhuận, Tp.HCM",
    sale: [{ phone: "0932171895", name: "An", zalo: "Andy" }],
    short:
      "Diện tích 3x7m nở hậu. 2PN 2WC. Máy năng lượng mặt trời. 2 máy lạnh.",
    private: "Đi hẻm 270//2 Phan Đình Phùng hoặc 19/45 Cô Bắc",
    content: [
      "Diện tích 3x7m công nhận đủ nở hậu, tài lộc phong thủy tốt",
      "Kết cấu: Trệt 2 lầu trống suốt 2PN, 2WC. Ban công thoáng mát, có máy năng lượng mặt trời, 2 máy lạnh, hẻm thông Cô Bắc, Cô Giang, Đoàn Thị Điểm",
    ],
    photoMain:
      "https://file4.batdongsan.com.vn/2022/11/21/20221121090253-a5ce_wm.jpg",
    photoList: [
      "http://vngate.top/Rent/D2N0005/Photo/D2N0005_1.jpg",
      "http://vngate.top/Rent/D2N0005/Photo/D2N0005_2.jpg",
      "http://vngate.top/Rent/D2N0005/Photo/D2N0005_3.jpg",
      "http://vngate.top/Rent/D2N0005/Photo/D2N0005_4.jpg",
      "http://vngate.top/Rent/D2N0005/Photo/D2N0005_5.jpg",
      "http://vngate.top/Rent/D2N0005/Photo/D2N0005_6.jpg",
    ],
  };
  return (
    <>
      <div className={cx("PostThum2")}>
        <div className={cx("head2")}>
          <div className={cx("avatar")}>
            <div className={cx("photo")}></div>
            <div className={cx("title")}>
              <span>{data3.code}</span> -{" "}
              <span className={cx("city")}>{data3.city}</span>
            </div>
            <div className={cx("time")}>• {data3.dayUpdate}</div>
            <div className={cx("favorite")} onClick={"handleAddFavorite"}>
              <span className={cx("done", "material-icons")}>favorite</span>
            </div>
            <div className={cx("upload")}>
              <span className={cx("done", "material-icons")}>settings</span>
            </div>
          </div>
        </div>
        <div
          className={cx("body2")}
          style={{ backgroundImage: `url(${data3.photoMain})` }}
        ></div>
        <div className={cx("bottom2")}>
          <div className={cx("header")}>
            <div className={cx("title")}>
              <h5>
                {data3.code} - {data3.title}
              </h5>
            </div>
            <div className={cx("price")}>
              <h5>{data3.price}</h5>
            </div>
          </div>
          <div className={cx("body3")}>
            <div className={cx("short")}>
              <p>
                Diện tích: 4x23m (120m2), nở hậu. Thổ cư 100%. Ngân hàng hổ trợ
                vay.
              </p>
            </div>
            <div className={cx("seeMore")}>
              <button className={cx("btn btn-outline-secondary", "chiTiet")}>
                Chi tiết
              </button>
            </div>
          </div>
        </div>
        <div className={cx("bottom3")}>
          <div className={cx("content")}>
            <p>
              (c) <b>bds.vngate.top</b>{" "}
              <span>
                {" "}
                - Tìm kiếm với ID: <b>{data3.code}</b>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
