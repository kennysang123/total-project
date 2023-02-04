import React from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
const cx = classNames.bind(styles);

export default function AlertDialog(props) {
  const adProps = props.props;
  return (
    <>
      <div className={cx("AlertDialog")}>
        <div className={cx("container")}>
          <div className={cx("row")}>
            <div className={cx("col-2")}>
              <ErrorOutlineIcon></ErrorOutlineIcon>
            </div>
            <div className={cx("col-10")}>
              {/* &nbsp; */} {adProps.content}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
