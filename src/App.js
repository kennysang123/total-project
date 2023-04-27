import "./App.css";

import GlobalShopeeStyles from "./Components_Shopee/GlobalShopeeStyle";
import DefaultLayout from "./Components_Shopee/Layout/DefaultLayout";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import NavBarBottom from "./Components_Shopee/NavBarBottom";
import Themes from "./pages/Themes";
import UongThuoc from "./CompDrink/UongThuoc";
import SinglePost from "./pages/SinglePost";
import MobileOnly from "./pages/MobileOnly";
import NgocThao from "./Components_Shopee/NgocThao";
import Reducer from "./pages/Reducer";
import ExFull from "./pages/ExFull";
import Admin from "./pages/Admin";
import Bds from "./pages/Bds";
import HomeVNGATE from "./pages/HomeVNGATE";
import EditJson from "./pages/Bds/comp/EditJson";
import CV_IT from "./APPSS/CV_IT";
import BDS_TWITTER from "./APPSS/BDS_TWITTER";
import RENT_VNGATE from "./APPSS/RENT_VNGATE";
import RENT_VNGATE_UP from "./APPSS/RENT_VNGATE_UP";
import BDS_VNGATE from "./APPSS/BDS_VNGATE";
import YEULACUOI_VNGATE from "./APPSS/YEULACUOI_VNGATE";
import POS from "./APPSS/POS";
import GPT3 from "./APPSS/GPT3";
import VNTECH from "./APPSS/VNTECH/VNTECH";
import TASK1 from "./APPSS/TASK1";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/yeulacuoi" element={<YEULACUOI_VNGATE />} />
          <Route path="/cvit" element={<CV_IT />} />
          <Route path="/bdstwitter" element={<BDS_TWITTER />} />
          <Route path="/rent" element={<RENT_VNGATE />} />
          <Route path="/rentup" element={<RENT_VNGATE_UP />} /> */}
          {/* <Route path="/" element={<HomeVNGATE />} /> */}
          <Route path="/task1" element={<TASK1 />} />
          <Route path="/pos" element={<POS />} />
          <Route path="/gpt3" element={<GPT3 />} />
          <Route path="/ylc" element={<YEULACUOI_VNGATE />} />
          <Route path="/" element={<VNTECH />} />

          {/* <Route path="/edit" element={<EditJson />} />
          <Route path="/bds" element={<Bds />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/exfull" element={<ExFull />} />
          <Route path="/reducer" element={<Reducer />} />
          <Route path="/product" element={<Product />} />
          <Route path="/post" element={<SinglePost />} />
          <Route path="/mobi" element={<MobileOnly />} />

          <Route path="/product/:productId" element={<Product />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/themes" element={<Themes />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
        {/* <NavBarBottom /> */}
      </Router>
    </>
  );
}

export default App;
