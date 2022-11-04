import React from "react";

const AppContextInit = {
  AllowPets: false,
  Balcony: false,
  Bathtup: false,
  Elevator: false,
  InternetWifi: false,
  Parking: false,
  SecurityCamera: false,
  WashingMachine: false,
};
let AppContext = {
  AllowPets: true,
  Balcony: false,
  Bathtup: false,
  Elevator: false,
  InternetWifi: false,
  Parking: false,
  SecurityCamera: false,
  WashingMachine: false,
};

/* 
Utilities UtilitiesAround Furnitures

a Allow Pets


b Balcony
c Bathtup
d BBQ
e Elevator
f Garage
g Garden
h Gym
i Internet/Wifi
j Jacuzzi
k Lobby
l Nice View
m Parking
n Rooftop
o Sauna Room
p Security Camera
q Swimming Pool
r Washing Machine
s Windown */

const UtilitiesAround = [
  {
    labelX: "ATM",
    idX: "ATM",
    nameX: "ATM",
    checkX: "ATM",
  },
  {
    labelX: "Cannal",
    idX: "Cannal",
    nameX: "Cannal",
    checkX: "Cannal",
  },
  {
    labelX: "Hospital",
    idX: "Hospital",
    nameX: "Hospital",
    checkX: "Hospital",
  },
  {
    labelX: "Ministop",
    idX: "Ministop",
    nameX: "Ministop",
    checkX: "Ministop",
  },
  {
    labelX: "Park",
    idX: "Park",
    nameX: "Park",
    checkX: "Park",
  },
  /* a ATM/ ATM
b Cannal/ Kênh nước
c Hospital/ Bệnh Viện
d Ministop/ Cửa Hàng Tiện Ích
e Park/ Công Viên
f Sport Center/ Trung Tâm TDTT
g Supermarket/ Siêu Thị */
  {
    labelX: "Sport Center",
    idX: "SportCenter",
    nameX: "SportCenter",
    checkX: "SportCenter",
  },
  {
    labelX: "Super Market",
    idX: "SuperMarket",
    nameX: "SuperMarket",
    checkX: "SuperMarket",
  },
];
const Furnitures = [
  {
    labelX: "Air-conditioner",
    idX: "AirConditioner",
    nameX: "AirConditioner",
    checkX: "AirConditioner",
  },
  {
    labelX: "Bed",
    idX: "Bed",
    nameX: "Bed",
    checkX: "Bed",
  },
  {
    labelX: "Cooker Hood",
    idX: "CookerHood",
    nameX: "CookerHood",
    checkX: "CookerHood",
  },

  {
    labelX: "Dining Subtances",
    idX: "DiningSubtances",
    nameX: "DiningSubtances",
    checkX: "DiningSubtances",
  },
  {
    labelX: "Dining Table",
    idX: "DiningTable",
    nameX: "DiningTable",
    checkX: "DiningTable",
  },
  {
    labelX: "Dressing Table",
    idX: "DressingTable",
    nameX: "DressingTable",
    checkX: "DressingTable",
  },
  {
    labelX: "Dryer",
    idX: "Dryer",
    nameX: "Dryer",
    checkX: "Dryer",
  },
  {
    labelX: "Fridge",
    idX: "Fridge",
    nameX: "Fridge",
    checkX: "Fridge",
  },
  {
    labelX: "Hot Water Heater",
    idX: "HotWaterHeater",
    nameX: "HotWaterHeater",
    checkX: "HotWaterHeater",
  },
  /* a Air-conditioner/ Máy Lạnh
b Bed/ Giường
c Cooker Hood/ Máy Hút Mùi
d Dining Subtances/ Dụng Cụ Ăn Uống
e Dining Table/ Bàn Ăn
f Dressing Table/ Bàn Trang Điểm
g Dryer/ Máy Sấy
h Fridge/ Tủ Lạnh
i Hot Water Heater/ Máy Nước Nóng
j Iron/ Bàn Ủi
k Mattress/ Nệm
l Microwave/ Lò Vi Sóng
m Oven/ Lò Nướng
n Shower/ Vòi Sen
o Sofa/ Sofa
p Stove/ Bếp
q TV/ TV
r Wardrobe/ Tủ Quần Áo
s Working Desk/ Bàn Làm Việc */
  {
    labelX: "Ironing Board",
    idX: "IroningBoard",
    nameX: "IroningBoard",
    checkX: "IroningBoard",
  },
  {
    labelX: "Mattress",
    idX: "Mattress",
    nameX: "Mattress",
    checkX: "Mattress",
  },
  {
    labelX: "Oven",
    idX: "Oven",
    nameX: "Oven",
    checkX: "Oven",
  },
  {
    labelX: "Shower",
    idX: "Shower",
    nameX: "Shower",
    checkX: "Shower",
  },
  {
    labelX: "Sofa",
    idX: "Sofa",
    nameX: "Sofa",
    checkX: "Sofa",
  },
  {
    labelX: "Stove",
    idX: "Stove",
    nameX: "Stove",
    checkX: "Stove",
  },
  {
    labelX: "TV",
    idX: "TV",
    nameX: "TV",
    checkX: "TV",
  },
  {
    labelX: "Wardrobe",
    idX: "Wardrobe",
    nameX: "Wardrobe",
    checkX: "Wardrobe",
  },
  {
    labelX: "Working Desk",
    idX: "WorkingDesk",
    nameX: "WorkingDesk",
    checkX: "WorkingDesk",
  },
];

