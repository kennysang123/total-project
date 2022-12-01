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

function App() {
  const nav = {
    home: { path: "/", comp: <MobileOnly /> },
    mobi: { path: "/", comp: <MobileOnly /> },
  };
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/" element={<MobileOnly />} /> */}
          <Route path={nav.home.path} element={nav.home.comp} />
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
