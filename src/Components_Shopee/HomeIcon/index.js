import React from "react";

import classNames from "classnames/bind";
import styles from "./HomeIcon.module.scss";
const cx = classNames.bind(styles);

export default function HomeIcon(props) {
  /* return to dad component
  https://linguinecode.com/post/how-to-pass-parameter-values-to-onclick-react-function */
  const handleClick = () => {
    if (props.onClick) {
      props.onClick(props.value);
    }
  };
  //return <button onClick={handleClick}>Speak</button>;

  return (
    <>
      <div className={cx("navIcon")} onClick={handleClick}>
        <div className={cx("iconTop", "material-icons")}>home</div>
        <div className={cx("titleIcon")}>Home</div>
      </div>
    </>
  );
}
