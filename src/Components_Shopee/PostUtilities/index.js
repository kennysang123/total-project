import React from "react";
import { v4 } from "uuid";
import { TienIch, UtilitiesAround, Furnitures } from "../AppContext";

export default function PostUtilities() {
  const Utilities = TienIch;
  const isUtilities = {
    AllowPets: true,
    Balcony: true,
    Bathtup: true,
    Elevator: false,
    InternetWifi: false,
    Parking: false,
    SecurityCamera: false,
    WashingMachine: false,
    SwimmingPool: false,
    Rooftop: false,
    Jacuzzi: false,
    Garage: true,
    Garden: false,
    Lobby: false,
    SaunaRoom: false,
    Windown: false,
    NiceView: false,
    Gym: false,
    BBQ: true,
  };
  const mapUtilities = Utilities.map((value, index) => (
    <li className="col-4" key={v4()} style={{ listStyleType: "none" }}>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id={value.idX}
          name={value.nameX}
          value="something"
          checked={isUtilities[value.nameX]}
          disabled={!isUtilities[value.nameX]}
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
            <h2 className="title-uti">Utilities:</h2>
          </div>
          <div className="row">{mapUtilities}</div>
        </div>
      </section>
    </>
  );
}
