import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
import PopUp from "../PopUp";
import CurrencyFormat from "react-currency-format";
import UseMod, { AlertTip } from "../UseMod";
const cx = classNames.bind(styles);

export default function PostThumnail({ ...props }) {
  const data = props.props;

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
  const PhotoPath = data.PhotoPath;
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
    setIsArlert(true);
    console.log("copyM");
  }

  return (
    <>
      {isArlet ? <AlertTip props={{ setA: setIsArlert }} /> : ""}
      {isOpenModal && (
        <PopUp
          props={{
            openM: setIsOpenModal,
            scrollX: setIsScroll,
            copyM: handleCopy,
            data: data,
          }}
        />
      )}
      <div className={cx("post")}>
        <div className={cx("post-head")}>
          <div className={cx("avatar")}>
            <div className={cx("photo")}></div>
            <div className={cx("title")}>{Code} - Ho Chi Minh City</div>
            <div className={cx("time")}>• District 2 • 22/02/2022</div>
            <div className={cx("close")}>
              <span className="material-icons">favorite_border</span> 1k2
            </div>
          </div>
        </div>
        <div className={cx("post-mid")}>xxxx</div>
        <div className={cx("post-bottom")}>
          <div className={cx("box1")}>
            <div className={cx("title")}>
              {Code} - {Style}
            </div>
            <div className={cx("dot")}>&nbsp;&nbsp;–&nbsp;&nbsp;</div>
            <div className={cx("price")}>
              <CurrencyFormat
                value={Vnd}
                displayType={"text"}
                thousandSeparator={true}
                suffix={" VND"}
              />
            </div>
          </div>
          <div className={cx("cap")}>
            <b>2</b> Bed • <b>2</b> Bath • <b>32</b> Sqm
          </div>
          <div className={cx("cap")}>
            Deposit: <b>1</b> month(s) • Available: <b>2</b> days left
          </div>
          <div className={cx("linkShare")}>
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
      </div>
    </>
  );
}
