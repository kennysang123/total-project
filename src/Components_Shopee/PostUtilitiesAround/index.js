import React from "react";
import { v4 } from "uuid";
import { TienIch, UtilitiesAround as UA, Furnitures } from "../AppContext";

export default function PostUtilitiesAround() {
  const UtilitiesAround = UA;
  const isUtilitiesAround = {
    ATM: true,
    Cannal: true,
    Hospital: true,
    Ministop: false,
    Park: false,
    SportCenter: true,
    SuperMarket: true,
  };
  const mapUtilitiesAround = UtilitiesAround.map((value, index) => (
    <li className="col-4" key={v4()} style={{ listStyleType: "none" }}>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id={value.idX}
          name={value.nameX}
          value="something"
          checked={isUtilitiesAround[value.nameX]}
          disabled={!isUtilitiesAround[value.nameX]}
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
            <h2 className="title-uti">Utilities Around:</h2>
          </div>
          <div className="row">{mapUtilitiesAround}</div>
        </div>
      </section>
    </>
  );
}
