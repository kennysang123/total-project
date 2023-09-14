import React, { useContext } from "react";
import { Paper, styled } from "@mui/material";

/* War3Input */
import { formatVND2 } from "../css/style";
import "../css/scss.css";
import { AppContext } from "../Context/AppContext";
/* csss module */
import classNames from "classnames/bind";
import styles from "./MainContent2.module.scss";
const cx = classNames.bind(styles);
/* end css module */

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function MainContent2() {
  const {
    setOpenDrawerProduct,
    setIdProduct,
    apartments,
    productIndex,
    setProductIndex,
  } = useContext(AppContext);

  const TamHet = () => {
    return (
      <>
        <div className={cx("tamhet")}>Tạm hết hàng ạ</div>
      </>
    );
  };
  const BoSung = () => {
    return (
      <>
        <div className={cx("bosung")}>thông tin sẽ bổ sung sau ạ</div>
      </>
    );
  };

  return (
    <>
      <div
        className={cx(
          "bx",
          "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-x-2 gap-y-4"
        )}
      >
        {apartments.length != 0 &&
          apartments.map((value: any, index: any) => (
            <div className={cx("product")} key={index}>
              <div
                className={cx("wrapper", "flex flex-col")}
                onClick={() => {
                  setIdProduct(value.productCode);

                  setProductIndex(index);
                  setOpenDrawerProduct(true);
                }}
              >
                <div
                  className={cx("photo")}
                  style={{
                    backgroundImage: `url(https://homeviet.top/Store/vaynu/${value.productCode}/t.jpg)`,
                  }}
                >
                  {/* value.productPrice === "0" */ false && <TamHet />}
                </div>
                <div className={cx("info")}>
                  <div className={cx("bio")}>
                    {value.productDescription === "0" ? (
                      <BoSung />
                    ) : (
                      value.productDescription
                    )}
                  </div>
                  <div className={cx("price")}>
                    <span>đ</span>
                    {formatVND2(Number(value.productPrice) * 1.2)}
                  </div>
                  <div className={cx("more")}>{value.productCode}</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
