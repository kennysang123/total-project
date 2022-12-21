import React from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
import ErrorIcon from "@mui/icons-material/Error";
const cx = classNames.bind(styles);

export default function AlertDialog(props) {
  const adProps = props.props;
  return (
    <>
      <div className={cx("AlertDialog")}>
        <ErrorIcon></ErrorIcon>&nbsp; {adProps.content}
      </div>
    </>
  );
}
