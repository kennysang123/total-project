import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
import "./s.css";
import PostThum from "./comp/PostThum";
import ClassGlobal from "./Global/ClassGlobal";
import GlobalClass from "../../components_global/GlobalClass";
import Panel from "./comp/Panel";

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
          console.log(12, post1);
          postSum.push(post1);
        });
        setPostGet([...postSum]);
        console.log(11111, postSum);
      } else {
        setPostGet(null);
      }
    });
  }
  useEffect(() => {
    console.log("re-render", searchPayload);
    handleSelectAll(searchPayload);
    return () => {};
  }, [isReLoad, searchPayload]);
  //----------------render post---------------
  const renderPosts = () => {
    if (postGet != null) {
      const map1 = postGet.map((v, i) => (
        <PostThum key={i} props={{ data: v }} />
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
  //-----------nav bar--------------
  const NavBar = () => {
    const IconNav = (props) => {
      const data2 = props.props;
      const name = {
        menu: "Menu",
        search: "Tìm kiếm",
        favorite: "Yêu thích",
      };

      const handleClick = () => {
        setIsPanel(!isPanel);
        switch (data2.name) {
          case "search":
            console.log("search");
            break;
          case "favorite":
            console.log("favorite");
            break;

          default:
            break;
        }
      };
      return (
        <>
          <div className={cx("IconNav")} onClick={handleClick}>
            <div className={cx("icon")}>
              <span className="material-icons">{data2.name}</span>
            </div>
            <div className={cx("title")}>{name[data2.name]}</div>
          </div>
        </>
      );
    };
    return (
      <>
        <div style={{ width: "100%", height: "100px" }}></div>
        <div className={cx("footer")}>
          <div className={cx("popup")}>
            <div className={cx("logo")}>
              <div className={cx("tit1")}>NHÀ ĐẤT</div>
              <div className={cx("tit2")}>bds.vngate.top</div>
            </div>
            <IconNav props={{ name: "menu", setIsPanel: setIsPanel }} />
            <IconNav props={{ name: "favorite" }} />
            <IconNav props={{ name: "search" }} />
          </div>
        </div>
      </>
    );
  };

  //-----------------return main-------------------------
  return (
    <>
      {isPanel && (
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

        <NavBar />
      </div>
    </>
  );
}
