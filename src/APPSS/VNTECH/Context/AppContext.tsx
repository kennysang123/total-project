import React, { createContext, useEffect, useState } from "react";
import { GlobalFunction } from "../../APICALL/GlobalFunction";

interface Props {
  //children?: ReactNode;
  // any props that come into the component
}
type MyComponentProps = React.PropsWithChildren<{}>;

export const AppContext = createContext<any>({});
export const AppProvider = ({ children }: MyComponentProps) => {
  const [isOpenDrawerReport, setIsOpenDrawerReport] = useState(false);
  const [isOpenDrawerFilter, setIsOpenDrawerFilter] = useState(false);
  const [openDrawerMenu, setOpenDrawerMenu] = useState(false);
  const [openUserWithID, setOpenUserWithID] = useState(false);
  const [openDrawerGioiThieu, setOpenDrawerGioiThieu] = useState(false);
  const [openDrawerMenuGioiThieu, setOpenDrawerMenuGioiThieu] = useState(false);
  const [openDrawerDangKy, setOpenDrawerDangKy] = useState(false);
  const [openDrawerXoaHoSo, setOpenDrawerXoaHoSo] = useState(false);

  const [openDrawerLevel, setOpenDrawerLevel] = useState(false);
  const [openDrawerDetailsProduct, setOpenDrawerDetailsProduct] = useState<any>(
    []
  );
  console.log({ oneproduct: openDrawerDetailsProduct });

  const [loadData, setLoadData] = useState<any>({});
  const [loadDataDone, setLoadDataDone] = useState<any>([]);
  const [searchValue, setSearchValue] = useState<any>("");
  const gf = new GlobalFunction();

  /* load data by type */
  const loadDatafromServer = () => {
    const url = `https://vngate.top/API/BdsPHP/out.php?sub=vntech_select_with_search_order_by_code/{"dateNow":"2022-12-24","searchStr":"${searchValue}"}/`;
    const data = gf.loadDataByAPI(url);
    const data2 = data.then((res: any) => {
      console.log("load data again");
      console.log({ res });
      res !== null ? setLoadData([...res]) : setLoadData({});
    });
  };

  useEffect(() => {
    loadDatafromServer();

    return () => {};
  }, [searchValue]);

  return (
    <AppContext.Provider
      value={{
        isOpenDrawerReport,
        setIsOpenDrawerReport,
        isOpenDrawerFilter,
        setIsOpenDrawerFilter,
        openDrawerMenu,
        setOpenDrawerMenu,
        openDrawerLevel,
        setOpenDrawerLevel,
        openDrawerDetailsProduct,
        setOpenDrawerDetailsProduct,

        openUserWithID,
        setOpenUserWithID,
        loadData,
        setLoadData,
        searchValue,
        setSearchValue,
        openDrawerGioiThieu,
        setOpenDrawerGioiThieu,
        openDrawerMenuGioiThieu,
        setOpenDrawerMenuGioiThieu,
        openDrawerDangKy,
        setOpenDrawerDangKy,
        openDrawerXoaHoSo,
        setOpenDrawerXoaHoSo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
