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
import { MouseLogitech } from "../pages/Modal/MouseLogitech";
import { MouseRazer } from "../pages/Modal/MouseRazer";
import { MouseMicrosoft } from "../pages/Modal/MouseMicrosoft";
import { MouseSteelSeries } from "../pages/Modal/MouseSteelSeries";
import { MouseRoccat } from "../pages/Modal/MouseRoccat";
import { MouseAsus } from "../pages/Modal/MouseAsus";
import { MouseHyperX } from "../pages/Modal/MouseHyperx";
import { MouseCorsair } from "../pages/Modal/MouseCorsair";
import { MouseLenovo } from "../pages/Modal/MouseLenovo";
import { MouseZowie } from "../pages/Modal/MouseZowie";
import { MouseMSI } from "../pages/Modal/MouseMSI";
import { MouseRedroger } from "../pages/Modal/MouseRedRoger";
import { MonitorAcer } from "../pages/Modal/MonitorAcer";
import { MonitorAsus } from "../pages/Modal/MonitorAsus";
import { MonitorDell } from "../pages/Modal/MonitorDell";
import { MonitorGigabayte } from "../pages/Modal/MonitorGigabayte";
import { MonitorLG } from "../pages/Modal/MonitorLG";
import { MonitorMSI } from "../pages/Modal/MonitorMSI";
import { MonitorSamsung } from "../pages/Modal/MonitorSamsung";
import { PrinterHp } from "../pages/Modal/PrinterHP";
import { PrinterCanon } from "../pages/Modal/PrinterCanon";

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
      <Route path="/logitech" element={<MouseLogitech/>}/>
      <Route path="/razer" element={<MouseRazer/>}/>
      <Route path="/microsoft" element={<MouseMicrosoft/>}/>
      <Route path="/steelseries" element={<MouseSteelSeries/>}/>
      <Route path="/roccat" element={<MouseRoccat/>}/>
      <Route path="/asus" element={<MouseAsus/>}/>
      <Route path="/hyperx" element={<MouseHyperX/>}/>
      <Route path="/corsair" element={<MouseCorsair/>}/>
      <Route path="/mouse_lenovo" element={<MouseLenovo/>}/>
      <Route path="/zowie" element={<MouseZowie/>}/>
      <Route path="/msi" element={<MouseMSI/>}/>
      <Route path="/redroger" element={<MouseRedroger/>}/>
      <Route path="/monitor_acer" element={<MonitorAcer/>}/>
      <Route path="/monitor_asus" element={<MonitorAsus/>}/>
      <Route path="/monitor_dell" element={<MonitorDell/>}/>
      <Route path="/monitor_gigabayte" element={<MonitorGigabayte/>}/>
      <Route path="/monitor_lg" element={<MonitorLG/>}/>
      <Route path="/monitor_msi" element={<MonitorMSI/>}/>
      <Route path="/monitor_samsung" element={<MonitorSamsung/>}/>
      <Route path="/printer_hp" element={<PrinterHp/>}/>
      <Route path="/printer_canon" element={<PrinterCanon/>}/>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};