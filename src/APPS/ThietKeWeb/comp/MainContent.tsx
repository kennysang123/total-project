import React, { useState, useContext } from "react";
import {
  Box,
  Typography,
  Chip,
  Divider,
  ListItem,
  ListItemButton,
  List,
} from "@mui/material";

/* War3Input */
import {
  formatVND,
  textLen,
  price,
  logo,
  chatLeft,
  ratio169,
  cssLogo2,
} from "../css/style";
//import { ratio169, formatVND, cssLogo2 } from "../css/style";
import { AppContext } from "../Context/AppContext";

export default function MainContent() {
  const { setOpenDrawerProduct, setIdProduct, apartments } =
    useContext(AppContext);

  const War3ChatLine = (props: any) => {
    return (
      <>
        <ListItem disablePadding>
          <ListItemButton
            sx={chatLeft}
            onClick={() => {
              setOpenDrawerProduct(true);
              setIdProduct(props.props.productName);
            }}
          >
            <Typography
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
              component="div"
              color="text.secondary"
            >
              <Typography color="text.primary" component="div" variant="h5">
                Mẫu: {props.props.productName}
              </Typography>
              <Typography
                sx={{
                  //ftp://u701203596.homeviet.top@31.220.110.150/public_html/SubWebApp/hinh/small/1.jpg
                  backgroundImage:
                    "url(https://webapp.homeviet.top/hinh/small/" +
                    props.props.productName +
                    ".jpg)",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  ...ratio169,
                }}
                color="text.secondary"
                component="div"
                variant="body2"
              >
                <Chip label={`Mẫu: ${props.props.productName}`} sx={cssLogo2} />
              </Typography>
            </Typography>
          </ListItemButton>
        </ListItem>
        <Divider />
      </>
    );
  };
  const War3ChatVieW = () => {
    const [lan1, setLan1] = useState<number>(1);
    return (
      <>
        <nav aria-label="main mailbox folders">
          <List
            sx={{
              maxWidth: "600px",
              width: "100%",
              margin: "auto",
              marginTop: "70px",
            }}
          >
            {apartments.map((value: any, index: any) => (
              <War3ChatLine key={index} props={value} />
            ))}
          </List>
        </nav>
      </>
    );
  };

  return (
    <>
      <Box sx={{ bgcolor: "background.paper", margin: "auto" }}>
        <War3ChatVieW />
      </Box>
    </>
  );
}
