import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
import "./root.css";
import PostThum from "./comp/PostThum";
import ClassGlobal from "./Global/ClassGlobal";
import GlobalClass from "../../components_global/GlobalClass";
import Panel from "./comp/Panel";
import Icon from "@mui/material/Icon";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ClearIcon from "@mui/icons-material/Clear";
import NavBar from "./comp/NavBar";
import PanelSearch from "./comp/PanelSearch";
import PanelFavorite from "./comp/PanelFavorite";
import AlertDialog from "./comp/AlertDialog";
import PanelHuongDan from "./comp/PanelHuongDan";
import PanelMenu from "./comp/PanelMenu";
const cx = classNames.bind(styles);
let timerMain;
let timerLoadAllData;
export default function YEULACUOI_VNGATE() {
  //localStorage.clear("bdsFavorite");
  const [postGet, setPostGet] = useState([]);
  const [posts, setPosts] = useState(null);
  const [navType, setNavType] = useState("");
  const [index, setIndex] = useState(1);
  const [isPanel, setIsPanel] = useState(false);
  const [isReLoad, setIsReLoad] = useState(false);
  const [searchPayload, setSearchPayload] = useState("");
  const [full, setFull] = useState("");
  const [panelShow, setPanelShow] = useState("no");
  const [isAlertMain, setIsAlertMain] = useState("");
  const [isLoadAllData, setIsLoadAllData] = useState(false);
  const [isDeleteFilter, setIsDeleteFilter] = useState(false);
  const [filterPayLoad, setFilterPayLoad] = useState("allxxx!");
  //-----------------get data server-----------------
  function handleSelectAll() {
    //const data2 = { method: "selectall", searchValue: searchPayload };
    const cla = new GlobalClass();

    const dateyyyymmdd = () => {
      const datenow2 = new Date();
      const year = datenow2.getFullYear();
      let month = datenow2.getMonth();
      month = Number(month) + 1;
      if (month <= 9) {
        month = "0" + month;
      }
      const date = datenow2.getDate();
      const dateStr = `${year}-${month}-${date}`;
      return dateStr;
    };
    const dateStr = dateyyyymmdd();
    //https://vngate.top/API/BdsPHP/out.php?sub=ketdoi_select_with_search_order_by_code/{%22searchStr%22:%22G00-0001%22}/
    let requestMethod = "ketdoi_select_with_search_order_by_code";
    let requestParam = {
      searchStr: searchPayload,
      dateNow: dateStr,
      paramOther: 1,
    };
    //console.log(333, searchPayload);

    if (searchPayload === "0-10xxx!") {
      requestMethod = "bds_select_price_range_order_by_code";
      requestParam = {
        dateNow: dateStr,
        priceMin: 0,
        priceMax: 10000,
        paramOther: 2,
      };
    } else if (searchPayload === "10-20xxx!") {
      requestMethod = "bds_select_price_range_order_by_code";
      requestParam = {
        dateNow: dateStr,
        priceMin: 10000,
        priceMax: 20000,
        paramOther: 21,
      };
    } else if (searchPayload === "20-50xxx!") {
      requestMethod = "bds_select_price_range_order_by_code";
      requestParam = {
        dateNow: dateStr,
        priceMin: 20000,
        priceMax: 50000,
        paramOther: 22,
      };
    } else if (searchPayload === "50-100xxx!") {
      requestMethod = "bds_select_price_range_order_by_code";
      requestParam = {
        dateNow: dateStr,
        priceMin: 50000,
        priceMax: 100000,
        paramOther: 23,
      };
    } else if (searchPayload === "100-200xxx!") {
      requestMethod = "bds_select_price_range_order_by_code";
      requestParam = {
        dateNow: dateStr,
        priceMin: 100000,
        priceMax: 200000,
        paramOther: 24,
      };
    } else if (searchPayload === "200-500xxx!") {
      requestMethod = "bds_select_price_range_order_by_code";
      requestParam = {
        dateNow: dateStr,
        priceMin: 100000,
        priceMax: 500000,
        paramOther: 25,
      };
    } else if (searchPayload === "500-MAXxxx!") {
      requestMethod = "bds_select_price_range_order_by_code";
      requestParam = {
        dateNow: dateStr,
        priceMin: 500000,
        priceMax: 9999999,
        paramOther: 26,
      };
    } else if (searchPayload === "onlyxxx!") {
      requestMethod = "rent_select_duration_lessthan_20";
      requestParam = {
        dateNow: dateStr,
        paramOther: 3,
      };
    } else if (searchPayload != "") {
      requestMethod = "bds_select_with_search_order_by_code";
      requestParam = {
        searchStr: searchPayload,
        dateNow: dateStr,
        paramOther: 4,
      };
    }

    requestParam = JSON.stringify(requestParam);
    const d = cla.GET_loadDataByAPI(
      `https://vngate.top/API/BdsPHP/out.php?sub=${requestMethod}/${requestParam}/`
      /* `https://vngate.top/API/BdsPHP/out.php?sub=bds_select_price_range_order_by_code/{"priceMin":200000,"priceMax":500000,"dateNow":"2023-01-10"}/` */
    );
    d.then((res) => {
      //console.log("res", res);
      if (res != null) {
        let postSum = [];
        res.forEach((element) => {
          let post1 = element;
          postSum.push(post1);
        });
        setPostGet([...postSum]);
        //setIsLoadAllData(true);
      } else {
        // console.log("res null");
        setPosts(null);
      }
    });
  }
  useEffect(() => {
    handleSelectAll(searchPayload);
    return () => {};
  }, [isReLoad]);
  useEffect(() => {
    setPosts("");
    handleSelectAll(searchPayload);
    return () => {};
  }, [searchPayload]);

  //----------------render post---------------
  const renderPosts = () => {
    //console.log("postGet", postGet);
    if (postGet != null) {
      const map1 = postGet.map((v, i) => (
        <PostThum
          key={i}
          props={{
            data: v,
            setIsReLoad: setIsReLoad,
            isReLoad: isReLoad,
            timerMain: timerMain,
          }}
        />
      ));
      setPosts(map1);
    } else {
      setPosts(null);
    }
  };
  useEffect(() => {
    renderPosts();
    return () => {};
  }, [postGet]);
  //------------all data loaded-------------
  const AllDataLoaded = () => {
    timerLoadAllData = setTimeout(() => {
      setIsLoadAllData(false);
      clearTimeout(timerLoadAllData);
    }, 2000);
    return (
      <>
        <div className={cx("AllDataLoaded")}>
          <span>Loaded all data, ready to use app.</span>
        </div>
      </>
    );
  };
  //--------------xoa ket qua tim----------
  const handleXoaKq = () => {
    setSearchPayload("");
  };
  //---------------------------------------
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(i);
  }
  ////console.log(arr);
  //-------------------auto load-------------------------
  useEffect(() => {
    const cards = document.querySelectorAll(".mono");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
        });
      },
      { rootMargin: "0px", threshold: 0.5 }
    );

    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {};
  }, []);
  //--------------reload main---------------------------
  const BtnReloadAll = () => {
    return (
      <>
        <div className={cx("BtnReloadAll")}>
          <button className="btn btn-warning" onClick={handleXoaKq}>
            Xóa kết quả
          </button>
        </div>
      </>
    );
  };
  const SearchNull = () => {
    return (
      <>
        <p className={cx("searchNull")}>
          0 kết quả được tìm thấy, hãy tìm với từ khác hoặc nhấn nút Xóa kết quả
        </p>
      </>
    );
  };
  const Loading = () => {
    return (
      <>
        <div className={cx("Loading")}>
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>{" "}
          Loading...
        </div>
      </>
    );
  };
  //-------delete filter------------------

  const DeleteFilter = () => {
    return (
      <>
        <div className={cx("DeleteFilter")}>
          <button className="btn btn-danger">Delete filter</button>
        </div>
      </>
    );
  };
  //-------------yeu la cuoi------------------------

  const PostHomeTemp = () => {
    return (
      <>
        <div className="col-6">
          <div className={cx("PostHome")}>
            <div className={cx("header")}>
              <h6>Lê Thị Tuyết</h6>
              <div>Hồ Chí Minh - Quận Bình Thạnh - Phường 6</div>
            </div>
            <div className={cx("body")}>
              <div className={cx("photo")}>
                <div className={cx("numPhoto")}>+8 hình</div>
              </div>
            </div>
            <div className={cx("bottom")}>
              <div>
                Nam - 25t -{" "}
                <bottom className="btn btn-outline-primary btn-sm">
                  Xem thêm
                </bottom>
              </div>
              <div>
                Nguyễn Hoàng Khánh Ly 30 tuổi,hiện đang kinh doanh salon tóc và
                nail-sở thích làm đẹp-du lịch-mua
              </div>
            </div>
            <div className={cx("contact")}>
              <div>Telegram - Fb - Instagram</div>
              <div>Nhóm fb: Yêu Là Cưới</div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const PostHome = (props) => {
    const [showModal, setShowModal] = useState(false);
    let info = {
      code: "G00-0001",
      name: "Lê Thị Thúy Liễu",
      sex: "Nữ",
      birthday: "2000-01-12",
      age: 24,
      verify: "Đã xác minh",
      dist: "Quan 2",
      city: "Binh Duong",
      country: "Viet Nam",
      toila:
        "Là người hòa đồng, nhiệt huyết trong công việc. Tuy nhiên luôn giữ khoảng cách nhất định ... không ai hiểu được nội tâm của tôi. Trong công ty tôi cũng rất nhiều người thuộc TGT3 nhưng tôi chỉ nhìn từ xa không bao giờ mở lòng tiếp xúc với ai. Tôi biết xả giao, cũng biết uống chút rượu bia nhưng biết dừng đúng lúc, chưa bao giờ quá chén mất kiểm soát. Không biết hút thuốc. Tự thấy bản thân là",
      timnguoi:
        "Là người hòa đồng, nhiệt huyết trong công việc. Tuy nhiên luôn giữ khoảng cách nhất định ... không ai hiểu được nội tâm của tôi. Trong công ty tôi cũng rất nhiều người thuộc TGT3 nhưng tôi chỉ nhìn từ xa không bao giờ mở lòng tiếp xúc với ai. Tôi biết xả giao, cũng biết uống chút rượu bia nhưng biết dừng đúng lúc, chưa bao giờ quá chén mất kiểm soát. Không biết hút thuốc. Tự thấy bản thân là",
      facebook: "http1",
      telegram: "http2",
      whatsapp: "http3",
      twitter: "http4",
      instagram: "http5",
      line: "http6",
      avatar:
        "https://luv.vn/wp-content/uploads/2021/08/hinh-anh-gai-xinh-71.jpg",
    };

    const avatarUrl = `https://vngate.top/MEDIA/HINH_KETDOI_VNGATE/${info.code}/Photos/t.jpg`;
    const PostModal = () => {
      document.body.style.overflow = "hidden";
      const handleClose = () => {
        document.body.style.overflow = "scroll";
        setShowModal(false);
      };
      const MainPhoto = () => (
        <>
          <div className={cx("MainPhoto")}>
            {/* <img src={data2.photoMain} className={cx("photo")}></img> */}

            <div
              className={cx("photo2")}
              style={{
                backgroundImage: `url(${avatarUrl}})`,
              }}
            ></div>
          </div>
        </>
      );
      const PersonalInfo = () => (
        <>
          <div className={cx("PersonalInfo")}>
            <div className={cx("container")}>
              <div>
                <div>
                  <h3 className={cx("name")}>{info.name}</h3>
                </div>
              </div>
              <div>
                <span className={cx("sex")}>{info.sex}</span> -{" "}
                <span className={cx("age")}>{info.age}t</span> -{" "}
                <span className={cx("verify")}>{info.verify}</span>
              </div>
              <div>
                <b>Nơi ở:</b> <span className={cx("dist")}>{info.dist}</span> -{" "}
                <span className={cx("city")}>{info.city}</span>
              </div>
              <div>
                <b>Liên hệ:</b>{" "}
                <span className="btn btn-link btn-sm">Facebook</span> -{" "}
                <span className="btn btn-link btn-sm">Telegram</span> -{" "}
                <span className="btn btn-link btn-sm">Instagram</span>{" "}
              </div>
              <div>
                <div>
                  <h3>Giới thiệu</h3>
                </div>
                <p>{info.toila}</p>
                <p>{info.timnguoi}</p>
              </div>
            </div>
          </div>
        </>
      );
      const PhotoList = () => {
        const [photoMax, setPhotoMax] = useState();
        const [disPlayPhoto, setDisPlayPhoto] = useState("");
        const cla = new GlobalClass();
        //------------render photos-------------
        const renderPhotoList = () => {
          let requestMethod = "ketdoi_get_photo_listname_by_code";
          let requestParam = {
            code: info.code,
          };
          requestParam = JSON.stringify(requestParam);
          console.log(
            `https://vngate.top/API/BdsPHP/out.php?sub=${requestMethod}/${requestParam}/`
          );
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
                  src={`https://vngate.top/MEDIA/HINH_KETDOI_VNGATE/${info.code}/Photos/${v}`}
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
                    <h3 className={cx("title2")}>
                      Hình ảnh{" "}
                      <span>(Mẹo: Dùng 2 ngón tay zoom để phóng to ảnh)</span>
                    </h3>

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
          <div className={cx("PostModal")}>
            <div className={cx("wrapper")}>
              <div className={cx("header")} onClick={handleClose}>
                <p>
                  Tìm với ID: <b>{info.code}</b> - Ứng dụng mai mối xác thực 2
                  chiều
                  <b> ketdoi.vngate.top</b>
                </p>
                <div className={cx("close2")}>
                  <span className="material-icons">clear</span>
                </div>
              </div>
              <div className={cx("body")}>
                <MainPhoto />
                <PersonalInfo />
                <PhotoList />
                <SpaceBottom />
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
    const stylePostHome = {
      backgroundImage: `url(${avatarUrl})`,
    };
    return (
      <>
        {showModal && <PostModal />}
        <div className="col-12">
          <div className={cx("PostHome")} style={stylePostHome}>
            <div className={cx("header")}></div>
            <div className={cx("body")}></div>
            <div className={cx("bottom")}>
              <div className={cx("info")}>
                <div>
                  ID: G00-0001 <span>Đã xác minh</span>
                </div>
                <div>
                  LÊ THỊ TUYẾT TRINH <span>27t</span>
                </div>
                <div>Bình Thạnh - TP.HCM</div>
                <div>© ketdoi.vngate.top</div>
              </div>
              <div className={cx("chitiet")} onClick={() => setShowModal(true)}>
                <button className="btn btn-outline-warning">Chi tiết</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const dataYlc = [1, 2];
  const mapYlc = dataYlc.map((v, i) => <PostHome key={i} />);
  //-----------------return main-------------------------
  return (
    <>
      {/* <AlertDialog
        props={{
          content: "Mục này đã được thêm vào danh sách yêu thích của bạn",
        }}
      /> */}
      {/* {isLoadAllData === true && <AllDataLoaded />} */}
      {/* {searchPayload === "onlyxxx!" && <DeleteFilter />} */}

      {/* {panelShow == "readme" && (
        <PanelHuongDan
          props={{
            setPanelShow: setPanelShow,
            setIsReLoad: setIsReLoad,
            isReLoad: isReLoad,
          }}
        />
      )} */}
      {panelShow == "menu" && (
        <PanelMenu
          props={{
            setSearchPayload: setSearchPayload,
            searchPayload: searchPayload,
            setPanelShow: setPanelShow,
            panelShow: panelShow,
            setIsReLoad: setIsReLoad,
            isReLoad: isReLoad,
          }}
        />
      )}
      {panelShow == "favorite" && (
        <PanelFavorite
          props={{
            setSearchPayload: setSearchPayload,
            searchPayload: searchPayload,
            setPanelShow: setPanelShow,
            panelShow: panelShow,
            setIsReLoad: setIsReLoad,
            isReLoad: isReLoad,
          }}
        />
      )}
      {panelShow == "search" && (
        <PanelSearch
          props={{
            setSearchPayload: setSearchPayload,
            searchPayload: searchPayload,
            setPanelShow: setPanelShow,
            panelShow: panelShow,
          }}
        />
      )}

      {/* thu nghiem */}

      <div className={cx("YEULACUOI_VNGATE")}>
        <div className="container">
          <div className={cx("row", "rowx")}>{mapYlc}</div>
        </div>
        <div className={cx("spaceTop")}></div>
        {posts != null ? posts : <SearchNull />}
        {posts == "" && <Loading />}
        {searchPayload != "" && <BtnReloadAll />}
        <NavBar
          props={{
            setIsPanel: setIsPanel,
            isPanel: isPanel,
            setPanelShow: setPanelShow,
            panelShow: panelShow,
          }}
        />
      </div>
    </>
  );
}
