import React, { useState, useEffect } from "react";

export default function PhotoLink() {
  const [num1, setNum1] = useState(0);
  const [code, setCode] = useState("");
  const [photoLinkState, setPhotoLinkState] = useState({});
  useEffect(() => {
    Photo_GeneratorString(num1, code);
  }, [num1, code]);
  useEffect(() => {
    handleCopy();
  }, [photoLinkState]);

  function handleCopy() {
    navigator.clipboard.writeText(JSON.stringify(photoLinkState));
  }

  function Photo_handleChange(e) {
    const value = e.target.value;
    console.log(value);
    setCode(value);
  }
  function Photo_handleChangeNumberPhoto(e) {
    const value = e.target.value;
    console.log(value);
    setNum1(value);
  }
  function Photo_GeneratorString(numOfPhoto, CodeOfApartment) {
    const hardLink = "http://vd2.epizy.com";
    let photoLink = {
      photo: {
        thumnail: "/Rent/D2N0005/Photo/D2N0005_Thumnail.jpg",
        photolist: [],
        video: {
          videolist: ["", ""],
        },
      },
    };
    photoLink.photo.thumnail =
      "/Rent/" +
      CodeOfApartment +
      "/Photo/" +
      CodeOfApartment +
      "_Thumnail.jpg";

    const maxNum = () => {
      if (numOfPhoto < 5000) {
        return numOfPhoto;
      } else {
        return 5000;
      }
    };
    for (let i = 1; i < maxNum(); i++) {
      const str =
        "/Rent/" +
        CodeOfApartment +
        "/Photo/" +
        CodeOfApartment +
        "_" +
        i +
        ".jpg";
      photoLink.photo.photolist.push(str);
    }
    console.log(photoLink);
    setPhotoLinkState(photoLink);
    //return photoLink;
  }
  return (
    <>
      <div className="row mt-3"></div>
      <div className="row">
        <h3>Panel 5: Photo Link</h3>
        <div className="col-md-6">
          <label htmlFor="in2">Number of Photo:</label>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              id="in2"
              value={num1}
              onChange={Photo_handleChangeNumberPhoto}
            ></input>
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="in1">Code of Aparments:</label>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              id="in1"
              value={code}
              onChange={Photo_handleChange}
            ></input>
          </div>
        </div>

        <div className="col-md-12">
          <label htmlFor="in3">String Generator:</label>
          <div className="input-group mb-3">
            <textarea
              class="form-control"
              rows="5"
              id="in3"
              value={JSON.stringify(photoLinkState)}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="row">
        <hr></hr>
      </div>
    </>
  );
}
