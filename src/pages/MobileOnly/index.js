import React, { useRef, useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
import PopUp from "./comp/PopUp";
import PostThumnail from "./comp/PostThumnail";
import IconNav from "./comp/IconNav";
import Panel from "./comp/Panel";
import { FuncX1 } from "../../Components_Shopee/Functions";
import { v4 } from "uuid";
const cx = classNames.bind(styles);

export default function MobileOnly() {
  const [isPanelSearch, setIsPanelSearch] = useState(false);
  function handleSearch() {
    setIsPanelSearch(!isPanelSearch);
    console.log(1111111111111);
  }

  const [productView, setProductView] = useState([]);
  const [productArray, setProductArray] = useState([]);

  async function handleClick() {
    let url = "http://vd2.epizy.com/serverphp/api/v1/product/";
    const FuncX1x = new FuncX1();
    const data = await FuncX1x.SelectData(url, "all");
    //console.log("data sau await: ", data);
    //console.log("data sau await2: ", data[0]["Code"]);
    return data;
  }

  useEffect(() => {
    const d3 = handleClick();
    d3.then((res) => {
      //console.log(res);
      const product = res.map((val) => <PostThumnail key={v4()} props={val} />);
      setProductView([...product]);
      // /setProductArray([...res]);
    });
  }, []);

  return (
    <>
      {isPanelSearch && <Panel onClick={handleSearch} />}
      <div className={cx("containerX")}>{productView}</div>
      <div className={cx("footer")}>
        <div className={cx("popup")}>
          <IconNav props={{ name: "search" }} onClick={handleSearch} />
          <IconNav props={{ name: "home" }} onClick={handleSearch} />
          <IconNav props={{ name: "menu" }} onClick={handleSearch} />
        </div>
      </div>
    </>
  );
}
