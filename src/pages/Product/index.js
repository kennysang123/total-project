import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import ProductItem from "../../Components_Shopee/ProductItem";
import Sidebar from "../../Components_Shopee/Sidebar";
import BodyTopSpace from "../../Components_Shopee/BodyTopSpace";
import GetDataGoogleScript from "../api/getDataGoogleScript";
import Pagination from "../../Components_Shopee/Pagination";
import { FuncX1 } from "../../Components_Shopee/Functions";
import ProductItemDark from "../../Components_Shopee/ProductItemDark";
import BottomSpace from "../../Components_Shopee/BottomSpace";
import GoToTop from "../../Components_Shopee/GoToTop";

export default function Product() {
  const [productView, setProductView] = useState([]);
  const [productArray, setProductArray] = useState([]);

  async function handleClick() {
    let url = "http://vd2.epizy.com/serverphp/api/v1/product/";
    const FuncX1x = new FuncX1();
    const data = await FuncX1x.SelectData(url, "all");
    //console.log("data sau await: ", data);
    //console.log("data sau await2: ", data[0]["Code"]);
    return data;
  }

  useEffect(() => {
    const d3 = handleClick();
    d3.then((res) => {
      console.log(res);
      const product = res.map((val) => (
        <ProductItemDark key={v4()} props={val} />
      ));
      setProductView([...product]);
      // /setProductArray([...res]);
    });
  }, []);

  //console.log("d3: ", d3);

  /* useEffect(() => {
    handleClick();
    console.log("useE");
  }, []); */
  /* useEffect(() => {
    console.log(productArray);
    const product = productArray.map((val) => (
      <ProductItem key={v4()} val2={val} />
    ));
    setProductView(product);
  }, [productArray]); */

  /* const arrProduct = [1, 2, 3, 4, 5, 6, 7];
  const product = arrProduct.map((val) => (
    <ProductItem key={v4()} val2={val} />
  )); */
  return (
    <>
      <BodyTopSpace />
      <Pagination />
      {/* <GoToTop /> */}
      <div className={"container"}>
        <div className="row">{productView}</div>
        <div className="row">
          <BottomSpace />
        </div>
      </div>
    </>
  );
}
