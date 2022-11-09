import React from "react";
import SlidePhotoPost from "../../Components_Shopee/SlidePhotoPost";
import classNames from "classnames/bind";
import styles from "./Style.module.scss";
import PostInfo from "../../Components_Shopee/PostInfo";
const cx = classNames.bind(styles);

export default function SinglePost() {
  /* 
    <a href="https://docs.google.com/uc?export=download&id=1y8S8c_lss9EKGchYNZF1US3T4E3cOpm4">D2N0005_1.jpg</a>
<a href="https://docs.google.com/uc?export=download&id=1BAClgAE-Yn0ky9s2fpag8ULI_8XzX4qR">D2N0005_2.jpg</a>
<a href="https://docs.google.com/uc?export=download&id=1VFsz_yp2xmqdrPB5eJ0anpfOc-SKciCd">D2N0005_9.jpg</a>
<a href="https://docs.google.com/uc?export=download&id=1ULbI1L4_v7G8DY32o_JQUoy83-3d8n1L">D2N0005_8.jpg</a>
<a href="https://docs.google.com/uc?export=download&id=1RloqIuGwPxogP3xK5g94NsiEy9akw82z">D2N0005_7.jpg</a>
<a href="https://docs.google.com/uc?export=download&id=1yh6TY7GrcXA19ipMvSTjwzhK3hiARM2x">D2N0005_6.jpg</a>
<a href="https://docs.google.com/uc?export=download&id=1f_KAixEdMOJt9uet-QYz9aInkkagHUYP">D2N0005_3.jpg</a>
<a href="https://docs.google.com/uc?export=download&id=1jxIQY7iyg1grWi_K8xNcSQnWaudFY5mG">D2N0005_5.jpg</a>
<a href="https://docs.google.com/uc?export=download&id=19YeYUQNGvxXzUoMORis_rux6fnfRd4cY">D2N0005_Thumnail.jpg</a>
<a href="https://docs.google.com/uc?export=download&id=1vSFSQXTDX_EXNnm9eeS-NbBkAnPmP2DP">D2N0005_4.jpg</a>


    */
  /* const op = {
    photo: {
      thumnail: "https://docs.google.com/uc?export=download&id=19YeYUQNGvxXzUoMORis_rux6fnfRd4cY",
      photolist: [
        "https://docs.google.com/uc?export=download&id=1y8S8c_lss9EKGchYNZF1US3T4E3cOpm4",
        "/Rent/D323/Photo/D323_21.jpg",
      ],
      video: { videolist: ["", ""] },
    },
  }; */
  function getLink(x) {
    const val1 = x;
    const length = val1.length;
    const limit = length - 20;
    console.log(length);
    const linkArr = [];
    let i2 = 0;
    let i3 = 0;
    for (let i = 0; i < 5; i++) {
      if (i3 < limit) {
        console.log("i3", i3);
        let linkStart = val1.indexOf('<a href="', i2 + 1);
        i2 = linkStart;
        let linkEnd = val1.indexOf('">', i2 + 70);
        i3 = linkEnd;

        console.log("linkStart: ", i2);
        console.log("linkEnd: ", i3);
        const strSub = val1.substr(i2 + 9, i3 - i2 - 9);
        console.log("link:", strSub);
      }
    }
  }
  function handleChange(e) {
    const value = e.target.value;
    console.log(value);
    getLink(value);
  }
  const linkOpject = {
    linkStart: [],
    linkEnd: [],
    nameStart: [],
    nameEnd: [],
  };
  const exstr = () => {
    let str = "";
    for (let i = 0; i < 100; i++) {
      str = str + "Day la mot noi dung mau. ";
    }
    return str;
  };
  function handleClose() {}
  return (
    <>
      <div className="container">
        <div className={cx("row")}>
          <div className={cx("post-title")}>
            <h1>
              D2N0006 - Apartment Studio 1 Bedroom 1 Bathroom 25 Sqm in District
              2 HCMC - [{" "}
              <a href="http://google.com">Copy link of this post to Share</a> ]
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <SlidePhotoPost />
          </div>
          <div className="col-md-4">
            <PostInfo />
          </div>
        </div>
        <div className="row">
          <h1>Hinh Chi tiet</h1>
        </div>
        <div className="row">
          <div className="col-md-12">
            <img
              src="https://docs.google.com/uc?export=download&id=19YeYUQNGvxXzUoMORis_rux6fnfRd4cY"
              alt="Girl in a jacket"
              width="100%"
              height="auto"
            ></img>
          </div>
        </div>
        <p>single post</p>
        <div className="row">
          <h3>Panel 5: Photo Link</h3>

          <div className="col-md-12">
            <label htmlFor="in3">String Generator:</label>
            <div className="input-group mb-3">
              <textarea
                className="form-control"
                rows="5"
                id="in3"
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