const Fee = {
  Electric: { price: 1000, person: null },
  Water: { price: 1000, person: null },
  Network: { price: 1000, person: null },
  TVCable: { price: 1000, person: null },
  Parking: { price: 1000, person: null },
  Desposit: { price: 1000, person: null },
};
const ServiceFree = {
  Washing: { times: 2, every: "week" },
  Clearning: { times: 2, every: "week" },
};
/* 
ElectricFee	WaterFee	NetworkFee	TVCabFee	ParkingFee	DepositFee	ServiceFee
						
						
						
{ "price" :4000, "person": ""}	{ "price" :free, "person": ""}	{ "price" :free, "person": ""}	{ "price" :free, "person": ""}	{ "price" :23000, "person": 45000 }	{ "price" :23000, "num": 1 }	
{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "num": 1 }	
{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "num": 1 }	
{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "num": 1 }	
{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "num": 1 }	
{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "num": 1 }	
{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "num": 1 }	
{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "num": 1 }	
{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "num": 1 }	
{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "num": 1 }	
{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "num": 1 }	
{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "person": 45000 }	{ "price" :23000, "num": 1 }	
*/

/* a Allow Pets


b Balcony
c Bathtup
d BBQ
e Elevator
f Garage
g Garden
h Gym
i Internet/Wifi
j Jacuzzi
k Lobby
l Nice View
m Parking
n Rooftop
o Sauna Room
p Security Camera
q Swimming Pool
r Washing Machine
s Windown */
const TienIch = [
  {
    labelX: "Allow Pets",
    idX: "AllowPets",
    nameX: "AllowPets",
    checkX: "AllowPets",
  },
  { labelX: "Balcony", idX: "Balcony", nameX: "Balcony", checkX: "Balcony" },
  { labelX: "Bathtup", idX: "Bathtup", nameX: "Bathtup", checkX: "Bathtup" },
  { labelX: "BBQ", idX: "BBQ", nameX: "BBQ", checkX: "BBQ" },

  {
    labelX: "Elevator",
    idX: "Elevator",
    nameX: "Elevator",
    checkX: "Elevator",
  },
  {
    labelX: "Garage",
    idX: "Garage",
    nameX: "Garage",
    checkX: "Garage",
  },
  {
    labelX: "Garden",
    idX: "Garden",
    nameX: "Garden",
    checkX: "Garden",
  },
  {
    labelX: "Gym",
    idX: "Gym",
    nameX: "Gym",
    checkX: "Gym",
  },
  {
    labelX: "Internet-Wifi",
    idX: "InternetWifi",
    nameX: "InternetWifi",
    checkX: "InternetWifi",
  },
  {
    labelX: "Jacuzzi",
    idX: "Jacuzzi",
    nameX: "Jacuzzi",
    checkX: "Jacuzzi",
  },
  { labelX: "Lobby", idX: "Lobby", nameX: "Lobby", checkX: "Lobby" },
  /* l Nice View
m Parking
n Rooftop
o Sauna Room
p Security Camera
q Swimming Pool
r Washing Machine
s Windown */
  {
    labelX: "Nice View",
    idX: "NiceView",
    nameX: "NiceView",
    checkX: "NiceView",
  },
  { labelX: "Parking", idX: "Parking", nameX: "Parking", checkX: "Parking" },
  { labelX: "Rooftop", idX: "Rooftop", nameX: "Rooftop", checkX: "Rooftop" },
  {
    labelX: "Sauna Room",
    idX: "SaunaRoom",
    nameX: "SaunaRoom",
    checkX: "SaunaRoom",
  },
  {
    labelX: "Security Camera",
    idX: "SecurityCamera",
    nameX: "SecurityCamera",
    checkX: "SecurityCamera",
  },
  {
    labelX: "Swimming Pool",
    idX: "SwimmingPool",
    nameX: "SwimmingPool",
    checkX: "SwimmingPool",
  },
  {
    labelX: "Washing Machine",
    idX: "WashingMachine",
    nameX: "WashingMachine",
    checkX: "WashingMachine",
  },
  {
    labelX: "Windown",
    idX: "Windown",
    nameX: "Windown",
    checkX: "Windown",
  },
];

export { AppContext };
export { AppContextInit };
export { TienIch };
export { Fee };
export { ServiceFree };
export { UtilitiesAround };
export { Furnitures };
