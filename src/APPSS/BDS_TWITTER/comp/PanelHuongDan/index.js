import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
import FavoriteItem from "../FavoriteItem";
import { v4 } from "uuid";
const cx = classNames.bind(styles);

export default function PanelHuongDan(props) {
  const d = props.props;

  //----------handle close panel----------------
  //document.body.style.overflow = "hidden";
  const handleClose = () => {
    //document.body.style.overflow = "scroll";
    d.setPanelShow("");
    d.setIsReLoad(!d.isReLoad);
  };
  //----------Noi Dung huong dan -----------
  const NoiDung = () => {
    return (
      <>
        <div className={cx("NoiDung")}>
          <h4>Mục 1: Hướng dẫn tìm kiếm</h4>
          <p>
            Nhập vào ô tìm kiếm các giá trị muốn tìm như: mã căn nhà (đất), tên
            quận, tên thành phố, tỉnh... bằng tiếng việt không dấu. Sau khi
            ngừng nhập khoảng 2 giây sẽ tự động tìm kiếm. Để xóa kết quả tìm
            kiếm nhấn nút <b>Xóa kết quả</b> màu đỏ.
          </p>
          <h4>Mục 2: Hướng dẫn thêm danh sách yêu thích</h4>
          <p>
            Danh sách yêu thích giúp bạn lưu lại các mục bạn muốn theo dõi. để
            thêm 1 mục vào danh sách yêu thích hãy nhấn vào hình trái tim góc
            trên bên phải của mỗi mục. Sau khi thêm vào danh sách yêu thích hình
            trái tim sẽ đổi thành hình chữ v báo hiệu đã thêm thành công.
          </p>
          <p>
            Nhấn vào Nút <b>Yêu thích</b> để mở danh sách yêu thích. Sau đó nhấn
            vào mã từng mục để xem thông tin chi tiết của từng mục. Nhấn nút x
            bên phải mỗi mục để xóa mục đó khỏi danh sách yêu thích.
          </p>
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
            <h2 className={cx("title")}>Hướng dẫn</h2>
            <div className={cx("close")} onClick={handleClose}>
              <span className="material-icons">clear</span>
            </div>
          </div>
          <div className={cx("PanelFavorite")}>
            <div className={cx("contentP")}>
              <NoiDung />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
