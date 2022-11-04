import React from "react";

import classNames from "classnames/bind";
import styles from "./Style.module.scss";
const cx = classNames.bind(styles);

export default function ApartmentIcon(props) {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick(props.value);
    }
  };
  return (
    <>
      <div className={cx("navIcon")} onClick={handleClick}>
        <div className={cx("iconTop", "material-icons")}>maps_home_work</div>
        <div className={cx("titleIcon")}>Apartments</div>
      </div>
    </>
  );
}
