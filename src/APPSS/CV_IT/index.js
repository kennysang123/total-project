import React from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
const cx = classNames.bind(styles);

export default function CV_IT() {
  const Header = () => {
    return (
      <>
        <div className={cx("Header")}>
          <div>CV</div>
          <div>Front-End Developer</div>
        </div>
      </>
    );
  };
  const Body = () => {
    return (
      <>
        <div className={cx("Body")}>
          <div className={cx("personal")}>
            <div className={cx("avatar")}></div>
            <div className={cx("info")}>
              <p>
                <span>Cao Phước Nguyên </span>
              </p>
              <p>
                <b>Năm sinh:</b> 1992 - <b>Giới tính:</b> nam
              </p>

              <p>
                <b>Địa chỉ:</b> Quận Gò Vấp, Tp.HCM
              </p>
              <p>
                <b>ĐT:</b> 0907852416 <a href="tel:0907852416">Gọi</a>
              </p>
              <p>
                <b>E-mail:</b> nguyencp.hatec@gmail.com{" "}
                <a href="mailto:nguyencp.hatec@gmail.com">Gủi mail</a>
              </p>
            </div>
          </div>
          <div className={cx("edu")}>
            <h5>Học Vấn</h5>
            <p>
              <b>Trường:</b> ĐH Công Nghiệp Tp.HCM (2010-2014)
            </p>
            <p>
              <b>Bật đào tạo:</b> Đại học - <b>Chuyên ngành:</b> Kỹ thuật điện
            </p>
            <p>
              <b>Tiếng anh:</b> Đọc tài liệu tốt - giao tiếp trung bình
            </p>
            <hr></hr>
            <h5>Kỹ năng công việc:</h5>
            <p>
              Kinh nghiệm 2 năm lập trình tổng hợp: react, php, javascript,
              html, css, mysql, nodejs, firebase
            </p>
            <hr></hr>
            <h5>Project:</h5>
            <p>
              <a href="http://bds.vngate.top" target="_blank">
                http://bds.vngate.top
              </a>
            </p>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className={cx("CV_IT")}>
        <Header />
        <Body />
      </div>
    </>
  );
}
