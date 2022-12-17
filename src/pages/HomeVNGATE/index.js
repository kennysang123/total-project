import React from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
const cx = classNames.bind(styles);

export default function HomeVNGATE() {
  const VanHoa = () => {
    const url = window.location.host;
    return (
      <>
        <div className={cx("VanHoa")}>
          <div className="container">
            <hr></hr>
            <div className="row">
              <div className="col-12">
                <h4>Văn hóa tại vngate</h4>
                <p>1. ton trong chu tin</p>
                <p>1. ton trong chu tin</p>
              </div>
              <hr></hr>
              <div className="col-6">
                <div className={cx("cardx")}>
                  <a href={"http://" + url + "/mobi"}>
                    <button className="btn btn-outline-primary">
                      rent.vngate.top
                    </button>
                  </a>
                </div>
              </div>
              <div className="col-6">
                <div className={cx("cardx")}>
                  <a href={"http://" + url + "/bds"}>
                    <button className="btn btn-outline-primary">
                      bds.vngate.top
                    </button>
                  </a>
                </div>
              </div>
              <div className="col-6">
                <div className={cx("cardx")}>
                  <button className="btn btn-outline-primary">
                    thuoc.vngate.top
                  </button>
                </div>
              </div>
              <div className="col-6">
                <div className={cx("cardx")}>
                  <button className="btn btn-outline-primary">
                    mypham.vngate.top
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className={cx("mobileSize")}>{VanHoa()}</div>
    </>
  );
}
