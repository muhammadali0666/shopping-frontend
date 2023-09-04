import { Route, Routes } from "react-router-dom";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { Error } from "../pages/Error";
import { ProductPage } from "../pages/Product";
import { ProductCharacteristic } from "../pages/ProductCharacteristic";
import { News } from "../pages/News";
import { Contact } from "../pages/Contact";
import { CompiturComponents } from "../pages/CompiturComponents";
import { Monitors } from "../pages/Monitors";
import { Computer } from "../pages/Computer";
import { Laptops } from "../pages/Laptops";
import { Consol } from "../pages/Consol";
import { LaptopAcsessuar } from "../pages/LaptopAcsesuarlar";
import { Planshet } from "../pages/Planshet";
import { Printer } from "../pages/Printer";
import { Kalonkalar } from "../pages/Kalonkalar";
import { WiFi } from "../pages/WIFI";
import { MacBook } from "../pages/Modal/MacBook";
import { Asus } from "../pages/Modal/Asus";
import { Lenovo } from "../pages/Modal/Lenovo";
import { Hp } from "../pages/Modal/HP";
import { Dell } from "../pages/Modal/Dell";
import { Acer } from "../pages/Modal/Acer";
import { Sony } from "../pages/Modal/Sony";
import { Samsung } from "../pages/Modal/Samsung";
import { Toshiba } from "../pages/Modal/Toshiba";

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
      <Route path="/com_components" element={<CompiturComponents/>}/>
      <Route path="/monitor" element={<Monitors/>}/>
      <Route path="/computer" element={<Computer/>}/> 
      <Route path='/laptop' element={<Laptops/>} />
      <Route path="/consol" element={<Consol/>} />
      <Route path="/acsessuar" element={<LaptopAcsessuar/>}/>
      <Route path="/planshet" element={<Planshet/>}/>
      <Route path="/printer" element={<Printer/>}/> 
      <Route path="/kalonka" element={<Kalonkalar/>}/>
      <Route path="/wifi" element={<WiFi/>} />
      <Route path="/macbook" element={<MacBook/>}/>
      <Route path="/asus" element={<Asus/>}/>
      <Route path="/lenovo" element={<Lenovo/>}/> 
      <Route path="/hp" element={<Hp/>}/>
      <Route path="/dell" element={<Dell/>}/>
      <Route path="/acer" element={<Acer/>}/>
      <Route path="/sony" element={<Sony/>}/>
      <Route path="/samsung" element={<Samsung/>}/>
      <Route path="/toshiba" element={<Toshiba/>}/>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
