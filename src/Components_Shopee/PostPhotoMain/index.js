import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
const cx = classNames.bind(styles);

export default function PostPhotoMain() {
  const [photoMain, setPhotoMain] = useState(
    "https://i.ibb.co/Y74SrKZ/loading480.jpg"
  );

  const photoList = [
    "https://docs.google.com/uc?export=download&id=19YeYUQNGvxXzUoMORis_rux6fnfRd4cY",
  ];
  /* const photoList = [
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
  ]; */

  async function loadPhoto(val) {
    const img = new Image();
    img.src = val;
    await img.decode();
    // img is ready to use
    console.log("link: ", photoList.indexOf(val), img.src);
  }
  async function loadAllPhoto() {
    for (let val of photoList) {
      await loadPhoto(val);
    }

    console.log("Get all photos");
    setPhotoMain(photoList[0]);
  }
  loadAllPhoto();

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={cx("wrapper")}>
                <img src={photoMain} alt="Girl"></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
