import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Style.module.scss";
import { FuncX1 } from "../Functions";

const cx = classNames.bind(styles);

export default function UpdatePanel() {
  const [payLoad, setPayLoad] = useState("");
  let url =
    "https://script.google.com/macros/s/AKfycbyx94bLgARi0DKJ1k6gSdMBlGjMpnbM_gcELZmFkook2SIqOaJ3ph8VMnUhs35GyQcUMQ/exec";

  const FuncX1x = new FuncX1();
  //DB.GetData(url);

  function handleClick() {
    const data = FuncX1x.GetData(url, "D2");
    data.then((result) => {
      let resX = result;
      /* loai bo row trong dau bang */
      resX.splice(1, 1);
      resX.splice(1, 1);
      resX.splice(1, 1);
      console.log(resX);
      /* update */
      let url = "http://vd2.epizy.com/serverphp/api/v1/product/";
      const update = FuncX1x.UpdateData(url, resX);
      update.then((result) => console.log(result));
    });
  }

  function handleUpdate() {
    let url = "http://vd2.epizy.com/serverphp/api/v1/product/";
    const data = FuncX1x.UpdateData(url, data);
  }
  return (
    <>
      <p>1</p>
      <div className={cx("btn btn-outline-danger", "x2")} onClick={handleClick}>
        Update
      </div>
    </>
  );
}
