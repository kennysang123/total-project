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

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/cvit" element={<CV_IT />} />
          <Route path="/bdstwitter" element={<BDS_TWITTER />} />
          {/* <Route path="/" element={<HomeVNGATE />} /> */}
          <Route path="/" element={<Bds />} />

          <Route path="/edit" element={<EditJson />} />
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
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <NavBarBottom /> */}
      </Router>
    </>
  );
}

export default App;
