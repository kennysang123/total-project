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

const cx = classNames.bind(styles);

export default function BDS_TWITTER() {
  const [postGet, setPostGet] = useState([]);
  const [posts, setPosts] = useState();
  const [navType, setNavType] = useState("");
  const [index, setIndex] = useState(1);
  const [isPanel, setIsPanel] = useState(false);
  const [isReLoad, setIsReLoad] = useState(false);
  const [searchPayload, setSearchPayload] = useState("");
  const [full, setFull] = useState("");
  const [panelShow, setPanelShow] = useState("no");
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
  console.log("re-render main");
  useEffect(() => {
    console.log("re-render", searchPayload);
    handleSelectAll(searchPayload);
    return () => {};
  }, [isReLoad, searchPayload]);
  //----------------render post---------------
  const renderPosts = () => {
    if (postGet != null) {
      const map1 = postGet.map((v, i) => (
        <PostThum
          key={i}
          props={{ data: v, setIsReLoad: setIsReLoad, isReLoad: isReLoad }}
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
  //--------------show panel----------
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

  //-----------------return main-------------------------
  return (
    <>
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
      {false && (
        <Panel
          props={{
            name: "favorite",
            setIsReLoad: setIsReLoad,
            isReLoad: isReLoad,
            setSearchPayload: setSearchPayload,
            searchPayload: searchPayload,
            setIsPanel: setIsPanel,
            isPanel: isPanel,
          }}
        />
      )}
      <div className={cx("BDS_TWITTER")}>
        <hr></hr>
        {posts != null ? (
          posts
        ) : (
          <p className={cx("searchNull")}>
            Không có kết quả nào được tìm thấy. Hãy thử tìm lại hoặc nhấn nút
            Xóa kết quả tìm kiếm.
          </p>
        )}
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
