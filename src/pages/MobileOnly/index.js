import React, { useRef, useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
import PopUp from "./comp/PopUp";
import PostThumnail from "./comp/PostThumnail";
import IconNav from "./comp/IconNav";
import Panel from "./comp/Panel";
import { FuncX1 } from "../../Components_Shopee/Functions";
import { v4 } from "uuid";
import usePost from "./comp/usePost";
import InsertPanel from "../../Components_Shopee/InsertPanel";
import UpdatePanel from "../../Components_Shopee/UpdatePanel";
import Global from "../../components_global/Global";
import GlobalClass from "../../components_global/GlobalClass";
const cx = classNames.bind(styles);

let GLOBAL_PANEL_TYPE;
export default function MobileOnly() {
  const [isPanelSearch, setIsPanelSearch] = useState(false);
  const [productView, setProductView] = useState([]);
  const [productArray, setProductArray] = useState([]);
  const [isRefresh, setIsRefresh] = useState(false);
  const [isScrollDisable, setIsScrollDisable] = useState(false);
  const [query, setQuery] = useState("four");
  const [limitSql, setLimitSql] = useState(2);
  const [pageNumber, setPageNumber] = useState(0);
  const { loading, posts, error, hasMore } = usePost(
    query,
    limitSql,
    pageNumber
  );
  const [postView, setPostView] = useState([]);

  const mapPost = posts.map((v, i) => (
    <div key={v4()} className="postv">
      {v.Code}
    </div>
  ));

  /* load posts */

  /*end load posts */
  /* console.log({
    loading: loading,
    posts: posts,
    error: error,
    hasMore: hasMore,
  }); */
  //console.log("mobi:", posts);

  function handleScrollDisable() {
    isPanelSearch
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  }
  handleScrollDisable();
  console.log("re-render");
  function tog2Times() {
    setIsPanelSearch(false);
    // /const timout = setTimeout(tog, 500);
  }

  function handleSearch() {
    GLOBAL_PANEL_TYPE = "search";
    setIsPanelSearch(!isPanelSearch);

    /* if (isPanelSearch) {
      //tog();
    } else {
      setIsPanelSearch(true);
    } */
  }
  function handleHome() {
    GLOBAL_PANEL_TYPE = "home";
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

  async function handleClick() {
    const url = Global("url");
    const FuncX1x = new FuncX1();
    const data = await FuncX1x.SelectData(url, "all", 11, 0);
    console.log("data sau await: ", data);
    /* xu ly ngay thang */
    let result = [];
    data.forEach((element) => {
      const duration = element.Duration;
      const d = new GlobalClass();
      let re = d.dateCal(duration).days;
      re < 0 ? (re = "Full") : (re = "Empty");

      result.push({ ...element, Full: re });
    });
    console.log(result);
    //const d = new GlobalClass();
    //const re = d.dateCal(Duration);
    //console.log("data sau await2: ", data[0]["Code"]);
    return data;
  }

  useEffect(() => {
    const d3 = handleClick();
    d3.then((res) => {
      //console.log(res);
      const product = res.map((val) => (
        <PostThumnail key={v4()} props={{ data: val, isRefresh: isRefresh }} />
      ));
      setProductView([...product]);
      // /setProductArray([...res]);
    });
  }, [isRefresh]);

  useEffect(() => {
    return;
    const options = {
      rootMargin: "0px",
    };
    const posts = document.querySelectorAll(".postob");
    console.log(posts);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) observer.unobserve(entry.target);
      });
      console.log("entry2");
    }, {});

    const nextOb = new IntersectionObserver((entries) => {
      const lastPost = entries[0];
      if (!lastPost.isIntersecting) return;
      get10Posts();
      nextOb.unobserve(lastPost.target);
      nextOb.observe(document.querySelector(".postob:last-child"));
    });
    nextOb.observe(document.querySelector(".postob:last-child"));

    posts.forEach((postob) => {
      observer.observe(postob);
    });
    function get10Posts() {
      console.log("add10  cards");
    }
    return () => {};
  }, [productView]);

  const json1 = () => {
    const map = {
      map: "https://www.google.com/maps/place/10%C2%B046'18.4%22N+106%C2%B047'27.5%22E/@10.7878718,106.7399025,14z/data=!4m5!3m4!1s0x0:0xd49da8996ef1ea9e!8m2!3d10.7717701!4d106.7909718?hl=vi-VN",
    };
    console.log(JSON.stringify(map));
  };

  const postThum2 = () => {
    return (
      <>
        <div className={cx("post2")}>
          <div className={cx("head2")}>
            <div className={cx("avatar")}>
              <div className={cx("photo")}></div>
              <div className={cx("title")}>
                <span>{"Code"}</span> -{" "}
                <span className={cx("city")}>{"City"}</span>
              </div>
              <div className={cx("time")}>• {"LatestUpdate"}</div>
              <div className={cx("favoriteDis")} onClick={"handleAddFavorite"}>
                <span className={cx("done", "material-icons")}>
                  {"iconChange"}
                </span>
              </div>
              <div className={cx("upload")}>
                <span className={cx("done", "material-icons")}>settings</span>
              </div>
            </div>
          </div>
          <div className={cx("body2")}>2</div>
          <div className={cx("bottom2")}>3</div>
        </div>
      </>
    );
  };
  return (
    <>
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
          }}
        />
      )}
      {!loading ? "mapPost" : "Loading..dd."}

      {/* <div className={cx("containerX")}>{postThum2()}</div> */}
      <div className={cx("containerX")}>{productView}</div>
      <div style={{ width: "100%", height: "100px" }}></div>
      <div className={cx("footer")}>
        <div className={cx("popup")}>
          <IconNav props={{ name: "menu" }} onClick={handleMenu} />
          <IconNav props={{ name: "home" }} onClick={handleHome} />
          <IconNav props={{ name: "favorite" }} onClick={handleFavorite} />
          <IconNav props={{ name: "search" }} onClick={handleSearch} />
        </div>
      </div>
      {console.log("end-render")}
    </>
  );
}
