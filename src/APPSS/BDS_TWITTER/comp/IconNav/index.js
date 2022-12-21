import React from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
const cx = classNames.bind(styles);

export default function IconNav({ props, ...rootDOMAttributes }) {
  const propsNavBar = props;

  const data2 = props.props;
  const name = {
    menu: "Menu",
    search: "Tìm kiếm",
    favorite: "Yêu thích",
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
  return (
    <>
      <div className={cx("IconNav")} {...rootDOMAttributes}>
        <div className={cx("icon")}>
          <span className="material-icons">{propsNavBar.name}</span>
        </div>
        <div className={cx("title")}>{name[propsNavBar.name]}</div>
      </div>
    </>
  );
}
