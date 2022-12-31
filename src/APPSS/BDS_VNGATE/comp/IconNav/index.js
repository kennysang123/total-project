import React from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
const cx = classNames.bind(styles);

export default function IconNav({ props, ...rootDOMAttributes }) {
  const propsNavBar = props;

  const data2 = props.props;
  const name = {
    menu: "Menu",
    search: "Tìm kiếm",
    favorite: "Yêu thích",
    readme: "H.dẫn",
  };

  const handleClick = () => {
    //setIsPanel(!isPanel);
    switch (data2.name) {
      case "search":
        break;
      case "favorite":
        break;

      default:
        break;
    }
  };
  const HuongDan = () => {
    return (
      <>
        <div className={cx("HuongDan")}>
          <AutoStoriesIcon></AutoStoriesIcon>
        </div>
      </>
    );
  };
  return (
    <>
      <div className={cx("IconNav")} {...rootDOMAttributes}>
        <div className={cx("icon")}>
          {propsNavBar.name == "readme" ? (
            <HuongDan />
          ) : (
            <span className="material-icons">{propsNavBar.name}</span>
          )}
        </div>
        <div className={cx("title")}>{name[propsNavBar.name]}</div>
      </div>
    </>
  );
}
