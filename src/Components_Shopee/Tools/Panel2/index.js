import React, { useState, useEffect } from "react";
import {
  TienIch,
  Fee,
  ServiceFree,
  UtilitiesAround,
  Furnitures,
} from "../../AppContext";

import { v4 } from "uuid";
import classNames from "classnames/bind";
import styles from "./Style.module.scss";
import PhotoLink from "../PhotoLink";
const cx = classNames.bind(styles);

export default function Panel2() {
  const deposit = {
    month6: 1,
    month12: 1.5,
  };
  const fee = {
    price: "free",
    person: "",
  };
  console.log(JSON.stringify(fee));
  console.log(ServiceFree);
  const [check1, setCheck1] = useState({
    AllowPets: false,
    Balcony: false,
    Bathtup: false,
    Elevator: false,
    InternetWifi: false,
    Parking: false,
    SecurityCamera: false,
    WashingMachine: false,
    SwimmingPool: false,
    Rooftop: false,
    Jacuzzi: false,
    Garage: false,
    Garden: false,
    Lobby: false,
    SaunaRoom: false,
    Windown: false,
    NiceView: false,
    Gym: false,
    BBQ: false,
  });
  const [UtilitiesAroundX, setUtilitiesAroundX] = useState({
    ATM: false,
    Cannal: false,
    Hospital: false,
    Ministop: false,
    Park: false,
    SportCenter: false,
    SuperMarket: false,
  });
  const [FurnituresX, setFurnituresX] = useState({
    AirConditioner: false,
    Bed: false,
    CookerHood: false,
    DiningSubtances: false,
    DiningTable: false,
    DressingTable: false,
    Dryer: false,
    Fridge: false,
    HotWaterHeater: false,
    IroningBoard: false,
    Mattress: false,
    Oven: false,
    Shower: false,
    Sofa: false,
    Stove: false,
    TV: false,
    Wardrobe: false,
    WorkingDesk: false,
  });
  const [count, setCount] = useState(1);
  const OpTienIch = TienIch;
  const OpUtilitiesAround = UtilitiesAround;
  const OpFurnitures = Furnitures;
  //console.log(OpTienIch);
  function handleCopy() {
    navigator.clipboard.writeText(JSON.stringify(check1));
  }
  function handleCopyUtilitiesAround() {
    navigator.clipboard.writeText(JSON.stringify(UtilitiesAroundX));
  }
  function handleCopyFurnitures() {
    navigator.clipboard.writeText(JSON.stringify(FurnituresX));
  }

  useEffect(() => {
    handleCopy();
  }, [check1]);
  useEffect(() => {
    handleCopyUtilitiesAround();
  }, [UtilitiesAroundX]);
  useEffect(() => {
    handleCopyFurnitures();
  }, [FurnituresX]);

  function handleChange(e) {
    const s1 = e.target.id;
    console.log(s1);
    const s2 = !e.target.checked;
    //AppContext = { ...AppContext, s1, s2 };
    console.log(s1, e.target.checked, s2);
    //check1[e.target.idX] = !e.target.checked;
    //setCheck1({ ...AppContext });
    //console.log(check1);
    //setCount(count + 1);
    //---------
    setCheck1((prevState) => {
      console.log(!prevState[s1]);
      const s4 = !prevState[s1];
      const s3 = { ...prevState, [s1]: s4 };
      console.log("s3: ", s3);
      return s3;
    });
    handleCopy();
  }
  function handleChangeUtilitiesAround(e) {
    const s1 = e.target.id;
    console.log(s1);
    const s2 = !e.target.checked;
    //AppContext = { ...AppContext, s1, s2 };
    console.log(s1, e.target.checked, s2);
    //check1[e.target.idX] = !e.target.checked;
    //setCheck1({ ...AppContext });
    //console.log(check1);
    //setCount(count + 1);
    //---------
    setUtilitiesAroundX((prevState) => {
      console.log(!prevState[s1]);
      const s4 = !prevState[s1];
      const s3 = { ...prevState, [s1]: s4 };
      console.log("s3: ", s3);
      return s3;
    });
    handleCopyUtilitiesAround();
  }
  function handleChangeFurnitures(e) {
    const s1 = e.target.id;
    console.log(s1);
    const s2 = !e.target.checked;
    //AppContext = { ...AppContext, s1, s2 };
    console.log(s1, e.target.checked, s2);
    //check1[e.target.idX] = !e.target.checked;
    //setCheck1({ ...AppContext });
    //console.log(check1);
    //setCount(count + 1);
    //---------
    setFurnituresX((prevState) => {
      console.log(!prevState[s1]);
      const s4 = !prevState[s1];
      const s3 = { ...prevState, [s1]: s4 };
      console.log("s3: ", s3);
      return s3;
    });
    handleCopyFurnitures();
  }

  const mapTienIch = OpTienIch.map((value, index) => (
    <li className="col-md-3 " key={v4()}>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id={value.idX}
          name={value.nameX}
          value="something"
          checked={check1[value.idX]}
          onChange={handleChange}
        ></input>
        <label className={cx("form-check-label", "none")} htmlFor={value.idX}>
          {value.labelX} {console.log(check1[value.idX])}
        </label>
      </div>
    </li>
  ));
  const mapUtilitiesAround = OpUtilitiesAround.map((value, index) => (
    <li className="col-md-3 " key={v4()}>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id={value.idX}
          name={value.nameX}
          value="something"
          checked={UtilitiesAroundX[value.idX]}
          onChange={handleChangeUtilitiesAround}
        ></input>
        <label className={cx("form-check-label", "none")} htmlFor={value.idX}>
          {value.labelX} {console.log(UtilitiesAroundX[value.idX])}
        </label>
      </div>
    </li>
  ));
  const mapFurnitures = OpFurnitures.map((value, index) => (
    <li className="col-md-3 " key={v4()}>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id={value.idX}
          name={value.nameX}
          value="something"
          checked={FurnituresX[value.idX]}
          onChange={handleChangeFurnitures}
        ></input>
        <label className={cx("form-check-label", "none")} htmlFor={value.idX}>
          {value.labelX} {console.log(FurnituresX[value.idX])}
        </label>
      </div>
    </li>
  ));

  return (
    <>
      <div className={cx("container", "colortext")}>
        <div className="row mt-3"></div>
        <h3>Panel 2: Utilities</h3>
        <ol className="row">{mapTienIch}</ol>
        <div className="row mb-3">
          <textarea
            className="form-control"
            style={{ color: "gray" }}
            rows="3"
            name="text"
            value={JSON.stringify(check1)}
          ></textarea>
        </div>
        <div className="row">
          <hr></hr>
        </div>
        <div className="row mt-3"></div>
        <h3>Panel 3: UtilitiesAround</h3>
        <ol className="row">{mapUtilitiesAround}</ol>
        <div className="row mb-3">
          <textarea
            className="form-control"
            style={{ color: "gray" }}
            rows="3"
            name="text"
            value={JSON.stringify(UtilitiesAroundX)}
          ></textarea>
        </div>
        <div className="row">
          <hr></hr>
        </div>
        <div className="row">
          <hr></hr>
        </div>
        <div className="row mt-3"></div>
        <h3>Panel 4: Furnitures</h3>
        <ol className="row">{mapFurnitures}</ol>
        <div className="row mb-3">
          <textarea
            className="form-control"
            style={{ color: "gray" }}
            rows="3"
            name="text"
            value={JSON.stringify(FurnituresX)}
          ></textarea>
        </div>
        <div className="row">
          <hr></hr>
        </div>
        <PhotoLink />
      </div>
    </>
  );
}
