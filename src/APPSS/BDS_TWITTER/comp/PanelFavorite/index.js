import React, { useState } from "react";
import Button from "@atlaskit/button";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
import FavoriteItem from "../FavoriteItem";
import { v4 } from "uuid";
const cx = classNames.bind(styles);

export default function PanelFavorite(props) {
  //localStorage.clear("bdsFavorite");
  const d = props.props;
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
    console.log(2222222222);
  };
  //----------return main-----------------
  return (
    <>
      <div className={cx("Panel")}>
        <div className={cx("panel-hide")} onClick={handleClose}></div>
        <div className={cx("panel")}>
          <div className={cx("panel-header")}>
            <h2 className={cx("title")}>Yêu thích</h2>
            <div className={cx("close")} onClick={handleClose}>
              <span className="material-icons">clear</span>
            </div>
          </div>
          <div className={cx("PanelFavorite")}>
            <div className={cx("titleP")}>
              <h6>Danh sách đã thích:</h6>
            </div>
            <div className={cx("contentP")}> {mapx} </div>
          </div>
        </div>
      </div>
    </>
  );
}
