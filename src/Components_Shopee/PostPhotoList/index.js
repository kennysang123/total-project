import React from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
const cx = classNames.bind(styles);

export default function PostPhotoList() {
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
    <div className="col-12">
      <img
        className={cx("photo")}
        src={photoList[index]}
        alt="Girl in a jacket"
        style={{ width: "100%", height: "auto", marginTop: "10px" }}
      ></img>
    </div>
  ));
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <h2 className="title-uti mt-3">Other photos:</h2>
            {mapPhotoList}
          </div>
        </div>
      </section>
    </>
  );
}
