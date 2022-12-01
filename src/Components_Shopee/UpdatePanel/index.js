import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Style.module.scss";
import { FuncX1 } from "../Functions";
import Global from "../../components_global/Global";
import GlobalClass from "../../components_global/GlobalClass";

const cx = classNames.bind(styles);

export default function UpdatePanel() {
  const classAPI = new GlobalClass();
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
      const url = Global("url");
      const update = FuncX1x.UpdateData(url, resX);
      update.then((result) => console.log(result));
    });
  }

  function handleUpdate() {
    const url = Global("url");
    const api = Global("api");
    const data = FuncX1x.UpdateData(url, data);
  }
  function getDataNew() {
    console.log("update start");
    const urlgoogle = Global("urlgoogle");
    const dataGetted = classAPI.GetData(urlgoogle, "D2");
    dataGetted.then((result) => {
      let resX = result;
      /* loai bo row trong dau bang */
      resX.splice(1, 1);
      resX.splice(1, 1);
      resX.splice(1, 1);
      //console.log(resX);
      /* update */
      const url2 = Global("url");
      const update = classAPI.UpdateData(url2, resX);
      update.then((result) => {
        console.log(result);
        console.log("update end");
      });
    });
  }
  function updateDataNew() {
    const urlApi = Global("url");
    classAPI.UpdateData(urlApi);
  }
  return (
    <>
      <h1>Upload</h1>
      <div className={cx("btn btn-outline-danger", "x2")} onClick={handleClick}>
        Update
      </div>
      <div className={cx("btn btn-outline-danger", "x2")} onClick={getDataNew}>
        GetData New And Update
      </div>
    </>
  );
}
