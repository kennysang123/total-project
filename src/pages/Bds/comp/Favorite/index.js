import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
import FavoriteItem from "../FavoriteItem";
import { v4 } from "uuid";
const cx = classNames.bind(styles);

export default function Favorite(props) {
  const [refresh, setRefresh] = useState(false);
  function get2() {
    const itemsInit = ["D2N0005", "D2N0006", "D2N0007", "D2N0008", "D2N0009"];
    const itemGet = localStorage.getItem("bdsFavorite");
    let item2 = [];
    if (itemGet) {
      item2 = JSON.parse(itemGet);
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
          setFavoriteItem: setFavoriteItem,
          deleteItem: deleteItem,
          isRefresh: props.props.isRefresh,
          setIsRefresh: props.props.setIsRefresh,
          setSearchValue: props.props.setSearchValue,
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

  return (
    <>
      <div className={cx("wrapperP")}>
        <div className={cx("titleP")}>
          <h6>Danh sách đã thích:</h6>
        </div>
        <div className={cx("contentP")}>{mapx}</div>
      </div>
    </>
  );
}
