import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Aboutus from "./Components/Aboutus";
import Contactus from "./Components/Contactus";
import New from "./Components/Products/New";
import Featured from "./Components/Products/Featured";
import OrderSummary from "./Components/OrderSummary";
import User from "./Components/User/User";
import Userdetails from "./Components/User/Userdetails";
import Admin from "./Components/User/Admin";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/products" element={<Products />}>
          <Route path="new" element={<New />} />
          <Route path="featured" element={<Featured />} />
          <Route index element={<New />} />
        </Route>
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/users" element={<User />}>
          <Route path=":userId" element={<Userdetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
