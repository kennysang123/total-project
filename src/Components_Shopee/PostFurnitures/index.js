import React, { useState } from "react";
import { v4 } from "uuid";
import { Furnitures as Fur } from "../AppContext";

export default function PostFurnitures() {
  const Furnitures = Fur;
  const isFurnitures = {
    AirConditioner: true,
    Bed: true,
    CookerHood: true,
    DiningSubtances: false,
    DiningTable: false,
    DressingTable: false,
    Dryer: true,
    Fridge: false,
    HotWaterHeater: false,
    IroningBoard: false,
    Mattress: true,
    Oven: false,
    Shower: false,
    Sofa: false,
    Stove: true,
    TV: false,
    Wardrobe: false,
    WorkingDesk: false,
  };
  //console.log(window.screen.width);

  function setColByWidth() {
    const widthx = window.screen.width;
    const heightx = window.screen.height;
    let col2 = "col-3";
    if (widthx < 415) {
      col2 = "col-6";
    }
    return col2;
  }
  const colx = setColByWidth();

  const mapFurnitures = Furnitures.map((value, index) => (
    <li className={colx} key={v4()} style={{ listStyleType: "none" }}>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id={value.idX}
          name={value.nameX}
          value="something"
          checked={isFurnitures[value.nameX]}
          disabled={!isFurnitures[value.nameX]}
        ></input>
        <label className="form-check-label" htmlFor={value.idX}>
          {value.labelX}
        </label>
      </div>
    </li>
  ));
  return (
    <>
      <section style={{ marginTop: "20px" }}>
        <div className="container">
          <div className="row">
            <h2 className="title-uti">Furnitures:</h2>
          </div>
          <div className="row">{mapFurnitures}</div>
        </div>
      </section>
    </>
  );
}
