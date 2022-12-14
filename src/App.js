import Navbar from "./component/Navbar";
import Product from "./component/Product";
import Cart from "./component/Cart";
import Home from "./component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleProduct from "./component/SingleProduct";
import Checkout from "./component/Checkout";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Products" element={<Product />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>

        {/* <Route path="/SingleProduct" element={<SingleProduct />}></Route> */}

        <Route path="/Products/:Productid" element={<SingleProduct />} />
        <Route path="/CheckOut" element={<Checkout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
