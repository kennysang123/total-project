import React from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
const cx = classNames.bind(styles);

export default function IconNav({ className, ...buttonProps }) {
  function getIcon(namex) {
    const propsPass = namex;
    const name = namex.props.name;
    //console.log(name);
    switch (name) {
      case "search":
        return (
          <>
            <div className={cx("wrapper")} {...propsPass}>
              <div className={cx("icon")}>
                <span className="material-icons">search</span>
              </div>
              <div className={cx("title")}>Search</div>
            </div>
          </>
        );
        break;
      case "home":
        return (
          <>
            <div className={cx("wrapper")} {...propsPass}>
              <div className={cx("icon")}>
                <span className="material-icons">home</span>
              </div>
              <div className={cx("title")}>Home</div>
            </div>
          </>
        );
        break;
      case "menu":
        return (
          <>
            <div className={cx("wrapper")} {...propsPass}>
              <div className={cx("icon")}>
                <span className="material-icons">menu</span>
              </div>
              <div className={cx("title")}>Menu</div>
            </div>
          </>
        );
        break;
      case "favorite":
        return (
          <>
            <div className={cx("wrapper")} {...propsPass}>
              <div className={cx("icon")}>
                <span className="material-icons">favorite</span>
              </div>
              <div className={cx("title")}>Favorite</div>
            </div>
          </>
        );
        break;
      default:
      // code block
    }
  }
  const icon = getIcon(buttonProps);
  return <>{icon}</>;
}
