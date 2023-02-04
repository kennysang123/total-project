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
const cx = classNames.bind(styles);
let timerMain;
let timerLoadAllData;
export default function BDS_VNGATE() {
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
    let requestMethod = "bds_select_with_search_order_by_code";
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
        setIsLoadAllData(true);
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
  //------------pop up check----------------------
  const PopUpDetails = () => {
    return (
      <>
        <div className={cx("PopUpDetails")}>
          <div className={cx("wrapper")}>xin chao</div>
        </div>
      </>
    );
  };
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
      {/*  <PopUpDetails /> */}

      {panelShow == "readme" && (
        <PanelHuongDan
          props={{
            setPanelShow: setPanelShow,
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

      <div className={cx("BDS_VNGATE")}>
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
