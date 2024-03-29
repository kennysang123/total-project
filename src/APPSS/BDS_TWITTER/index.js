import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
import "./s.css";
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
export default function BDS_TWITTER() {
  //localStorage.clear("bdsFavorite");
  const [postGet, setPostGet] = useState([]);
  const [posts, setPosts] = useState("");
  const [navType, setNavType] = useState("");
  const [index, setIndex] = useState(1);
  const [isPanel, setIsPanel] = useState(false);
  const [isReLoad, setIsReLoad] = useState(false);
  const [searchPayload, setSearchPayload] = useState("");
  const [full, setFull] = useState("");
  const [panelShow, setPanelShow] = useState("no");
  const [isAlertMain, setIsAlertMain] = useState("");
  //-----------------get data server-----------------
  function handleSelectAll() {
    const data2 = { method: "selectall", searchValue: searchPayload };

    const cla = new GlobalClass();
    const d = cla.UpNewBds("https://vngate.top/API/BdsPHP/", data2);
    d.then((res) => {
      if (res != null) {
        let postSum = [];
        res.forEach((element) => {
          let post1 = element.Content;
          post1 = JSON.parse(post1);
          post1 = { ...element, Content: post1 };
          postSum.push(post1);
        });
        setPostGet([...postSum]);
      } else {
        setPostGet(null);
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
  //--------------xoa ket qua tim----------
  const handleXoaKq = () => {
    setSearchPayload("");
  };
  //---------------------------------------
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(i);
  }
  //console.log(arr);
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

  //-------flag-------------------------
  const Flag = () => {
    return (
      <>
        <div className={cx("Flag")}>
          <div className={cx("header")}>
            <div className={cx("icon")}>
              <CheckCircleIcon></CheckCircleIcon>
            </div>
            <div className={cx("text")}>Không tìm thấy</div>
          </div>
          <div className={cx("iconClose")}>
            <ClearIcon></ClearIcon>
          </div>
          <div className={cx("body")}>
            Không có kết quả nào được tìm thấy. Hãy thử tìm lại hoặc nhấn nút
            Xóa kết quả tìm kiếm.
          </div>
        </div>
      </>
    );
  };
  const Flag2 = () => {
    return (
      <>
        <div className={cx("Flag2")}>
          <div className={cx("header")}>
            <div className={cx("text")}>Không tìm thấy</div>
          </div>
          <div className={cx("iconClose")}>
            <ClearIcon></ClearIcon>
          </div>
          <div className={cx("body")}>
            Không có kết quả nào được tìm thấy. Hãy thử tìm lại hoặc nhấn nút
            Xóa kết quả tìm kiếm.
          </div>
        </div>
      </>
    );
  };
  //--------------reload main---------------------------
  const BtnReloadAll = () => {
    return (
      <>
        <div className={cx("BtnReloadAll")}>
          <button className="btn btn-danger" onClick={handleXoaKq}>
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
          Không có kết quả nào được tìm thấy. Hãy thử tìm lại hoặc nhấn nút Xóa
          kết quả tìm kiếm.
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
          Đang tải...
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
      {posts == "" && <Loading />}

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

      <div className={cx("BDS_TWITTER")}>
        <div className={cx("spaceTop")}></div>
        {posts != null ? posts : <SearchNull />}

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
