import React from "react";
import classNames from "classnames/bind";
import styles from "./ProductItem.module.scss";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";

const cx = classNames.bind(styles);
const style2 = {};

export default function ProductItem({ val2 }) {
  console.log(val2);
  const product = { ...val2 };
  /* const product = {
    title: "Studio Has Unique Design Super Nice In Le Loi",
    sale: "Available: 22/09/2023",
    dateAvailable: "Available: 22/09/2023",
    dateUpdate: "Update: 22/09/2023",
    price: "Price: 12.000.000VND/Month",
    rated: " 23.5k View - 69% Like - 31%  Dislike",
    location: "Quan BinhThanh, TP.HCM",
    Bedroom: 1,
    Bathroom: 1,
    Area: 20,
    view: 342334,
    like: 20332,
    dislike: 3223,
  }; */
  const navigate = useNavigate();
  function handleClick() {
    console.log(1);

    navigate("/product/" + product.title);
  }
  return (
    <>
      <div className="col-md-4" style={{ padding: "5px" }}>
        <div className={cx("product")} onClick={handleClick}>
          <div className={cx("photo")}>
            <div className={cx("daysAvailable")}>
              <span className="material-icons">info</span>
              <span className={cx("text")}>123 days left</span>
            </div>
            <div className={cx("tooltip2")}>
              Number of days left the Apament will available!
            </div>
          </div>
          <div className={cx("info")}>
            <div className={cx("title")}>{product.PostTitleEn}</div>
            <div className={cx("roomSpec")}>
              <span className={cx("roomSpec-child")}>
                Bedroom:{product.Bedroom}
              </span>{" "}
              -{" "}
              <span className={cx("roomSpec-child")}>
                Bathroom:{product.Bathroom}
              </span>{" "}
              -{" "}
              <span className={cx("roomSpec-child")}>
                Area:{product.Area} Sqm
              </span>
            </div>
            <div className={cx("price")}>{product.price}</div>
            <div className={cx("rated")}>
              <span className={cx("viewNumber")}>23.5k</span>
              <span className={cx("viewChar")}>View</span>
              <span className={cx("viewNumber")}>70%</span>
              <span className={cx("viewChar")}>Like</span>
              <span className={cx("viewNumber")}>30%</span>
              <span className={cx("viewChar")}>Dislike</span>
            </div>
            <div className={cx("location")}>Location: {product.location}</div>
            <div className={cx("dateAvailable")}>
              {product.dateAvailable} - {product.dateUpdate}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
