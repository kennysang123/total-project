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
            kiếm nhấn nút <b>Xóa kết quả</b>.
          </p>
          <h4>Mục 2: Hướng dẫn thêm danh sách yêu thích</h4>
          <p>
            Danh sách yêu thích giúp bạn lưu lại các mục bạn muốn theo dõi. Để
            thêm 1 mục vào danh sách yêu thích hãy nhấn vào hình trái tim{" "}
            <span className="material-icons ">favorite_border</span> góc trên
            bên phải của mỗi mục. Sau khi thêm vào danh sách yêu thích hình trái
            tim sẽ đổi thành hình chữ{" "}
            <span className="material-icons ">check</span> báo hiệu đã thêm
            thành công.
          </p>
          <p>
            Nhấn vào Nút <b>Yêu thích</b>{" "}
            <span className="material-symbols-outlined ">favorite</span> để mở
            danh sách yêu thích. Sau đó nhấn vào mã từng mục để xem thông tin
            chi tiết của từng mục. Nhấn nút{" "}
            <span className="material-icons ">clear</span> bên phải mỗi mục để
            xóa mục đó khỏi danh sách yêu thích.
          </p>

          {/* <h4>Section 1: Search Guide</h4>
          <p>
            Enter in the search box the values you want to find such as:
            apartment code, district name, city name, ... After stopping typing
            for about 2 seconds, it will automatically search. To delete the
            search results press the <b>Delete Results button</b>.
          </p>
          <h4>Section 2: Instructions for adding a favorite list</h4>
          <p>
            Favorites list helps you save the items you want to keep track of.
            To add an item to the favorites list, tap the <b>heart</b>{" "}
            <span className="material-icons colorGreen">favorite_border</span>{" "}
            in the upper right corner of each item. After adding to the
            favorites list, the heart shape will change to a <b>V</b>{" "}
            <span className="material-icons colorGreen">check</span> shape,
            indicating that it has been successfully added.
          </p>
          <p>
            Tap the <b>Favorites Button</b>{" "}
            <span className="material-symbols-outlined colorGreen">
              favorite
            </span>{" "}
            to open the favorites list. Then click on each item's code to see
            detailed information for each item. Press the x button to the right
            of each item to remove it from the favorites list.
          </p> */}
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
