import React from "react";
import { v4 } from "uuid";

import classNames from "classnames/bind";
import styles from "./ContentMain.module.scss";
import ProductItem from "../ProductItem";
const cx = classNames.bind(styles);

const arrProduct = [1, 2, 3, 4, 5, 6, 7];
const product = arrProduct.map((val) => <ProductItem key={v4()} val2={val} />);

console.log(product);
export default function ContentMain() {
  return (
    <>
      <div className="col-md-10">
        <div className="container">
          <div className="row">bo loc</div>
          <div className="row">{product}</div>
        </div>
      </div>
    </>
  );
}
