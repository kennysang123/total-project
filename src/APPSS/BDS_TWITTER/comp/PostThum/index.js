import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import CloseIcon from "@mui/icons-material/Close";
import AlertDialog from "../AlertDialog";
const cx = classNames.bind(styles);
let timer;
export default function PostThum(props) {
  console.log("rerender postthum");
  const [isPopUp, setIsPopUp] = useState(false);
  const [isAlert, setIsAlert] = useState("");
  const [typeFavorite, setTypeFavorite] = useState("no");
  const ptProps = props.props;
  const post = props.props.data;
  const code = post.Content.code;
  const dist = post.Content.dist;
  const price = post.Content.price;
  const city = post.Content.city;
  let content = post.Content.content;
  if (content.length > 130) {
    content = content.substr(0, 100) + " ...";
  }
  const typeBds = post.Content.typeBds;
  const dayUpdate = post.Content.dayUpdate;

  const photoMain = `https://vngate.top/MEDIA/HINH_BDS_VNGATE/${code}/Photos/t.jpg`;
  //--------pop up-----------
  const PopUp3 = (props) => {
    let data2 = {
      typeBds: "Nha Pho",
      price: "3,75",
      code: "B0005",
      ward: "Quan Phu Nhuan",
      city: "TP.HCM",
      photoMain: "asas",
      photolist: 7,
      content: "sds",
    };
    data2 = { ...props.props.data.Content };

    document.body.style.overflow = "hidden";
    const handleClose = () => {
      document.body.style.overflow = "scroll";
      props.props.setIsPopUp(false);
    };
    const Title = () => (
      <>
        <div className={cx("Title")}>
          <div className={cx("container")}>
            <h5 className={cx("title2")}>
              {data2.code} - {data2.typeBds} - {data2.city}
            </h5>
            <div className={cx("location2")}>
              <b>Địa điểm:</b> {data2.dist} - {data2.city}
            </div>
          </div>
        </div>
      </>
    );
    const MainPhoto = () => (
      <>
        <div className={cx("MainPhoto")}>
          {/* <img src={data2.photoMain} className={cx("photo")}></img> */}

          <div
            className={cx("photo2")}
            style={{
              backgroundImage: `url(${photoMain})`,
            }}
          ></div>
        </div>
      </>
    );
    const BdsGia = () => {
      const avatarUrl =
        "https://s240-ava-talk.zadn.vn/9/f/3/1/136/240/11737f99cc0b4e06e1271d461b525bca.jpg";
      const Nd = () => {
        return (
          <>
            <div className={cx("col-4")}>
              <div>
                <img
                  alt="Avatar"
                  className={cx("avatar2")}
                  src={avatarUrl}
                ></img>
              </div>
            </div>
            <div className={cx("col-8")}>
              <div className={cx("price2")}>
                <b>Giá:</b> {data2.price} tỷ VND
              </div>
              {/* <div className={cx("dayUpdate2")}>
                <b>Ngày c.nhật:</b> {data2.dayUpdate}
              </div> */}
              <div className={cx("contact2")}>
                <b>L.hệ:</b> 0907852416 (Nguyên)
              </div>
              <div className={cx("contact2")}>
                <span className={cx("call2")}>
                  <a href={`tel:+84-907852416`}>Gọi</a> |{" "}
                  <a
                    href={`https://zalo.me/0907852416`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Zalo
                  </a>{" "}
                  {/* | <a href={`tel:${data2.phone}`}> Tele</a> |{" "}
                  <a href={`tel:${data2.phone}`}> WhatsApp</a> */}
                </span>
              </div>
              <div className={cx("Bio")}>
                <b>Bio:</b>{" "}
                <span className={cx("BioContent")}>
                  "Nhận ký gửi, mua bán nhà đất. Hợp tác ace môi giới đúng theo
                  thị trường. Chữ tín là trách nhiệm."
                </span>
              </div>
            </div>
          </>
        );
      };
      return (
        <>
          <div className={cx("BdsGia")}>
            <div className="container">
              <div className="row">{Nd()}</div>
            </div>
          </div>
        </>
      );
    };
    const BdsContent = () => {
      const numOfPhoto = data2.photolist;
      const arrPhoto = [];
      for (let i = 1; i < numOfPhoto; i++) {
        const urlPhoto = `https://vngate.top/MEDIA/HINH_BDS_VNGATE/${data2.code}/Photos/${i}.jpg`;
        arrPhoto.push(urlPhoto);
      }
      const map2 = arrPhoto.map((v, i) => (
        <img alt="Avatar" className={cx("photo2")} src={v}></img>
      ));
      console.log(555, map2);
      return (
        <>
          <div className={cx("BdsContent")}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h4 className={cx("title2")}>Chi tiết</h4>
                  <p>{data2.content}</p>
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
        <div className={cx("PopUp3")}>
          <div className={cx("wrapper")}>
            <div className={cx("header")} onClick={handleClose}>
              <p>
                Truy cập{" "}
                <span style={{ fontWeight: "bold" }}>bds.vngate.top</span> và
                tìm với ID:{" "}
                <span style={{ fontWeight: "bold" }}>{data2.code}</span>
              </p>
              <div className={cx("close2")}>
                <CloseIcon></CloseIcon>
              </div>
            </div>
            <div className={cx("body")}>
              {Title()}
              {MainPhoto()}
              {BdsGia()}
              {BdsContent()}
            </div>
            <div className={cx("footer2")} onClick={handleClose}></div>
            <div className={cx("close")} onClick={handleClose}>
              {/* <span className="material-icons">clear</span> */}
              <CancelIcon></CancelIcon>
            </div>
          </div>
        </div>
      </>
    );
  };
  //--------add favorite-----------
  const handleAddFavorite = () => {
    let localData = localStorage.getItem("bdsFavorite");
    if (localData.length > 2) {
      console.log("khac null");
      localData = JSON.parse(localData);
      // kiem tra item
      const index = localData.indexOf(code);
      if (index > -1) {
        console.log("da co roi");
        setIsAlert("favorite");
        setTypeFavorite("yes");
        timer = setTimeout(() => {
          clearTimeout(timer);
          setIsAlert("");
        }, 2000);
        //GLOBAL_ALERT_CONTENT = "This apartment has added to Favorite";
        //console.log(GLOBAL_ALERT_CONTENT);
        //setIsArlert(true);
      } else {
        let dataTemp2 = JSON.parse(localData);
        dataTemp2 = [...dataTemp2, code];
        dataTemp2 = JSON.stringify(dataTemp2);
        localStorage.setItem("bdsFavorite", dataTemp2);
      }
    } else {
      let dataTemp = [code];
      dataTemp = JSON.stringify(dataTemp);
      localStorage.setItem("bdsFavorite", dataTemp);
      setTypeFavorite("yes");
      console.log("set yes");
    }
  };
  //--------check favorite-----------
  const checkFavorite = () => {
    let localData = localStorage.getItem("bdsFavorite");
    if (localData.length > 2) {
      console.log("khac null");
      localData = JSON.parse(localData);
      // kiem tra item
      const index = localData.indexOf(code);
      if (index > -1) {
        console.log("da co roi");
        setTypeFavorite("yes");
      }
    } else {
      setTypeFavorite("no");
    }
  };
  useEffect(() => {
    checkFavorite();
    return () => {};
  }, [ptProps.isReLoad]);

  //--------return main-----------
  return (
    <>
      {isAlert == "favorite" && (
        <AlertDialog
          /* props={{ content: "This apartment has added to Favorite" }} */
          props={{
            content:
              "Đất(căn nhà) này đã được thêm vào danh sách yêu thích của bạn",
          }}
        />
      )}
      {isPopUp && <PopUp3 props={{ data: post, setIsPopUp: setIsPopUp }} />}
      <div className={cx("PostThum", "mono")}>
        <div className={cx("Header")}>
          <div className={cx("Avatar")}></div>
          <div className={cx("TitleL")} onClick={checkFavorite}>
            {code} - {typeBds}
          </div>
          <div className={cx("TitleS")}>• {dayUpdate}</div>
          <div className={cx("Date")}>
            • {dist}, {city}
          </div>
          <div className={cx("Favorite")} onClick={handleAddFavorite}>
            {typeFavorite == "no" ? (
              <span className="material-icons">favorite_border</span>
            ) : (
              <span className="material-icons">check</span>
            )}
          </div>
        </div>
        <div className={cx("Body")}>
          <div
            className={cx("Photo")}
            style={{ backgroundImage: `url(${photoMain})` }}
          ></div>
        </div>
        <div className={cx("Bottom")}>
          <div className={cx("Content")}>{content}</div>
          <div className={cx("Price")}>{price} tỷ VND</div>
          <div className={cx("Chitiet")} onClick={() => setIsPopUp(true)}>
            Chi tiết
          </div>
          <div className={cx("CopyRight")}>
            <p>
              <b>bds.vngate.top</b> - tìm với ID: <b>{code}</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
