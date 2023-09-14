import React from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
const cx = classNames.bind(styles);

export default function TextLine1() {
  return (
    <>
      <section className={cx("id0")}>
        <div className={cx("id1")}>
          <p>
            Lorem sfdas asds asds Lorem sfdas asds asds Lorem sfdas asds asds
            Lorem sfdas asds asds Lorem sfdas asds asds Lorem sfdas asds asds
            Lorem sfdas asds asds{" "}
          </p>
        </div>
      </section>
    </>
  );
}
