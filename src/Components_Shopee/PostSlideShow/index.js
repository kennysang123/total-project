import React, { useEffect, useState, useRef } from "react";
import { v4 } from "uuid";
import classNames from "classnames/bind";
import styles from "./S.module.scss";
const cx = classNames.bind(styles);

export default function PostSlideShow() {
  const [swipe, setSwipe] = useState("");
  const [slideWidth, setSlideWidth] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [barIndex, setBarIndex] = useState([
    "bar-active",
    "bar-inactive",
    "bar-inactive",
    "bar-inactive",
  ]);
  const ref = useRef(null);

  //const dd = [1, 2, 3, 4, 5]; "bar-active"

  const photoList = [
    "https://docs.google.com/uc?export=download&id=19YeYUQNGvxXzUoMORis_rux6fnfRd4cY",
    "https://docs.google.com/uc?export=download&id=1y8S8c_lss9EKGchYNZF1US3T4E3cOpm4",
    "https://docs.google.com/uc?export=download&id=1BAClgAE-Yn0ky9s2fpag8ULI_8XzX4qR",
    "https://docs.google.com/uc?export=download&id=1f_KAixEdMOJt9uet-QYz9aInkkagHUYP",
    "https://docs.google.com/uc?export=download&id=1vSFSQXTDX_EXNnm9eeS-NbBkAnPmP2DP",
    "https://docs.google.com/uc?export=download&id=1jxIQY7iyg1grWi_K8xNcSQnWaudFY5mG",
    "https://docs.google.com/uc?export=download&id=1yh6TY7GrcXA19ipMvSTjwzhK3hiARM2x",
    "https://docs.google.com/uc?export=download&id=1RloqIuGwPxogP3xK5g94NsiEy9akw82z",
    "https://docs.google.com/uc?export=download&id=1ULbI1L4_v7G8DY32o_JQUoy83-3d8n1L",
    "https://docs.google.com/uc?export=download&id=1VFsz_yp2xmqdrPB5eJ0anpfOc-SKciCd",
  ];
  const mapPhotoList = photoList.map((value, index) => (
    <img
      className={cx("photo")}
      src={photoList[index]}
      alt="Girl in a jacket"
    ></img>
  ));

  /* <a href="https://docs.google.com/uc?export=download&id=1y8S8c_lss9EKGchYNZF1US3T4E3cOpm4">D2N0005_1.jpg</a>
<a href="https://docs.google.com/uc?export=download&id=1BAClgAE-Yn0ky9s2fpag8ULI_8XzX4qR">D2N0005_2.jpg</a>
<a href="https://docs.google.com/uc?export=download&id=1VFsz_yp2xmqdrPB5eJ0anpfOc-SKciCd">D2N0005_9.jpg</a>
<a href="https://docs.google.com/uc?export=download&id=1ULbI1L4_v7G8DY32o_JQUoy83-3d8n1L">D2N0005_8.jpg</a>
<a href="https://docs.google.com/uc?export=download&id=1RloqIuGwPxogP3xK5g94NsiEy9akw82z">D2N0005_7.jpg</a>
<a href="https://docs.google.com/uc?export=download&id=1yh6TY7GrcXA19ipMvSTjwzhK3hiARM2x">D2N0005_6.jpg</a>
<a href="https://docs.google.com/uc?export=download&id=1f_KAixEdMOJt9uet-QYz9aInkkagHUYP">D2N0005_3.jpg</a>
<a href="https://docs.google.com/uc?export=download&id=1jxIQY7iyg1grWi_K8xNcSQnWaudFY5mG">D2N0005_5.jpg</a>
<a href="https://docs.google.com/uc?export=download&id=19YeYUQNGvxXzUoMORis_rux6fnfRd4cY">D2N0005_Thumnail.jpg</a>
<a href="https://docs.google.com/uc?export=download&id=1vSFSQXTDX_EXNnm9eeS-NbBkAnPmP2DP">D2N0005_4.jpg</a> */

  useEffect(() => {
    let touchstartX = 0;
    let touchendX = 0;
    function checkDirection() {
      const abs = Math.abs(touchstartX - touchendX);
      console.log("s-e:", abs);
      if (abs > 40) {
        if (touchendX < touchstartX) {
          console.log("left");
          setSwipe("left");
        }
        if (touchendX > touchstartX) {
          console.log("right");
          setSwipe("right");
        }
      }
    }
    document
      .getElementById("id-slide-photo")
      .addEventListener("touchstart", (e) => {
        touchstartX = e.changedTouches[0].screenX;
      });
    document
      .getElementById("id-slide-photo")
      .addEventListener("touchend", (e) => {
        touchendX = e.changedTouches[0].screenX;
        checkDirection();
      });

    const widthRef = ref.current.offsetWidth - 20;
    setSlideWidth(widthRef);
    console.log("e1:", slideWidth);
  }, []);

  useEffect(() => {
    console.log(slideWidth);
  }, [slideWidth]);
  function handleNext() {
    if (photoIndex < photoList.length - 1) {
      setPhotoIndex(photoIndex + 1);
    }
  }
  function handlePrev() {
    if (photoIndex > 0) {
      setPhotoIndex(photoIndex - 1);
    }
  }
  useEffect(() => {
    let data = [...barIndex];
    data[photoIndex - 1] = "bar-inactive";
    data[photoIndex] = "bar-active";
    setBarIndex(data);
  }, [photoIndex]);
  const mapBarIndex = barIndex.map((value, index) => (
    <span className={cx("wrapper-pagination-cell", value)} key={v4()}></span>
  ));
  return (
    <>
      <section className="mt-5">
        <p>PostSlideShow: {swipe}</p>
        <div className={cx("wrapper")} id="id-slide-photo" ref={ref}>
          <img
            className={cx("wrapper-photo")}
            src={photoList[photoIndex]}
            alt="Girl in a jacket"
          ></img>
          <div className={cx("wrapper-after")} onClick={handlePrev}>
            <span className={cx("material-icons", "wrapper-after-icon")}>
              navigate_before
            </span>
          </div>
          <div className={cx("wrapper-before")} onClick={handleNext}>
            <span className={cx("material-icons", "wrapper-before-icon")}>
              navigate_next
            </span>
          </div>
          {/* <div className={cx("wrapper-numofphoto")}>1/10</div> */}
          <div className={cx("wrapper-pagination")}>
            {mapBarIndex}
            {/* <span className={cx("wrapper-pagination-cell")}></span>
            <span className={cx("wrapper-pagination-cell")}></span>
            <span className={cx("wrapper-pagination-cell")}></span>
            <span className={cx("wrapper-pagination-cell")}></span>
            <span className={cx("wrapper-pagination-cell")}></span> */}
          </div>
          <div className={cx("wrapper-centerLine")}></div>
        </div>
        <div style={{ display: "none" }}>{mapPhotoList}</div>
      </section>
    </>
  );
}
