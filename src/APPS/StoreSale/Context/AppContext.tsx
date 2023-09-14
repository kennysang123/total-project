import React, { createContext, useEffect, useState } from "react";
import { showLog } from "../css/style";
interface Props {
  //children?: ReactNode;
  // any props that come into the component
}
type MyComponentProps = React.PropsWithChildren<{}>;
export const AppContext = createContext<any>({});
export const AppProvider = ({ children }: MyComponentProps) => {
  const [openDrawerMenu, setOpenDrawerMenu] = useState(false);
  const [openDrawerProduct, setOpenDrawerProduct] = useState(false);
  const [openDrawerMuaHang, setOpenDrawerMuaHang] = useState(false);
  const [idProduct, setIdProduct] = useState("");
  const [productIndex, setProductIndex] = useState("");

  const [searchText, setSearchText] = useState("khongload"); //main
  const [soSanPham, setSoSanPham] = useState(0);
  const [admin, setAdmin] = useState([{ adName: "#", adPhone: "#" }]);

  const [apartments, setApartments] = useState<any>([]);
  async function loadData() {
    const url = `https://homeviet.top//api/storesale/outMain.php?sub=getProduct/${searchText}`;
    await fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        showLog && console.log("get data", json);
        if (json != null) {
          setSoSanPham(json.length);
          setApartments(json);
        }
      })
      .catch((err) => {
        /* return { "errorDev:": err }; */
        console.log({ "errorDev:": err });
      });
  }
  async function loadAdmin() {
    //http://localhost:3000/
    //let urlAdmin1 = "https://caonguyen.homeviet.top/";

    let urlAdmin1 = window.location.href;
    const index = urlAdmin1.indexOf("3000");
    //alert(["render conext", index]);
    index > 0 && (urlAdmin1 = "https://caonguyen.homeviet.top/");
    let urlAdmin2 = urlAdmin1.replace("https://", "").split(".");

    const url = `https://homeviet.top//api/storesale/outMain.php?sub=getAdmin/${urlAdmin2[0]}`;

    await fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        json.map((value: any) => {
          //console.log(4, json[0].adCategory);

          setAdmin(json);
          setSearchText(JSON.parse(json[0].adCategory)[0].keySearch);
          showLog && console.log("run get admin", json);
        });
      })
      .catch((err) => {
        /* return { "errorDev:": err }; */
        console.log({ "errorDev:": err });
      });
  }

  showLog && console.log("render appcontext");
  showLog &&
    console.log(
      "show kq no load",
      searchText,
      searchText !== "main",
      apartments,
      apartments.length
    );

  useEffect(() => {
    loadAdmin();
    return () => {};
  }, []);

  useEffect(() => {
    loadData();
    return () => {};
  }, [searchText]);

  return (
    <AppContext.Provider
      value={{
        openDrawerMenu,
        setOpenDrawerMenu,
        openDrawerProduct,
        setOpenDrawerProduct,
        openDrawerMuaHang,
        setOpenDrawerMuaHang,
        idProduct,
        setIdProduct,
        apartments,
        setApartments,
        searchText,
        setSearchText,
        soSanPham,
        setSoSanPham,
        admin,
        setAdmin,
        productIndex,
        setProductIndex,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
