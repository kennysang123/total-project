export const showLog = false;

export const ratio169 = {
  backgroundColor: "gray",
  //background: "linear-gradient(to right, red, purple)",

  position: "relative",
  width: "100%",
  //paddingTop: "56.25%" /* 16:9 Aspect Ratio */,
  //paddingTop: "75%" /* 16:9 Aspect Ratio */,
  paddingTop: "160%",
};
export const ratio43 = {
  backgroundColor: "gray",
  position: "relative",
  width: "100%",
  paddingTop: "120%",
};

export const textLen = {
  whiteSpace: "nowrap",
  width: "50vw",
  overflow: "hidden",
  textOverflow: "ellipsis",
  color: "red !importants",
};

export const price = {
  color: "#1976d2",
};
export const positionLogo = {
  position: "absolute",
  bottom: "5px",
  right: "10px",
  color: "#fdfdfd",
  fontSize: "12px",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
};
export const logo = {
  color: "#a6a6a6",
  fontSize: "12px",
};

export const chatLeft = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};
export const cssLogo2 = {
  color: "rgba(255, 255, 255, 1)",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
};
export const zalo = {
  huynhtrinh: {
    dt: "0898923886",
    name: "Huỳnh Trinh",
  },
};

export function formatVND(num: any) {
  const num2 = Number(num);
  const x = num2.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });
  return " " + x;
}
export function formatVND2(num: any) {
  const num2 = Number(num);
  const formatter = new Intl.NumberFormat("de-DE", {
    minimumFractionDigits: 0,
  });
  const formattedNum = formatter.format(num2);
  return formattedNum;
}
