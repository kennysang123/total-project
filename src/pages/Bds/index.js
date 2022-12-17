import React, { useRef, useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
import IconNav from "./comp/IconNav";
import Panel from "./comp/Panel";
import { v4 } from "uuid";
import usePost from "./comp/usePost";
import GlobalClass from "../../components_global/GlobalClass";
const cx = classNames.bind(styles);

let GLOBAL_PANEL_TYPE;
let GLOBAL_DATA_GOOGLE = "Google";
export default function Bds() {
  const [searchValue, setSearchValue] = useState("");
  const [isHuy, setIsHuy] = useState(false);
  const [isCaution, setIsCaution] = useState(false);

  //console.log(1111111, GLOBAL_DATA_GOOGLE);
  const [isLoading, setIsLoading] = useState(true);
  const [isPanelSearch, setIsPanelSearch] = useState(false);
  const [productView, setProductView] = useState([]);
  const [isRefresh, setIsRefresh] = useState(false);
  const [isScrollDisable, setIsScrollDisable] = useState(false);

  function handleSearch() {
    GLOBAL_PANEL_TYPE = "search";
    setIsPanelSearch(!isPanelSearch);
  }

  function handleFavorite() {
    GLOBAL_PANEL_TYPE = "favorite";
    setIsPanelSearch(!isPanelSearch);
  }
  function handleMenu() {
    GLOBAL_PANEL_TYPE = "menu";
    setIsPanelSearch(!isPanelSearch);
  }

  useEffect(() => {
    loadDataGoogle();
  }, [isRefresh]);

  const PopUp3 = (props) => {
    const data2 = props.props.data3;
    document.body.style.overflow = "hidden";
    const handleClose = () => {
      props.props.setIsShowPopUp(false);
    };
    const Title = () => (
      <>
        <div className={cx("Title")}>
          <div className={cx("container")}>
            <h5 className={cx("title2")}>
              {data2.code} - {data2.title}
            </h5>
            <div className={cx("location2")}>
              <b>Địa điểm:</b> {data2.ward} - {data2.city}
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
              backgroundImage: `url(http://vngate.top/Bds/${data2.code}/Photos/${data2.photoMain})`,
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
                <b>Giá:</b> {data2.price}
              </div>
              {/* <div className={cx("dayUpdate2")}>
                <b>Ngày c.nhật:</b> {data2.dayUpdate}
              </div> */}
              <div className={cx("contact2")}>
                <b>L.hệ:</b> {data2.phone} (Nguyên)
              </div>
              <div className={cx("contact2")}>
                <span className={cx("call2")}>
                  <a href={`tel:${data2.phone}`}>Gọi</a> |{" "}
                  <a
                    href={`https://zalo.me/${data2.phone}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Zalo
                  </a>{" "}
                  | <a href={`tel:${data2.phone}`}> Tele</a> |{" "}
                  <a href={`tel:${data2.phone}`}> WhatsApp</a>
                </span>
              </div>
              <div className={cx("Bio")}>
                <b>Bio:</b>{" "}
                <span className={cx("BioContent")}>
                  "Nhận ký gửi, mua bán Bất Động Sản. Hợp tác ace môi giới đúng
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
    const BdsContent = () => {
      const map1 = data2.content.map((value, index) => <p>{value}</p>);
      const map2 = data2.photoList.map((v, i) => (
        <img
          alt="Avatar"
          className={cx("photo2")}
          src={`http://vngate.top/Bds/${data2.code}/Photos/` + v}
        ></img>
      ));
      return (
        <>
          <div className={cx("BdsContent")}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h4 className={cx("title2")}>Chi tiết</h4>
                  {map1}
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
            </div>
            <div className={cx("body")}>
              {Title()}
              {MainPhoto()}
              {BdsGia()}
              {BdsContent()}
            </div>
            <div className={cx("footer2")} onClick={handleClose}></div>
            <div className={cx("close")} onClick={handleClose}>
              <span className="material-icons">clear</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  const PostThum3 = (props) => {
    const [isShowPopUp, setIsShowPopUp] = useState(false);
    const [isRefresh, setIsRefresh] = useState(false);
    const [icon, setIcon] = useState("favorite");
    isShowPopUp
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
    const handlePopUp = () => {
      setIsShowPopUp(true);
    };
    let data3 = props.props.data.PostContent;
    data3 = JSON.parse(data3);
    //console.log(555, data3);
    const handleAddFavorite = () => {
      const code = data3.code;
      const strCodePrice = {
        code: data3.code,
        price: data3.price,
      };
      //console.log(strCodePrice);
      //handleChangeIcon();
      setIsRefresh(!isRefresh);
      props.props.handleAddFavorite(JSON.stringify(strCodePrice));
    };

    const handleChangeIcon = () => {
      let local = localStorage.getItem("bdsFavorite");
      local = JSON.parse(local);
      let chuoi = {
        code: data3.code,
        price: data3.price,
      };
      chuoi = JSON.stringify(chuoi);
      if (local != null) {
        const tontai2 = local.indexOf(chuoi);
        if (tontai2 < 0) {
          setIcon("favorite");
        } else {
          setIcon("check");
        }
      }

      //console.log(6666, tontai2);
    };
    useEffect(() => {
      handleChangeIcon();
    }, [isRefresh]);

    return (
      <>
        <div className={cx("PostThum3")}>
          {isShowPopUp ? (
            <PopUp3
              props={{
                setIsShowPopUp: setIsShowPopUp,
                data3: data3,
              }}
            />
          ) : (
            <></>
          )}
          <div className={cx("head2")}>
            <div className={cx("avatar")}>
              <div className={cx("photo")}></div>
              <div className={cx("title")}>
                <span>{data3.code}</span> -{" "}
                <span className={cx("city")}>{data3.city}</span>
              </div>
              <div className={cx("time")}>• {data3.ward}</div>
              <div className={cx("favorite")} onClick={handleAddFavorite}>
                <span className={cx("done", "material-icons")}>{icon}</span>
              </div>
              <div className={cx("upload")}>
                {/* <span className={cx("done", "material-icons")}>settings</span> */}
              </div>
            </div>
          </div>
          <div
            className={cx("body2")}
            style={{
              backgroundImage: `url(http://vngate.top/Bds/${data3.code}/Photos/${data3.photoMain})`,
            }}
          ></div>
          <div className={cx("bottom2")}>
            <div className={cx("header")}>
              <div className={cx("title")}>
                <h5>
                  {data3.code} - {data3.title}
                </h5>
              </div>
              <div className={cx("price")}>
                <h5>{data3.price}</h5>
              </div>
            </div>
            <div className={cx("body3")}>
              <div className={cx("short")}>
                <p>{data3.short}</p>
              </div>
              <div className={cx("seeMore")}>
                <button
                  className={cx("btn btn-outline-secondary", "chiTiet")}
                  onClick={handlePopUp}
                >
                  Chi tiết
                </button>
              </div>
            </div>
          </div>
          <div className={cx("bottom3")}>
            <div className={cx("content")}>
              <p>
                (c) <b>bds.vngate.top</b>{" "}
                <span>
                  {" "}
                  - Tìm với ID: <b>{data3.code}</b>
                </span>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };

  const Loading = () => {
    return (
      <>
        <div className={cx("Loading")}>
          <span>Đang tải dữ liệu lần đầu, xin chờ vài giây....</span>
        </div>
      </>
    );
  };
  const Huy = () => {
    const handleXoa = () => {
      let res4 = GLOBAL_DATA_GOOGLE.map((v, i) => (
        <PostThum3 key={v4()} props={{ data: v }} />
      ));
      setProductView([...res4]);
      setIsHuy(false);
    };
    return (
      <>
        <div className={cx("Huy")}>
          <button className="btn btn-danger" onClick={handleXoa}>
            Xóa
          </button>
        </div>
      </>
    );
  };
  //----------------------load data from google----------------------
  async function loadDataGoogle() {
    const url2 =
      "https://script.google.com/macros/s/AKfycbz5ApZua7TLc1ugYzBPcOLm8OUPzpGcQmhpIzMf_5dBCNiV8u5t3jtBbFtQFcH6aoaTEg/exec";
    const cl = new GlobalClass();
    const data = cl.GetDataGoogle(url2, "BDS");
    data.then((res) => {
      let res2 = res;
      res2.splice(1, 1);
      res2.splice(1, 1);
      res2.splice(1, 1);
      res2.splice(0, 1); //  loai tieu de bang
      console.log("res2", res2);

      let res3 = res2.map((value, index) => {
        let dat1 = {
          Code: value[0],
          PostContent: value[1],
        };
        //console.log(dat1);
        return dat1;
      });
      GLOBAL_DATA_GOOGLE = res3;
      let res4 = res3.map((v, i) => (
        <PostThum3
          key={v4()}
          props={{ data: v, handleAddFavorite: handleAddFavorite }}
        />
      ));

      //console.log(222, res4);
      setProductView([...res4]);
      setIsLoading(false);
    });
  }
  //----------------------search module------------------------------

  const searchByIdFunc = (val) => {
    let data = GLOBAL_DATA_GOOGLE;
    //console.log(data);
    if (data != "Google") {
      data.forEach((element) => {
        const arr = [element];
        const code = element.Code;
        const PostContent = JSON.parse(element.PostContent);
        if (searchValue == PostContent.code) {
          //console.log(1111111111111111111111);
          let res4 = arr.map((v, i) => (
            <PostThum3 key={v4()} props={{ data: v }} />
          ));
          setProductView([...res4]);
          setIsHuy(true);
        }
      });
    }
  };
  useEffect(() => {
    searchByIdFunc(searchValue);
  }, [searchValue]);
  //--------------------------------thich module---------------------
  const handleAddFavorite = (e) => {
    //const thich = localStorage.getItem("bdsVnGateFavorite");
    //console.log(e);
    //localStorage.removeItem("bdsFavorite");
    const thich = localStorage.getItem("bdsFavorite");

    console.log(thich == null);

    if (thich == null) {
      let arr = [];
      arr.push(e);
      console.log(arr);
      let arr2 = JSON.stringify(arr);
      localStorage.setItem("bdsFavorite", arr2);
    } else {
      let data = JSON.parse(thich);
      console.log(333, data);
      let tontai = data.indexOf(e);
      //console.log(tontai);
      if (tontai < 0) {
        data.push(e);
        let data2 = JSON.stringify(data);
        localStorage.setItem("bdsFavorite", data2);
      } else {
        setIsCaution((prev) => !prev);
        //console.log("da them thich");
        hanldeCaution();
      }
    }

    //console.log(111111, GLOBAL_THICH);
  };
  //-----------------------caution module-------------------------
  const hanldeCaution = () => {
    setIsCaution(true);
    const timer = setTimeout(() => {
      setIsCaution(false);
      clearTimeout(timer);
    }, 2000);
  };
  const Caution = (props) => {
    return (
      <>
        <div className={cx("Caution")}>{props.props.data}</div>
      </>
    );
  };
  //----------------------handle scroll------------------------------
  const handleScroll = (e) => {
    document.body.style.overflow = e;
  };
  //----------------------auto if main-------------------------------
  if (!isPanelSearch) {
    handleScroll("scroll");
  }
  //----------------------panel2 module--------------------------------

  //----------------------return main--------------------------------
  return (
    <>
      {isCaution ? (
        <Caution props={{ data: "Đã thêm vào danh sách yêu thích" }} />
      ) : (
        <></>
      )}
      {isPanelSearch && (
        <Panel
          onClick={handleSearch}
          props={{
            name: "favorite",
            type: GLOBAL_PANEL_TYPE,
            isRefresh: isRefresh,
            setIsRefresh: setIsRefresh,
            isScrollDisable: isScrollDisable,
            setIsScrollDisable: setIsScrollDisable,
            setIsPanelSearch: setIsPanelSearch,
            setSearchValue: setSearchValue,
            handleScroll: handleScroll,
          }}
        />
      )}
      {/* {!loading ? "mapPost" : "Loading..dd."} */}

      <div className={cx("containerX")}>
        {/* <PostThum3 props={{ data3: data4 }} /> */}
      </div>
      <div className={cx("containerX")}>
        {isLoading ? <Loading /> : productView}
        {isHuy ? <Huy /> : <></>}
      </div>
      <div style={{ width: "100%", height: "100px" }}></div>
      <div className={cx("footer")}>
        <div className={cx("popup")}>
          <div className={cx("logo")}>
            <div className={cx("tit1")}>NHÀ ĐẤT</div>
            <div className={cx("tit2")}>bds.vngate.top</div>
          </div>
          <IconNav props={{ name: "menu" }} onClick={handleMenu} />
          <IconNav props={{ name: "favorite" }} onClick={handleFavorite} />
          <IconNav props={{ name: "search" }} onClick={handleSearch} />
        </div>
      </div>
    </>
  );
}
