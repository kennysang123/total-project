import React, { useContext, useState, useEffect } from "react";
import {
  Box,
  CssBaseline,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
  Stack,
} from "@mui/material";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import VerifiedIcon from "@mui/icons-material/Verified";
import { globalCSS } from "./GlobalStyle";
import { AppContext } from "../Context/AppContext";

const fakedata = [
  {
    id: 1,
    code: "M99999",
    namex: "Tóng Mỹ Linh",
    avatar: "https://i.pravatar.cc/",
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
    avatar: "https://i.pravatar.cc/",
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

export default function MainView() {
  console.log("MainView");
  const [dataShow, setDataShow] = useState(false);
  const sizePhoto = 70;
  const getDateNow_ = () => {
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    let month2 = "";
    month <= 9 ? (month2 = "0" + month) : (month2 = month.toString());
    const date = d.getDate();
    let date2 = "";
    date <= 9 ? (date2 = "0" + date) : (date2 = date.toString());
    const fullDate = `${year}-${month2}-${date2}`;
    return fullDate;
  };

  const coverBirthDayToAge = (value: string) => {
    const yearBirth = value.substr(0, 4);
    const yearNow = getDateNow_().substr(0, 4);
    const age = Number(yearNow) - Number(yearBirth);
    return age;
  };
  const { loadData } = useContext(AppContext);
  const check1 = loadData.length;
  console.log({ check1 });
  /* useEffect(() => {
    
    return () => {};
  }, [loadData]); */

  const { setOpenUserWithID } = useContext(AppContext);

  return (
    <Box sx={{ pb: 7, pt: 7 }} /* ref={ref} */>
      <CssBaseline />
      <List>
        {check1 >= 1 &&
          loadData.map((value: any, index: number) => (
            <Stack key={index + 1}>
              <ListItem
                alignItems="flex-start"
                button
                onClick={() => setOpenUserWithID(value.code)}
              >
                <ListItemAvatar sx={{ marginRight: "10px" }}>
                  <Avatar
                    alt="Remy Sharp"
                    src={value.avatar}
                    sx={{ width: sizePhoto, height: sizePhoto }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Typography
                        sx={{ fontWeight: "bold", display: "inline" }}
                        component="div"
                        variant="subtitle1"
                        color="text.primary"
                      >
                        {value.namex + "  "}
                      </Typography>
                      <VerifiedIcon sx={{ color: globalCSS.colorVerified }} />
                      <Typography color="text.secondary">
                        <Typography component="span" fontSize={"12px"}>
                          {"Giới tính:"}
                        </Typography>
                        {value.gender === "female" && (
                          <FemaleIcon
                            sx={{
                              color: globalCSS.colorGenderGirl,
                              fontSize: 20,
                            }}
                          />
                        )}
                        {value.gender === "male" && (
                          <MaleIcon
                            sx={{
                              color: globalCSS.colorGenderBoy,
                              fontSize: 20,
                            }}
                          />
                        )}

                        <Typography component="span" fontSize={"12px"}>
                          {`— Tuổi: ${coverBirthDayToAge(value.birthday)} — ${
                            value.code
                          }`}
                        </Typography>
                      </Typography>
                    </>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {`${value.dist}, ${value.city}`}
                      </Typography>
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{
                          display: "-webkit-box",
                          overflow: "hidden",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 4,
                        }}
                      >{` — ${value.aboutme}`}</Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </Stack>
          ))}
      </List>
    </Box>
  );
}
