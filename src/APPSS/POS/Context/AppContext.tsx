import React, { createContext, useState } from "react";

interface Props {
  //children?: ReactNode;
  // any props that come into the component
}
type MyComponentProps = React.PropsWithChildren<{}>;

export const AppContext = createContext<any>({});
export const AppProvider = ({ children }: MyComponentProps) => {
  const [isOpenDrawerReport, setIsOpenDrawerReport] = useState(false);
  return (
    <AppContext.Provider value={{ isOpenDrawerReport, setIsOpenDrawerReport }}>
      {children}
    </AppContext.Provider>
  );
};
