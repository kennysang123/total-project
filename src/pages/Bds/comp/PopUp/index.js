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

  const data2 = {
    code: "L9999",
    title: "Đất nền Dầu Tiếng, Bình Dương",
    price: "0,530 tỷ VND",
    phone: "0907852416",
    city: "Tp.Hồ Chí Minh",
    ward: "Quận 7",
    dayUpdate: "22/12/2022",
    content: [
      "Nhà cấp 4 (đất) trong ngõ:",
      "- Diện tích: 36 m² + nở hậu.",
      "- Gần Văn Miếu Quốc Tử Giám, \n Lăng Bác, và Cửa Nam...",
      "- Rất nhiều tiện ích xung quanh (chợ Ngô Sĩ Liên, siêu thị... ), (trường cấp 1 - 2 Lý Thường Kiệt, trường mẫu giáo Ngô Sĩ Liên.... ), gần bệnh viện Xanh pôn...",
      "- Nhà trong khu an ninh tốt, sạch sẽ, hàng xóm văn minh chủ yếu là cán bộ. Khu này có cổng riêng ra vào.",
      "- Từ nhà ra phố Ngô Tất Tố khoảng 40m. Có thể đỗ xe ô tô tại phố Ngô Tất Tố. Ngõ chính rộng khoảng 5 - 6 m, thẳng và thông thoáng. Đường trước nhà rộng khoảng 2 m và dài 10 m là ra ngõ chính.",
      "- Sổ đỏ chính chủ.",
      "- Giá 3. XXX.",
      "- Ai có nhu cầu vui lòng liên hệ.",
    ],
    photoList: [
      "http://vngate.top/Rent/D2N0005/Photo/D2N0005_1.jpg",
      "http://vngate.top/Rent/D2N0005/Photo/D2N0005_2.jpg",
      "http://vngate.top/Rent/D2N0005/Photo/D2N0005_3.jpg",
      "http://vngate.top/Rent/D2N0005/Photo/D2N0005_4.jpg",
      "http://vngate.top/Rent/D2N0005/Photo/D2N0005_5.jpg",
      "http://vngate.top/Rent/D2N0005/Photo/D2N0005_6.jpg",
    ],
  };

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
  const Title = () => (
    <>
      <div className={cx("Title")}>
        <div className={cx("container")}>
          <h5 className={cx("title2")}>
            {data2.code} - {data2.title}
          </h5>
          <div className={cx("location2")}>
            <b>Địa điểm:</b> {data2.ward} - {data2.city}
          </div>
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

  const BdsBasic = () => {
    return (
      <>
        <div className={cx("BdsBasic")}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <b>Diện tích:</b> 4x15m (300m2)
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const BdsGia = () => {
    const avatarUrl =
      "https://s240-ava-talk.zadn.vn/9/f/3/1/136/240/11737f99cc0b4e06e1271d461b525bca.jpg";
    const Nd = () => {
      return (
        <>
          <div className={cx("col-4")}>
            <div>
              <img alt="Avatar" className={cx("avatar2")} src={avatarUrl}></img>
            </div>
          </div>
          <div className={cx("col-8")}>
            <div className={cx("price2")}>
              <b>Giá:</b> {data2.price}
            </div>
            <div className={cx("dayUpdate2")}>
              <b>Ngày cập nhật:</b> {data2.dayUpdate}
            </div>
            <div className={cx("contact2")}>
              <b>Liên hệ:</b> {data2.phone} (Nguyên)
            </div>
            <div className={cx("contact2")}>
              <span className={cx("call2")}>
                <a href={`tel:${data2.phone}`}>Gọi</a> |{" "}
                <a
                  href={`https://zalo.me/${data2.phone}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Zalo
                </a>{" "}
                | <a href={`tel:${data2.phone}`}> Telegram</a>
              </span>
            </div>
            <div className={cx("Bio")}>
              <b>Bio:</b>{" "}
              <span className={cx("BioContent")}>
                "Reputation is responsibility - Founder vngate.top"
              </span>
            </div>
          </div>
        </>
      );
    };
    return (
      <>
        <div className={cx("component")}>
          <div className="container">
            <div className="row">{Nd()}</div>
          </div>
        </div>
      </>
    );
  };
  const BdsContent = () => {
    const map1 = data2.content.map((value, index) => <p>{value}</p>);
    const map2 = data2.photoList.map((v, i) => (
      <img alt="Avatar" className={cx("photo2")} src={v}></img>
    ));
    return (
      <>
        <div className={cx("BdsContent")}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h4 className={cx("title2")}>Chi tiết</h4>
                {map1}
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h4 className={cx("title2")}>Hình ảnh</h4>
                {map2}
              </div>
            </div>
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
            Truy cập <span style={{ fontWeight: "bold" }}>bds.vngate.top</span>{" "}
            và tìm với ID:{" "}
            <span style={{ fontWeight: "bold" }}>{data2.code}</span>
          </p>
        </div>
        <div className={cx("windows")}>
          {Title()}
          {mainPhoto()}
          {BdsGia()}
          {BdsContent()}
        </div>
        <div className={cx("footer")} onClick={handleClose}></div>
        <div className={cx("close")} onClick={handleClose}>
          <span className="material-icons">clear</span>
        </div>
      </div>
    </>
  );
}
