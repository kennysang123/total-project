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
  const [isOpenDrawerMenu, setIsOpenDrawerMenu] = useState(false);
  const [openUserWithID, setOpenUserWithID] = useState(false);
  const [openDrawerGioiThieu, setOpenDrawerGioiThieu] = useState(false);
  const [openDrawerMenuGioiThieu, setOpenDrawerMenuGioiThieu] = useState(false);
  const [openDrawerDangKy, setOpenDrawerDangKy] = useState(false);
  const [openDrawerXoaHoSo, setOpenDrawerXoaHoSo] = useState(false);

  const [loadData, setLoadData] = useState<any>({});
  const [loadDataDone, setLoadDataDone] = useState<any>([]);
  const [searchValue, setSearchValue] = useState<any>("");
  const gf = new GlobalFunction();

  const loadDatafromServer = () => {
    const fakedata = [
      {
        id: 1,
        code: "M19999",
        namex: "Tóng Mỹ Linh",
        avatar: "https://i.pravatar.cc/500",
        gender: "female",
        birthday: "2000-02-13",
        verify: "yes",
        dist: "Quận Tân Bình",
        city: "HCM",
        country: "Việt Nam",
        aboutme: "La nguoi song noi tam",
        ifind: "Nguoi huong ngoai",
      },
      {
        id: 1,
        code: "M99998",
        namex: "Tóng Mỹ Linh",
        avatar: "https://i.pravatar.cc/500",
        gender: "male",
        birthday: "2000-02-13",
        verify: "yes",
        dist: "Quận Tân Bình",
        city: "HCM",
        country: "Việt Nam",
        aboutme: "La nguoi song noi tam",
        ifind: "Nguoi huong ngoai",
      },
    ];

    const url = `https://vngate.top/API/BdsPHP/out.php?sub=mm_select_with_search_order_by_code/{"dateNow":"2022-12-24","searchStr":"${searchValue}"}/`;
    console.log({ url });
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
        isOpenDrawerMenu,
        setIsOpenDrawerMenu,
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
