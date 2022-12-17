import React from "react";
import { v4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Hood } from "../../../../Components_Shopee/FontAwesomeMod";
import CurrencyFormat from "react-currency-format";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
const cx = classNames.bind(styles);

export default function PopUp({ ...props }) {
  const data = props.props;
  //console.log("popup:", data);
  //console.log(props.props);
  props.props.scrollX(true);
  const handleClose = () => {
    props.props.openM(false);
    props.props.scrollX(false);
  };
  function setColByWidth() {
    const widthx = window.screen.width;
    const heightx = window.screen.height;
    let widthSet = "430px";
    if (widthx < 430) {
      widthSet = "100%";
    }
    return widthSet;
  }
  const wid = setColByWidth();
  const mainPhoto = () => (
    <>
      <div className={cx("mainphoto")}>
        <div className={cx("mainphoto-wrapper")}>
          <img src={props.props.photo.thumnail}></img>
        </div>
      </div>
    </>
  );
  const title = () => (
    <>
      <div className={cx("wrapperP")}>
        <div className={cx("title-content")}>
          <h3>
            {data.data.Code} - {data.data.Style}
          </h3>
        </div>
      </div>
    </>
  );
  const details = () => (
    <>
      <div className={cx("wrapperP")}>
        <div className={cx("title-second")}>
          <h2>Details</h2>
        </div>
        <div className={cx("details-content")}>
          <div className={cx("details-content-child")}>
            <span className="material-icons">bed</span>Bed: {data.data.Bedroom}
          </div>
          <div className={cx("details-content-child")}>
            <span className="material-icons">shower</span>Bath:{" "}
            {data.data.Bathroom}
          </div>
          <div className={cx("details-content-child")}>
            <span className="material-icons">crop_free</span> {data.data.Area}{" "}
            Sqm
          </div>
        </div>
      </div>
    </>
  );
  const Share = () => (
    <>
      <div className={cx("wrapperP")}>
        <div className={cx("title-second")}>
          <h2>Share</h2>
        </div>
        <div className={cx("share-content")}>
          <div className={cx("linkShare")}>
            <div className={cx("link")}>
              http://
              <span style={{ color: "black", fontWeight: "bold" }}>
                vngate.top
              </span>
              /?id=D2N0005
            </div>
            <div className={cx("copy")} onClick={props.props.copyM}>
              <span className="material-icons" style={{ fontSize: "12px" }}>
                share
              </span>
              Share
            </div>
          </div>
        </div>
      </div>
    </>
  );
  const Note = () => {
    const content = `
    
    ✅ Cửa sổ, ban công dài rộng thông thoáng.
    ✅ Full nội thất: giường, tủ, máy lạnh, tủ lạnh, kệ bếp, máy giặt, bàn ghế làm việc, chăn dra.
    🌈 Nhà mới, nội thất mới.`;
    return (
      <>
        <div className={cx("wrapperP")}>
          <div className={cx("note")}>
            <div className={cx("title")}>Note</div>
            <div className={cx("content")}>
              <p>Large windows and spacious balcony.</p>
              <p>New house, new furniture.</p>
            </div>
          </div>
        </div>
      </>
    );
  };
  const Price = () => (
    <>
      <div className={cx("wrapperP")}>
        <div className={cx("price")}>
          <div className={cx("value")}>
            <span className={cx("label")}>Price</span>{" "}
            <CurrencyFormat
              value={data.data.Vnd}
              displayType={"text"}
              thousandSeparator={true}
              suffix={" VND"}
            />
          </div>
        </div>
      </div>
    </>
  );
  const Utilities = () => {
    const TienIch = [
      {
        labelX: "Allow Pets",
        idX: "AllowPets",
        nameX: "AllowPets",
        checkX: "AllowPets",
        icon: "pets",
      },
      {
        labelX: "Balcony",
        idX: "Balcony",
        nameX: "Balcony",
        checkX: "Balcony",
        icon: "balcony",
      },
      {
        labelX: "Bathtub",
        idX: "Bathtub",
        nameX: "Bathtub",
        checkX: "Bathtub",
        icon: "bathtub",
      },
      {
        labelX: "BBQ",
        idX: "BBQ",
        nameX: "BBQ",
        checkX: "BBQ",
        icon: "outdoor_grill",
      },

      {
        labelX: "Elevator",
        idX: "Elevator",
        nameX: "Elevator",
        checkX: "Elevator",
        icon: "elevator",
      },
      {
        labelX: "Garage",
        idX: "Garage",
        nameX: "Garage",
        icon: "garage",
        checkX: "Garage",
      },
      {
        labelX: "Garden",
        idX: "Garden",
        nameX: "Garden",
        icon: "yard",
        checkX: "Garden",
      },
      {
        labelX: "Gym",
        idX: "Gym",
        nameX: "Gym",
        icon: "fitness_center",
        checkX: "Gym",
      },
      {
        labelX: "Internet-Wifi",
        idX: "InternetWifi",
        nameX: "InternetWifi",
        icon: "wifi",
        checkX: "InternetWifi",
      },
      {
        labelX: "Jacuzzi",
        idX: "Jacuzzi",
        nameX: "Jacuzzi",
        icon: "hot_tub",
        checkX: "Jacuzzi",
      },
      {
        labelX: "Lobby",
        idX: "Lobby",
        nameX: "Lobby",
        checkX: "Lobby",
        icon: "weekend",
      },
      {
        labelX: "Nice View",
        idX: "NiceView",
        nameX: "NiceView",
        checkX: "NiceView",
        icon: "grass",
      },
      {
        labelX: "Parking",
        idX: "Parking",
        nameX: "Parking",
        checkX: "Parking",
        icon: "local_parking",
      },
      {
        labelX: "Rooftop",
        idX: "Rooftop",
        nameX: "Rooftop",
        checkX: "Rooftop",
        icon: "solar_power",
      },
      {
        labelX: "Sauna Room",
        idX: "SaunaRoom",
        nameX: "SaunaRoom",
        checkX: "SaunaRoom",
        icon: "hot_tub",
      },
      {
        labelX: "Security Camera",
        idX: "SecurityCamera",
        nameX: "SecurityCamera",
        checkX: "SecurityCamera",
        icon: "video_camera_front",
      },
      {
        labelX: "Swimming Pool",
        idX: "SwimmingPool",
        nameX: "SwimmingPool",
        checkX: "SwimmingPool",
        icon: "pool",
      },
      {
        labelX: "Washing Machine",
        idX: "WashingMachine",
        nameX: "WashingMachine",
        checkX: "WashingMachine",
        icon: "local_laundry_service",
      },
      {
        labelX: "Windown",
        idX: "Windown",
        nameX: "Windown",
        checkX: "Windown",
        icon: "curtains",
      },
    ];
    const Utilities = TienIch;
    let is = props.props.data.Utilities;
    is = JSON.parse(is);
    //console.log("is", is);
    const isUtilities = is;
    const mapUtilities = Utilities.map((value, index) => (
      <li className="col-4sss" key={v4()} style={{ listStyleType: "none" }}>
        <span
          className="material-icons"
          style={{ color: !isUtilities[value.nameX] ? "#b5b5b5" : "" }}
        >
          {value.icon}
        </span>
        <span style={{ color: !isUtilities[value.nameX] ? "#b5b5b5" : "" }}>
          {value.labelX}
        </span>
        {/* <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id={value.idX}
            name={value.nameX}
            value="something"
            defaultChecked={isUtilities[value.nameX]}
            disabled={!isUtilities[value.nameX]}
          ></input>
          <label className="form-check-label" htmlFor={value.idX}>
            {value.labelX}
          </label>
        </div> */}
      </li>
    ));
    return (
      <>
        <div className={cx("wrapperP")}>
          <div className={cx("title-second")}>
            <h2>Utilities</h2>
          </div>
          <div className={cx("uti-content")}>{mapUtilities}</div>
        </div>
      </>
    );
  };
  const UtilitiesAround = () => {
    const UtilitiesAround = [
      {
        labelX: "ATM",
        idX: "ATM",
        nameX: "ATM",
        checkX: "ATM",
        icon: "local_atm",
      },
      {
        labelX: "Cannal",
        idX: "Cannal",
        nameX: "Cannal",
        checkX: "Cannal",
        icon: "water",
      },
      {
        labelX: "Hospital",
        idX: "Hospital",
        nameX: "Hospital",
        checkX: "Hospital",
        icon: "local_hospital",
      },
      {
        labelX: "Ministop",
        idX: "Ministop",
        nameX: "Ministop",
        checkX: "Ministop",
        icon: "storefront",
      },
      {
        labelX: "Park",
        idX: "Park",
        nameX: "Park",
        checkX: "Park",
        icon: "park",
      },
      {
        labelX: "Sport Center",
        idX: "SportCenter",
        nameX: "SportCenter",
        checkX: "SportCenter",
        icon: "sports_football",
      },
      {
        labelX: "Super Market",
        idX: "SuperMarket",
        nameX: "SuperMarket",
        checkX: "SuperMarket",
        icon: "local_grocery_store",
      },
    ];
    let is = props.props.data.UtilitiesLink;
    is = JSON.parse(is);
    console.log(123, is);
    const isUtilitiesAround = is;
    const mapUtilitiesAround = UtilitiesAround.map((value, index) => (
      <li className="col-4xx" key={v4()} style={{ listStyleType: "none" }}>
        <span
          className="material-icons"
          style={{ color: !isUtilitiesAround[value.nameX] ? "#b5b5b5" : "" }}
        >
          {value.icon}
        </span>
        <span
          style={{ color: !isUtilitiesAround[value.nameX] ? "#b5b5b5" : "" }}
        >
          {value.labelX}
        </span>
        {/* <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id={value.idX}
            name={value.nameX}
            value="something"
            defaultChecked={isUtilitiesAround[value.nameX]}
            disabled={!isUtilitiesAround[value.nameX]}
          ></input>
          <label className="form-check-label" htmlFor={value.idX}>
            {value.labelX}
          </label>
        </div> */}
      </li>
    ));
    return (
      <>
        <div className={cx("wrapperP")}>
          <div className={cx("title-second")}>
            <h2>Utilities Around</h2>
          </div>
          <div className={cx("uti-content")}>{mapUtilitiesAround}</div>
        </div>
      </>
    );
  };
  const Furnitures = () => {
    const Furnitures = [
      {
        labelX: "Air-conditioner",
        idX: "AirConditioner",
        nameX: "AirConditioner",
        checkX: "AirConditioner",
        icon: "ac_unit",
      },
      {
        labelX: "Bed",
        idX: "Bed",
        nameX: "Bed",
        checkX: "Bed",
        icon: "bed",
      },
      {
        labelX: "Cooker Hood",
        idX: "CookerHood",
        nameX: "CookerHood",
        checkX: "CookerHood",
        icon: "air",
      },

      {
        labelX: "Dining Subtances",
        idX: "DiningSubtances",
        nameX: "DiningSubtances",
        checkX: "DiningSubtances",
        icon: "flatware",
      },
      {
        labelX: "Dining Table",
        idX: "DiningTable",
        nameX: "DiningTable",
        checkX: "DiningTable",
        icon: "deck",
      },
      {
        labelX: "Dressing Table",
        idX: "DressingTable",
        nameX: "DressingTable",
        checkX: "DressingTable",
        icon: "face_2",
      },
      {
        labelX: "Dryer",
        idX: "Dryer",
        nameX: "Dryer",
        checkX: "Dryer",
        icon: "door_back",
      },
      {
        labelX: "Fridge",
        idX: "Fridge",
        nameX: "Fridge",
        checkX: "Fridge",
        icon: "kitchen",
      },
      {
        labelX: "Hot Water Heater",
        idX: "HotWaterHeater",
        nameX: "HotWaterHeater",
        checkX: "HotWaterHeater",
        icon: "ssid_chart",
      },
      {
        labelX: "Ironing Board",
        idX: "IroningBoard",
        nameX: "IroningBoard",
        checkX: "IroningBoard",
        icon: "iron",
      },
      {
        labelX: "Mattress",
        idX: "Mattress",
        nameX: "Mattress",
        checkX: "Mattress",
        icon: "bed",
      },
      {
        labelX: "Oven",
        idX: "Oven",
        nameX: "Oven",
        checkX: "Oven",
        icon: "microwave",
      },
      {
        labelX: "Shower",
        idX: "Shower",
        nameX: "Shower",
        checkX: "Shower",
        icon: "shower",
      },
      {
        labelX: "Sofa",
        idX: "Sofa",
        nameX: "Sofa",
        checkX: "Sofa",
        icon: "chair",
      },
      {
        labelX: "Stove",
        idX: "Stove",
        nameX: "Stove",
        checkX: "Stove",
        icon: "fireplace",
      },
      {
        labelX: "TV",
        idX: "TV",
        nameX: "TV",
        checkX: "TV",
        icon: "theater_comedy",
      },
      {
        labelX: "Wardrobe",
        idX: "Wardrobe",
        nameX: "Wardrobe",
        checkX: "Wardrobe",
        icon: "checkroom",
      },
      {
        labelX: "Working Desk",
        idX: "WorkingDesk",
        nameX: "WorkingDesk",
        checkX: "WorkingDesk",
        icon: "desk",
      },
    ];

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
      <li className={"col222x"} key={v4()} style={{ listStyleType: "none" }}>
        <span
          className="material-icons"
          style={{ color: !isFurnitures[value.nameX] ? "#b5b5b5" : "" }}
        >
          {value.icon}
        </span>
        <span style={{ color: !isFurnitures[value.nameX] ? "#b5b5b5" : "" }}>
          {value.labelX}
        </span>

        {/* <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id={value.idX}
            name={value.nameX}
            value="something"
            defaultChecked={isFurnitures[value.nameX]}
            disabled={!isFurnitures[value.nameX]}
          ></input>
          <label className="form-check-label" htmlFor={value.idX}>
            {value.labelX}
          </label>
        </div> */}
      </li>
    ));

    return (
      <>
        <div className={cx("wrapperP")}>
          <div className={cx("title-second")}>
            <h2>Furnitures</h2>
          </div>
          <div className={cx("uti-content")}>{mapFurnitures}</div>
        </div>
      </>
    );
  };
  const PhotoList = () => {
    const photoList = {
      link: props.props.photo.photoList,
    };
    //console.log("photolist:", photoList);
    const mapx = photoList.link.map((value, index) => (
      <li className={"col222"} key={v4()} style={{ listStyleType: "none" }}>
        <img src={value}></img>
      </li>
    ));

    return (
      <>
        <div className={cx("wrapperP")}>
          <div className={cx("title-second")}>
            <h2>Other Photos</h2>
          </div>
          <div className={cx("photo-content")}>{mapx}</div>
        </div>
      </>
    );
  };
  const GoogleMap = () => {
    return (
      <>
        <div className={cx("wrapperP")}>
          <div className={cx("title-second")}>
            <h2>Private Infomation</h2>
            <p>Phone: {props.props.data.Phone1}</p>
            <p>Name: {props.props.data.Phone1Name}</p>
            <p>Google Map: {JSON.stringify(props.props.data.GoogleMap)}</p>
          </div>
          <div className={cx("map-content")}>
            <p>Need private key</p>
            <p className={cx("link")}>https://g.page/La-Maison-Apt?share</p>
            <span className={cx("btnx")}>
              Open in Google Map{" "}
              <span className={cx("icon")}>
                <span className="material-icons">open_in_new</span>
              </span>
            </span>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className={cx("wrapper")} style={{ width: wid }}>
        <div className={cx("header")} onClick={handleClose}>
          <p>
            Go to Web App <span style={{ fontWeight: "bold" }}>vngate.top</span>{" "}
            and search ID:{" "}
            <span style={{ fontWeight: "bold" }}>{props.props.data.Code}</span>
          </p>
        </div>
        <div className={cx("windows")}>
          {title()}
          {mainPhoto()}

          {Price()}
          {details()}
          {Utilities()}
          {UtilitiesAround()}
          {Furnitures()}
          {PhotoList()}
          {GoogleMap()}
        </div>
        <div className={cx("footer")} onClick={handleClose}></div>
        <div className={cx("close")} onClick={handleClose}>
          <span className="material-icons">clear</span>
        </div>
      </div>
    </>
  );
}
