import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StoreSale from "./APPS/StoreSale/StoreSale";
import Dark1 from "./APPS/Dark/Dark1";

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

          {/* <Route path="/" element={<CFD />} /> */}
          <Route path="/" element={<StoreSale />} />
          <Route path="/dark1" element={<Dark1 />} />

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
      </Router>
    </>
  );
}

export default App;
