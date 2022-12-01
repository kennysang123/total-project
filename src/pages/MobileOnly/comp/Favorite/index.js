import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
import FavoriteItem from "../FavoriteItem";
import { v4 } from "uuid";
const cx = classNames.bind(styles);

export default function Favorite(props) {
  //console.log("Favorite: ", props.props.setIsRefresh);
  function get2() {
    const itemsInit = ["D2N0005", "D2N0006", "D2N0007", "D2N0008", "D2N0009"];
    const itemGet = localStorage.getItem("favorite");
    /* localStorage.setItem("favorite", JSON.stringify(itemsInit)); */
    //console.log("itemget", itemGet);
    let item2 = [];
    if (itemGet) {
      item2 = JSON.parse(itemGet);
    }

    return item2;
  }
  const itemlist = get2();

  //console.log("itemlist", itemlist);
  const [favoriteItem, setFavoriteItem] = useState(itemlist);

  function deleteItem(e) {
    //console.log("delete", e);
    const index = favoriteItem.indexOf(e);
    if (index > -1) {
      // only splice array when item is found
      let items = [...favoriteItem];
      items.splice(index, 1); // 2nd parameter means remove one item only
      localStorage.setItem("favorite", JSON.stringify(items));
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
        }}
      />
    ));
    return map;
  }

  const map = mapFavorite();

  return (
    <>
      <div className={cx("wrapperP")}>
        <div className={cx("titleP")}>
          <h4>Your Favorite</h4>
        </div>
        <div className={cx("contentP")}>{map}</div>
      </div>
    </>
  );
}
