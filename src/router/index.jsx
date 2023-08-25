import React from "react";
import { Route, Routes } from "react-router-dom";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { Error } from "../pages/Error";
import { ProductPage } from "../pages/Product";
import { ProductCharacteristic } from "../pages/ProductCharacteristic";
import { News } from "../pages/News";
import { Contact } from "../pages/Contact";

export const RouterWrapper = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<ProductPage/>}/>
      <Route path="/productCharacteristic" element={<ProductCharacteristic/>}/>
      <Route path="/news" element={<News/>} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
