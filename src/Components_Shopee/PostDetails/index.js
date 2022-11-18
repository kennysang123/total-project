import React from "react";
import tippy from "tippy.js";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
import PostIcon from "../Icon/PostIcon";
const cx = classNames.bind(styles);

export default function PostDetails() {
  /* Bedroom: 1
Bathroom: 1
Area: 32 Sqm
Price: 12,000,000 VND/month
Day available: 22/12/2022
Day Update: 23/44/2022 */

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="title-uti mt-3">Information:</h1>
            </div>

            <div className="col-12">
              <div className={cx("price")}>
                <p>Price: 12,000,000 VND/month</p>
              </div>
            </div>

            <div className="col-3">
              <PostIcon
                props={{
                  name: "shower",
                  quality: 1,
                  tooltip: "Number of Bathroom",
                }}
              />
            </div>
            <div className="col-3">
              <PostIcon
                props={{
                  name: "bed",
                  quality: 1,
                  tooltip: "Number of Bedroom",
                }}
              />
            </div>
            <div className="col-3">
              <PostIcon
                props={{
                  name: "aspect_ratio",
                  quality: "32 Sqm",
                  width: "115px",
                  tooltip: "Area of apartment",
                }}
              />
            </div>
            <div className="col-12">
              <PostIcon
                props={{
                  name: "event_available",
                  quality: "22/12/2022 (3 days left)",
                  width: "250px",
                  tooltip: "Days left apartment will be available",
                }}
              />
            </div>
            <div className="col-12">
              <PostIcon
                props={{
                  name: "update",
                  quality: "22/12/2022",
                  width: "150px",
                  tooltip: "Date latest update info of apartment",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
