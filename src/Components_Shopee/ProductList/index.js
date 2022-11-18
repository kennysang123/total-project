import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import { FuncX1 } from "../../Components_Shopee/Functions";
import ProductItemDark from "../../Components_Shopee/ProductItemDark";

export default function ProductList() {
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
  return (
    <>
      <div className="containerX"></div>
    </>
  );
}
