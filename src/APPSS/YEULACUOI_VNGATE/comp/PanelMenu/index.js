import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
import FavoriteItem from "../FavoriteItem";
import { v4 } from "uuid";
import { height } from "@mui/system";
const cx = classNames.bind(styles);

export default function PanelMenu(props) {
  const d = props.props;
  const [isShowMenuPopUp, setIsShowMenuPopUp] = useState("");
  //----------handle favorite--------------
  const [refresh, setRefresh] = useState(false);
  function get2() {
    let item2 = localStorage.getItem("bdsFavorite");

    if (item2 != null) {
      item2 = JSON.parse(item2);
    } else {
      const cell1 = JSON.stringify({ code: "vd1", price: 1234 });
      const cell2 = JSON.stringify({ code: "vd2", price: 12333 });
      item2 = [cell1, cell2];
    }
    return item2;
  }
  const itemlist = get2();
  const [favoriteItem, setFavoriteItem] = useState(itemlist);

  const linkhd = {
    huongdanbandau: {
      title: "Hướng dẫn ban đầu",
      link: "https://vngate.top/huong-dan-tham-gia-yeulacuoi-vngate-top/13/",
    },
    huongdandangky: {
      title: "Hướng dẫn đăng ký",
      link: "https://vngate.top/huong-dan-dang-ky-thanh-vien-ketdoi-vngate-top/51/",
    },
    chinhsachbaomat: {
      title: "Chính sách bảo mật",
      link: "https://vngate.top/chinh-sach-bao-mat-ketdoi-vngate-top/65/",
    },
  };

  function deleteItem(e) {
    const index = favoriteItem.indexOf(e);
    if (index > -1) {
      let items = [...favoriteItem];
      items.splice(index, 1); // 2nd parameter means remove one item only
      localStorage.setItem("bdsFavorite", JSON.stringify(items));
      setFavoriteItem([...items]);
    }
  }
  function mapFavorite() {
    const map = favoriteItem.map((value, index) => (
      <FavoriteItem
        key={v4()}
        props={{
          name: value,
          deleteItem: deleteItem,
          setSearchPayload: d.setSearchPayload,

          /* setFavoriteItem: setFavoriteItem,
          
          isRefresh: props.props.isRefresh,
          setIsRefresh: props.props.setIsRefresh,
          setSearchValue: props.props.setSearchValue, */
        }}
      />
    ));
    return map;
  }
  const mapx = mapFavorite();

  const handleXoa = () => {
    localStorage.removeItem("bdsFavorite");
    props.props.setIsRefresh(!props.props.isRefresh);
    setRefresh(!refresh);
  };
  //----------handle close----------------
  const handleClose = () => {
    d.setPanelShow("");
    d.setIsReLoad(!d.isReLoad);
  };
  //--------item menu---------------
  const ItemMenu = (props) => {
    const data = props.props;
    return (
      <>
        <div className={cx("ItemMenu")}>
          <div className={cx("item")}>{data.name}</div>
        </div>
      </>
    );
  };
  //----------MenuPopUp------------------
  const MenuPopUp = (props) => {
    const data = props.props;
    const bodyPopUp = useRef();
    const [bodyHeight, setBodyHeight] = useState(0);

    useEffect(() => {
      const height1 = bodyPopUp.current.clientHeight;
      setBodyHeight(height1);

      return () => {};
    }, []);

    const HuongDan = (props) => {
      const [loadHUongDan, setLoadHUongDan] = useState(true);
      const data = props.props;
      const style1 = {
        height: data.bodyHeight,
      };

      return (
        <>
          <div className={cx("HuongDan")}>
            {loadHUongDan && <p>Đang tải...</p>}
            <iframe
              className={cx("frame")}
              title="Huong dan"
              src={linkhd[isShowMenuPopUp]["link"]}
              style={style1}
              onLoad={() => setLoadHUongDan(false)}
            ></iframe>
          </div>
        </>
      );
    };
    return (
      <>
        <div className={cx("MenuPopUp")}>
          <div className={cx("wrapper")}>
            <div
              className={cx("header")}
              onClick={() => setIsShowMenuPopUp("")}
            >
              <div className={cx("title")}>
                <h3>{linkhd[isShowMenuPopUp]["title"]}</h3>
              </div>
              <div className={cx("close2")}>
                <span className="material-icons">clear</span>
              </div>
            </div>
            <div className={cx("body")} ref={bodyPopUp}>
              {data.type === "hd" && (
                <HuongDan props={{ bodyHeight: bodyHeight }} />
              )}
            </div>
            <div
              className={cx("footer2")}
              onClick={() => setIsShowMenuPopUp("")}
            ></div>
            <div className={cx("close")} onClick={() => setIsShowMenuPopUp("")}>
              <span className="material-icons">clear</span>
            </div>
          </div>
        </div>
      </>
    );
  };
  //----------return main-----------------
  return (
    <>
      {isShowMenuPopUp === "huongdanbandau" && (
        <MenuPopUp props={{ type: "hd" }} />
      )}
      {isShowMenuPopUp === "huongdandangky" && (
        <MenuPopUp props={{ type: "hd" }} />
      )}
      {isShowMenuPopUp === "chinhsachbaomat" && (
        <MenuPopUp props={{ type: "hd" }} />
      )}
      <div className={cx("Panel")}>
        <div className={cx("panel-hide")} onClick={handleClose}></div>
        <div className={cx("panel")}>
          <div className={cx("panel-header")}>
            <h2 className={cx("title")}>Menu</h2>
            <div className={cx("close")} onClick={handleClose}>
              <span className="material-icons">clear</span>
            </div>
          </div>
          <div className={cx("PanelFavorite")}>
            <div onClick={() => setIsShowMenuPopUp("huongdanbandau")}>
              <ItemMenu props={{ name: "Hướng dẫn ban đầu" }} />
            </div>
            <div onClick={() => setIsShowMenuPopUp("huongdandangky")}>
              <ItemMenu props={{ name: "Hướng dẫn đăng ký" }} />
            </div>
            <div onClick={() => setIsShowMenuPopUp("chinhsachbaomat")}>
              <ItemMenu props={{ name: "Chính sách bảo mật" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
