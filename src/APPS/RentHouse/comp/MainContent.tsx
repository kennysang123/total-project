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
import { formatVND, textLen, price, logo, chatLeft } from "../css/style";
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
              setIdProduct(props.props.productID);
            }}
          >
            <Typography
              sx={{
                height: "170px",
                width: "100%",
                display: "flex",
              }}
              component="div"
              color="text.secondary"
            >
              <Typography
                sx={{
                  height: "170px",
                  width: "40%",
                  backgroundImage:
                    "url(https://house.homeviet.top/chdv/" +
                    props.props.productID +
                    "/photos/1.jpg)",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                color="text.secondary"
                component="div"
                variant="body2"
              ></Typography>
              <Typography
                sx={{
                  height: "150px",
                  width: "60%",
                }}
                component="div"
              >
                <Typography
                  sx={{ marginLeft: "5px", ...textLen }}
                  color="text.secondary"
                  component="div"
                  variant="body2"
                >
                  <b>Type:</b> {props.props.productStyle} (
                  {props.props.productBed}Bed - {props.props.productBad}Wc)
                </Typography>
                <Typography
                  sx={{ marginLeft: "5px", ...price }}
                  color="text.secondary"
                  component="div"
                  variant="body2"
                >
                  <b>Code:</b> {props.props.productID}
                </Typography>
                <Typography
                  sx={{ marginLeft: "5px", ...textLen }}
                  color="text.secondary"
                  component="div"
                  variant="body2"
                >
                  <b>Location:</b> {props.props.productLocation}
                </Typography>

                <Typography
                  sx={{ marginLeft: "5px", ...textLen }}
                  color="text.secondary"
                  component="div"
                  variant="body2"
                >
                  <b>Utilities:</b> {props.props.productDesription}
                </Typography>
                <Typography
                  sx={{ marginLeft: "5px", ...textLen }}
                  color="text.secondary"
                  component="div"
                  variant="body2"
                >
                  <b>Available:</b> {props.props.productAvailable}
                </Typography>
                <Typography
                  sx={{ marginLeft: "5px", ...textLen }}
                  color="text.secondary"
                  component="div"
                  variant="body2"
                >
                  <b>Update:</b> {props.props.productUpdate}
                </Typography>
                <Typography
                  sx={{ marginLeft: "5px", ...textLen, ...price }}
                  color="text.secondary"
                  component="div"
                  variant="body2"
                >
                  <b>Price:</b>
                  {formatVND(props.props.productPrice)}
                  /Month
                </Typography>
                <Typography
                  sx={{ marginLeft: "5px", ...textLen, ...price }}
                  color="text.secondary"
                  component="div"
                  variant="body2"
                >
                  <Chip label="house.homeviet.top" size="small" sx={logo} />
                </Typography>
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
          <List sx={{ marginTop: "80px" }}>
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
