import React, { createContext, useEffect, useState } from "react";
interface Props {
  //children?: ReactNode;
  // any props that come into the component
}
type MyComponentProps = React.PropsWithChildren<{}>;
export const AppContext = createContext<any>({});
export const AppProvider = ({ children }: MyComponentProps) => {
  const [openDrawerMenu, setOpenDrawerMenu] = useState(false);
  const [openDrawerProduct, setOpenDrawerProduct] = useState(false);
  const [idProduct, setIdProduct] = useState("");
  const [searchText, setSearchText] = useState("");

  const apartment = [
    {
      productID: "H0001",
      Location: "Thao Dien, D2 - hCM",
      Desription: "Gym, Pool, Bancolny",
      productPrice: 12000000,
      productStyle: "rent",
      productType: "rent",
      productAvailable: "22/02/2023",
      productUpdate: "11/11/2022",
      ownerPhone: "0907852416",
      ownerGroup: "http://zalo.me/groupTN",
    },
    {
      productID: "H0002",
      Location: "Thao Dien, D2 - hCM",
      Desription: "Gym, Pool, Bancolny",
      productPrice: 12000000,
      productType: "rent",
      ownerPhone: "0907852416",
      ownerGroup: "http://zalo.me/groupTN",
    },
  ];
  const [apartments, setApartments] = useState(apartment);
  async function loadData() {
    const url = `https://homeviet.top//api/WebApp/outMain.php?sub=getProduct/${searchText}`;
    await fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        json.map((value: any) => {
          setApartments(json);
        });
      })
      .catch((err) => {
        /* return { "errorDev:": err }; */
        console.log({ "errorDev:": err });
      });
  }

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
        idProduct,
        setIdProduct,
        apartments,
        setApartments,
        searchText,
        setSearchText,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
