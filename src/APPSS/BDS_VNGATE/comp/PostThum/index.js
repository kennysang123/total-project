import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import CloseIcon from "@mui/icons-material/Close";
import BathroomIcon from "@mui/icons-material/Bathroom";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import SquareIcon from "@mui/icons-material/Square";
import SettingsIcon from "@mui/icons-material/Settings";

/* end icon uti */
import AlertDialog from "../AlertDialog";
import { v4 } from "uuid";
import GlobalClass from "../../../../components_global/GlobalClass";
const cx = classNames.bind(styles);

export default function PostThum(props) {
  //console.log("rerender postthum");
  const [isPopUp, setIsPopUp] = useState(false);
  const [isAlert, setIsAlert] = useState("");
  const [typeFavorite, setTypeFavorite] = useState("no");
  const [isUpdate, setIsUpdate] = useState(false);
  const [privateKey, setPrivateKey] = useState("home");
  const ptProps = props.props;
  //console.log(11111111111, ptProps);
  const code = ptProps.data.code;
  const price = ptProps.data.price / 1000;
  const type = ptProps.data.typer;
  const street = ptProps.data.street;
  const utilities = ptProps.data.utilities;
  const dist = ptProps.data.dist;
  const city = ptProps.data.city;
  const bath = ptProps.data.bath;
  const bed = ptProps.data.bed;
  const area = ptProps.data.area;
  const project = ptProps.data.project;
  const duration = ptProps.data.duration;
  const dayUpdate = ptProps.data.dayUpdate;
  const daysOfDuration = ptProps.data.daysOfDuration;
  const daysOfUpdate = ptProps.data.daysOfUpdate;
  const contentFull = ptProps.data.content;
  let content = ptProps.data.content;
  if (content.length > 130) {
    content = content.substr(0, 130) + " ...";
  }

  //const photoMain = `https://vngate.top/MEDIA/HINH_BDS_VNGATE/${code}/Photos/t.jpg`;
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
              {code} - {type} - {city}
            </h5>
            <div className={cx("location2")}>
              <b>Địa điểm:</b> {street}, {dist}, {city}
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
        const gia = price;
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
                <b>Giá:</b> {gia} tỷ VND
              </div>
              {/* <div className={cx("dayUpdate2")}>
                <b>Ngày c.nhật:</b> {data2.dayUpdate}
              </div> */}
              <div className={cx("contact2")}>
                <b>ĐT:</b> 0907852416 (Nguyen)
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
                  |{" "}
                  <a
                    href="https://api.whatsapp.com/send?phone=84907852416"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    WhatsApp
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://www.messenger.com/t/100088551499935"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    FbMessenger
                  </a>
                </span>
              </div>
              <div className={cx("Bio")}>
                <b>Bio:</b>{" "}
                <span className={cx("BioContent")}>
                  "Nhận ký gửi, mua bán nhà, đất, xưởng... - Hợp tác ace đúng
                  theo thị trường. Chữ tín là trách nhiệm."
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
    const BdsInfo = () => {
      const chitiet = contentFull;
      return (
        <>
          <div className={cx("BdsInfo")}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h4 className={cx("title2")}>Thông tin:</h4>
                  <p>{chitiet}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    };
    const UtilitiesMain = () => {
      const utiMain2 = [
        "Air-conditioner",
        "Allow Pets",
        "Bed",
        "Balcony",
        "Cooker-Hood",
        "Dining-Table",
        "Dining-Substances",
        "Dressing-Table",
        "Dryer",
        "Elevator",
        "Fridge",
        "Garage",
        "Garden",
        "Gym",
        "Hot-Water",
        "Internet-Wifi",
        "Ironing-Board",
        "Jacuzzi",
        "Lobby",
        "Nice-View",
        "Oven",
        "Parking",
        "Rooftop",
        "Sauna-Room",
        "Security-Camera",
        "Shower",
        "Sofa",
        "Stove",
        "Swimming-Pool",
        "TV",
        "Wardrobe",
        "Washing-Machine",
        "Windown",
        "Working-Desk",
      ];

      let mapUtiMain;
      if (utilities.length > 5) {
        const utiMain = JSON.parse(utilities);
        mapUtiMain = utiMain.map((v, i) => (
          <div key={i}>
            {i + 1}. {v}{" "}
          </div>
        ));
      }
      return (
        <>
          <div className={cx("UtilitiesMain")}>
            <div className="container">
              <h4>Utilities</h4>
              <div className={cx("list")}>{mapUtiMain}</div>
            </div>
          </div>
        </>
      );
    };
    const PhotoList = () => {
      const [photoMax, setPhotoMax] = useState();
      const [disPlayPhoto, setDisPlayPhoto] = useState("");
      const chitiet = contentFull;
      //https://vngate.top/API/BdsPHP/out.php?sub=rent_get_number_photo_by_code/{%22code%22:%22B0014%22,%22a%22:2222222}/
      const cla = new GlobalClass();
      //------------render photos-------------
      const renderPhotoList = () => {
        let requestMethod = "bds_get_photo_listname_by_code";
        let requestParam = {
          code: code,
        };
        requestParam = JSON.stringify(requestParam);

        const result = cla.getPhotoListNamesFromServer(
          `https://vngate.top/API/BdsPHP/out.php?sub=${requestMethod}/${requestParam}/`
        );
        result.then((res) => {
          if (res != null) {
            const map2 = res.list.map((v, i) => (
              <img
                key={i}
                alt="Avatar"
                className={cx("photo2")}
                src={`https://vngate.top/MEDIA/HINH_BDS_VNGATE/${code}/Photos/${v}`}
              ></img>
            ));
            console.log("list photo", map2);
            setDisPlayPhoto(map2);
          }
        });
      };

      useEffect(() => {
        renderPhotoList();
        return () => {};
      }, []);
      //--------------------------------------

      return (
        <>
          <div className={cx("BdsContent")}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h4 className={cx("title2")}>
                    Hình ảnh{" "}
                    <span>(Mẹo: Dùng 2 ngón tay zoom để phóng to ảnh)</span>
                  </h4>

                  {disPlayPhoto}
                </div>
              </div>
            </div>
          </div>
        </>
      );
    };
    const SpaceBottom = () => {
      return (
        <>
          <div className={cx("SpaceBottom")}></div>
        </>
      );
    };
    return (
      <>
        <div className={cx("PopUp3")}>
          <div className={cx("wrapper")}>
            <div className={cx("header")} onClick={handleClose}>
              <p>
                Tìm với ID: <b>{code}</b> - Xem nhiều nhà đất khác tại:
                <b> bds.vngate.top</b>
              </p>
              {/* <p>
                Truy cập{" "}
                <span style={{ fontWeight: "bold" }}>bds.vngate.top</span> và
                tìm với ID:{" "}
                <span style={{ fontWeight: "bold" }}>{data2.code}</span>
              </p> */}
              <div className={cx("close2")}>
                <CloseIcon></CloseIcon>
              </div>
            </div>
            <div className={cx("body")}>
              {Title()}
              {MainPhoto()}
              {BdsGia()}
              {BdsInfo()}
              {/* {UtilitiesMain()} */}
              {PhotoList()}
              {SpaceBottom()}
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
    if (localData != null) {
      //console.log("localdata khac null");
      localData = JSON.parse(localData);
      const index = localData.indexOf(code);
      if (index > -1) {
        //console.log("item da co trong favorite");
        setIsAlert("favorite");
        setTypeFavorite("yes");
        ptProps.timerMain = setTimeout(() => {
          clearTimeout(ptProps.timerMain);
          setIsAlert("");
        }, 2000);
      } else {
        let dataTemp2 = [...localData, code];
        dataTemp2 = JSON.stringify(dataTemp2);
        localStorage.setItem("bdsFavorite", dataTemp2);
        setTypeFavorite("yes");
      }
    } else {
      let dataTemp = [code];
      dataTemp = JSON.stringify(dataTemp);
      localStorage.setItem("bdsFavorite", dataTemp);
      setTypeFavorite("yes");
    }
  };
  //--------check favorite-----------
  const checkFavorite = () => {
    let localData = localStorage.getItem("bdsFavorite");
    if (localData != null) {
      console.log("khac null");
      localData = JSON.parse(localData);
      // kiem tra item
      const index = localData.indexOf(code);
      if (index > -1) {
        console.log("da co roi");
        setTypeFavorite("yes");
      } else {
        setTypeFavorite("no");
      }
    } else {
      console.log("localstore null chua ton tai");
      setTypeFavorite("no");
    }
  };
  useEffect(() => {
    checkFavorite();
    return () => {};
  }, [ptProps.isReLoad]);

  //------Update Dialog---------------
  document.body.style.overflow = "scroll";
  const UpdateDialog = () => {
    document.body.style.overflow = "hidden";
    const [date, setDate] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [isAccept, setIsAccept] = useState(true);
    useEffect(() => {
      (date + month + year).length === 8 && setIsAccept(false);
      return () => {};
    }, [date, month, year]);
    const updateToSql = () => {
      const dayFull2 = `${year}-${month}-${date}`;
      alert(dayFull2);
    };
    return (
      <>
        <div className={cx("UpdateDialog")}>
          <h5>Update: {code}</h5>
          <div className={cx("updateClose")} onClick={() => setIsUpdate(false)}>
            <CloseIcon />
          </div>
          <div className={cx("updateContent")}>
            <h6>lease expiration date:</h6>
            <div className={cx("dateWrap")}>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => setDate(e.target.value)}
              >
                <option selected>Date</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => setMonth(e.target.value)}
              >
                <option selected>Motnh</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => setYear(e.target.value)}
              >
                <option selected>Year</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
              </select>
            </div>
          </div>
          <div className={cx("btnUp")}>
            <button
              className="btn btn-primary"
              onClick={updateToSql}
              disabled={isAccept}
            >
              Accept
            </button>
          </div>
        </div>
      </>
    );
  };

  //--------return main-----------
  return (
    <>
      {isUpdate && (
        <>
          <UpdateDialog />
          <div className={cx("backgroundBlack")}></div>
        </>
      )}
      {isAlert == "favorite" && (
        <AlertDialog
          /* props={{ content: "This apartment has added to Favorite" }} */
          props={{
            content: "Mục này đã được thêm vào Danh sách yêu thích của bạn.",
          }}
        />
      )}
      {isPopUp && (
        <PopUp3 key={v4()} props={{ data: "post", setIsPopUp: setIsPopUp }} />
      )}
      <div className={cx("PostThum", "mono")}>
        <div className={cx("Header")}>
          <div className={cx("Avatar")}></div>
          <div className={cx("TitleL")}>
            {code} - {type}
          </div>
          <div className={cx("TitleS")}>
            • {dayUpdate} <span>(updated {daysOfUpdate} days ago)</span>
          </div>
          <div className={cx("Date")}>
            • {street}, {dist}, {city}
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
          {/* <div className={cx("Available")}>
            <p>
              Available:{" "}
              {daysOfDuration <= 0 ? (
                <span>Now</span>
              ) : (
                <span>
                  {duration} ({daysOfDuration} days left)
                </span>
              )}
            </p>
          </div> */}
        </div>
        <div className={cx("Bottom")}>
          <div className={cx("Content")}>
            <div>
              <span>PN: {bed}</span> - <span>WC: {bath}</span>
              {/*  -{" "}
              <span>Area: {area}m2</span> */}
            </div>
            <div>{content}</div>
          </div>
          <div className={cx("Price")}>{price} tỷ VND</div>
          <div className={cx("Chitiet")} onClick={() => setIsPopUp(true)}>
            Xem thêm
          </div>
          {privateKey === "home2" && (
            <div className={cx("Update")} onClick={() => setIsUpdate(true)}>
              <SettingsIcon />
            </div>
          )}
          <div className={cx("CopyRight")}>
            {/* <p>
              <b>bds.vngate.top</b> - tìm với ID: <b>{code}</b>
            </p> */}
            <p>
              Tìm với ID: <b>{code}</b> - Xem nhiều nhà đất khác tại:
              <b> bds.vngate.top</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
