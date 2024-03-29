import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
import PopUp from "../PopUp";
import CurrencyFormat from "react-currency-format";
import UseMod, { AlertTip } from "../UseMod";
import Global from "../../../../components_global/Global";
import GlobalClass from "../../../../components_global/GlobalClass";

const cx = classNames.bind(styles);

let GLOBAL_ALERT_CONTENT = "Link share has copied";
export default function PostThumnail({ ...props }) {
  const data = props.props.data;

  const Address = data.Address;
  const Area = data.Area;
  const Bathroom = data.Bathroom;
  const Bedroom = data.Bedroom;
  const Category1 = data.Category1;
  const Category2 = data.Category2;
  const Category3 = data.Category3;
  const City = data.City;
  const Code = data.Code;
  const Com = data.Com;
  const DepositFee = data.DepositFee;
  const Dist = data.Dist;
  const Duration = data.Duration;
  const ElectricFee = data.ElectricFee;
  const FacebookGroup = data.FacebookGroup;
  const Furnitures = data.Furnitures;
  const GoogleMap = data.GoogleMap;
  const HostCode = data.HostCode;
  const LatestUpdate = data.LatestUpdate;
  const NetworkFee = data.NetworkFee;
  const ParkingFee = data.ParkingFee;
  const Phone1 = data.Phone1;
  const Phone1Name = data.Phone1Name;
  const Phone2 = data.Phone2;
  const Phone2Name = data.Phone2Name;
  const Phone3 = data.Phone3;
  const Phone3Name = data.Phone3Name;
  let PhotoPath = data.PhotoPath;
  function PhotoPathFunc(path) {
    let json = JSON.parse(path);
    let host = Global("host");
    let thumnail = host + json.photo.thumnail;

    let listNew = [];
    let photoList = JSON.parse(path).photo.photolist;
    for (let list of photoList) {
      //console.log(list);
      listNew.push(host + list);
    }

    let result = {
      thumnail: thumnail,
      photoList: listNew,
    };

    return result;
  }
  PhotoPath = PhotoPathFunc(PhotoPath);

  //let link1 = new GlobalClass().hostLink();

  //console.log(PhotoPath);
  const PhotoThumbnail = data.PhotoThumbnail;
  const PostBySaler = data.PostBySaler;
  const PostContent = data.PostContent;
  const PostTitleEn = data.PostTitleEn;
  const PostTitleVi = data.PostTitleVi;
  const ServiceFee = data.ServiceFee;
  const Status = data.Status;
  const Street = data.Street;
  const Style = data.Style;
  const TVCabFee = data.TVCabFee;
  const Usd = data.Usd;
  const Utilities = data.Utilities;
  const UtilitiesLink = data.UtilitiesLink;
  const VideoLinkYouTube = data.VideoLinkYouTube;
  const Vintage = data.Vintage;
  const Vnd = data.Vnd;
  const Ward = data.Ward;
  const WaterFee = data.WaterFee;
  const ZaloGroup = data.ZaloGroup;

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [isArlet, setIsArlert] = useState(false);
  const [iconChange, setIconChange] = useState("favorite_border");
  const [favoriteDis, setFavoriteDis] = useState("favorite");

  function handleShowModal() {
    setIsOpenModal(true);
  }
  function setSroll() {
    isScroll
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  }
  setSroll();

  function handleCopy() {
    GLOBAL_ALERT_CONTENT = "Links share has copied";
    setIsArlert(true);
  }

  function handleAddFavorite() {
    const item = localStorage.getItem("favorite");
    let item2 = [];
    if (item) {
      item2 = JSON.parse(item);
    }
    /* kiem tra da co item chua */
    const index = item2.indexOf(Code);
    if (index > -1) {
      console.log("da co roi");
      GLOBAL_ALERT_CONTENT = "This apartment has added to Favorite";
      console.log(GLOBAL_ALERT_CONTENT);
      setIsArlert(true);
    } else {
      const item3 = [...item2, Code];
      localStorage.setItem("favorite", JSON.stringify(item3));
      //console.log("add item");
      handleChangeIconFavorite();
    }
  }
  function handleChangeIconFavorite() {
    //console.log("Post Thumnail:", props.props.isRefresh);
    const item = localStorage.getItem("favorite");
    let index;
    if (item) {
      const item2 = JSON.parse(item);
      index = item.indexOf(Code);
    }
    if (index > -1) {
      //return "done";
      setIconChange("done");
      setFavoriteDis("favorite-dis");
    } else {
      setIconChange("favorite_border");
      setFavoriteDis("favorite");
      //return "favorite_border";
    }
  }
  useEffect(() => {
    handleChangeIconFavorite();
  }, []);

  const dateAvailable = () => {
    return (
      <>
        <div className={cx("date-wrapper")}>
          <div className={cx("headerd")}>
            <h4>
              <b>Setting</b>
            </h4>
            <div className={cx("iconClose")}>
              <span className="material-icons">clear</span>
            </div>
          </div>
          <div className={cx("contentd")}>
            <div className="container">
              <div className="row">
                <div className="col-6">Choose expired date:</div>
                <div className="col-6">
                  <input
                    type="date"
                    id="start"
                    name="trip-start"
                    min="2022-11-22"
                    max="2030-12-31"
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col-6"></div>
                <div className="col-6">
                  <button className="btn btn-outline-danger">Accept</button>
                </div>
              </div>
            </div>
          </div>

          <p></p>
        </div>
      </>
    );
  };

  const dateCal = () => {
    const d = new GlobalClass();
    const re = d.dateCal(Duration);
    //console.log(re);
    return re.days;
  };

  const display = {
    display: dateCal() < 0 ? "block" : "block",
  };

  const copyright = () => {
    return (
      <>
        <div className={cx("postBottom2")}>
          <p>
            (c) <b>vngate.top</b>{" "}
            <span>
              {" "}
              - Details search ID: <b>{Code}</b>
            </span>
          </p>
        </div>
      </>
    );
  };
  return (
    <>
      {/* {dateAvailable()} */}
      {isArlet ? (
        <AlertTip
          props={{
            content: GLOBAL_ALERT_CONTENT,
            setIsArlert: setIsArlert,
            isArlet: isArlet,
          }}
        />
      ) : (
        ""
      )}
      {isOpenModal && (
        <PopUp
          props={{
            openM: setIsOpenModal,
            scrollX: setIsScroll,
            copyM: handleCopy,
            data: data,
            photo: PhotoPath,
            copyright: <copyright />,
          }}
        />
      )}
      <div className={cx("post", "postob")} style={{ ...display }}>
        <div className={cx("post-head")}>
          <div className={cx("avatar")}>
            <div className={cx("photo")}></div>
            <div className={cx("title")}>
              <span>{Code}</span> - <span className={cx("city")}>{City}</span>
            </div>
            <div className={cx("time")}>• {LatestUpdate}</div>
            <div className={cx(favoriteDis)} onClick={handleAddFavorite}>
              <span className={cx("done", "material-icons")}>{iconChange}</span>
            </div>
            <div className={cx("upload")}>
              <span className={cx("done", "material-icons")}>settings</span>
            </div>
          </div>
        </div>
        <div
          className={cx("post-mid")}
          style={{ backgroundImage: `url(${PhotoPath.thumnail})` }}
        >
          <div className={cx("status")}>{dateCal() > 0 ? "Full" : "Empty"}</div>
        </div>
        <div className={cx("post-bottom")}>
          <div className={cx("headerb")}>
            <div className={cx("titlep")}>
              {Code} - {Style} (
              <span style={{ color: "var(--bs-gray)" }}>{HostCode}</span>)
            </div>
            <div className={cx("priceb")}>
              <CurrencyFormat
                value={Vnd}
                displayType={"text"}
                thousandSeparator={true}
                suffix={" VND"}
              />
            </div>
          </div>
          <div className={cx("cap")}>
            <p>
              {Ward}, {Dist}, {City}
            </p>
            <p>
              <b>{Bedroom}</b> Bedroom(s) • <b>{Bathroom}</b> Bathroom(s) •{" "}
              <b>{Area}</b> Sqm
            </p>
            <p>
              Available in:{" "}
              {dateCal() > 0 ? Duration + ` (${dateCal()} days left)` : "Now"}
            </p>
          </div>
          {/* <div className={cx("cap")}>
            • Available: <b>2</b> days left
          </div> */}
          <div className={cx("linkShare")} style={{ display: "none" }}>
            <div className={cx("link")}>http://rentvn.top/product/D2N0005</div>
            <div className={cx("copy")} onClick={handleCopy}>
              <span className="material-icons" style={{ fontSize: "12px" }}>
                share
              </span>
              Share
            </div>
          </div>
          <div className={cx("seeMore")} onClick={handleShowModal}>
            See More
          </div>
        </div>
        {copyright()}
      </div>
    </>
  );
}
