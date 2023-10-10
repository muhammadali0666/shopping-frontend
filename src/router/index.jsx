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
import { Mouse } from "../pages/Mouse";
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
import { PrinterXerox } from "../pages/Modal/PrinterXeroX";
import { PrinterBrother } from "../pages/Modal/PrinterBrother";
import { PrinterEpson } from "../pages/Modal/PrinterEpson";
import { RouterTPLink } from "../pages/Modal/RouterTPLink";
import { RouterTenda } from "../pages/Modal/RouterTenda";
import { RouterNetis } from "../pages/Modal/RouterNetis";
import { RouterMicroTik } from "../pages/Modal/RouterMicroTik";
import { RouterHuawei } from "../pages/Modal/RouterHuawei";
import { RouterXiaomi } from "../pages/Modal/RouterXiaomi";
import { RouterCisco } from "../pages/Modal/RouterCisco";
import { RouterSiklu } from "../pages/Modal/RouterSiklu";
import { RouterMERCUSYS } from "../pages/Modal/RouterMercusys";
import { RouterSNR } from "../pages/Modal/RouterSNR";
import { AdminPanel } from "../pages/Admin";
import { MonitorControlpage } from "../pages/AdminPages/MonitorPage";
import { ComputerControlC } from "../pages/AdminPages/ComputerC";
import { ConsolC } from "../pages/AdminPages/GameConsolC";
import { PlanshetC } from "../pages/AdminPages/PlanshetC";
import { PrinterC } from "../pages/AdminPages/PrinterC";
import { KalonkaC } from "../pages/AdminPages/KalonkaC";
import { RouterC } from "../pages/AdminPages/RouterC";
import { MouseC } from "../pages/AdminPages/MousesC";
import { NoutbookAllC } from "../pages/AdminPages/NoutbookAllC";

export const RouterWrapper = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      {/* category  */}
      <Route path="/product" element={<ProductPage />} />
      <Route
        path="/productCharacteristic"
        element={<ProductCharacteristic />}
      />
      <Route path="/news" element={<News />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/com_components" element={<CompiturComponents />} />
      <Route path="/monitor" element={<Monitors />} />
      <Route path="/computer" element={<Computer />} />
      <Route path="/laptop" element={<Laptops />} />
      <Route path="/consol" element={<Consol />} />
      <Route path="/acsessuar" element={<LaptopAcsessuar />} />
      <Route path="/planshet" element={<Planshet />} />
      <Route path="/printer" element={<Printer />} />
      <Route path="/kalonka" element={<Kalonkalar />} />
      <Route path="/wifi" element={<WiFi />} />
      <Route path="/mouse" element={<Mouse />} />
      {/* category  */}
      {/* brands  */}
      <Route path="/macbook" element={<MacBook />} />
      <Route path="/asus" element={<Asus />} />
      <Route path="/lenovo" element={<Lenovo />} />
      <Route path="/hp" element={<Hp />} />
      <Route path="/dell" element={<Dell />} />
      <Route path="/acer" element={<Acer />} />
      <Route path="/sony" element={<Sony />} />
      <Route path="/samsung" element={<Samsung />} />
      <Route path="/toshiba" element={<Toshiba />} />
      <Route path="/mouse_logitech" element={<MouseLogitech />} />
      <Route path="/mouse_razer" element={<MouseRazer />} />
      <Route path="/mouse_microsoft" element={<MouseMicrosoft />} />
      <Route path="/mouse_steelseries" element={<MouseSteelSeries />} />
      <Route path="/mouse_roccat" element={<MouseRoccat />} />
      <Route path="/mouse_asus" element={<MouseAsus />} />
      <Route path="/mouse_hyperx" element={<MouseHyperX />} />
      <Route path="/mouse_corsair" element={<MouseCorsair />} />
      <Route path="/mouse_lenovo" element={<MouseLenovo />} />
      <Route path="/mouse_zowie" element={<MouseZowie />} />
      <Route path="/mouse_msi" element={<MouseMSI />} />
      <Route path="/mouse_redroger" element={<MouseRedroger />} />
      <Route path="/monitor_acer" element={<MonitorAcer />} />
      <Route path="/monitor_asus" element={<MonitorAsus />} />
      <Route path="/monitor_dell" element={<MonitorDell />} />
      <Route path="/monitor_gigabayte" element={<MonitorGigabayte />} />
      <Route path="/monitor_lg" element={<MonitorLG />} />
      <Route path="/monitor_msi" element={<MonitorMSI />} />
      <Route path="/monitor_samsung" element={<MonitorSamsung />} />
      <Route path="/printer_hp" element={<PrinterHp />} />
      <Route path="/printer_canon" element={<PrinterCanon />} />
      <Route path="/printer_xerox" element={<PrinterXerox />} />
      <Route path="/printer_brother" element={<PrinterBrother />} />
      <Route path="/printer_epson" element={<PrinterEpson />} />
      <Route path="/tp_link" element={<RouterTPLink />} />
      <Route path="/tenda" element={<RouterTenda />} />
      <Route path="/netis" element={<RouterNetis />} />
      <Route path="/microtik" element={<RouterMicroTik />} />
      <Route path="/huawei" element={<RouterHuawei />} />
      <Route path="/xiaomi" element={<RouterXiaomi />} />
      <Route path="/cisco" element={<RouterCisco />} />
      <Route path="/siklu" element={<RouterSiklu />} />
      <Route path="/mercusys" element={<RouterMERCUSYS />} />
      <Route path="/snr" element={<RouterSNR />} />
      {/* brands  */}
      {/* admin_panel  */}
      {localStorage.getItem("getATN") ? (
        <Route path="/admin_control" element={<AdminPanel />} />
      ) : (
        <Route path="/login" element={<Login />} />
      )}
      <Route path="/control_monitor" element={<MonitorControlpage/>}/>
      <Route path="/control_computer" element={<ComputerControlC/>}/>
      <Route path="/control_nout_all_c" element={<NoutbookAllC/>}/>
      <Route path="/control_nout_consol" element={<ConsolC/>}/>
      <Route path="/control_planshet" element={<PlanshetC/>}/>
      <Route path="/control_printer" element={<PrinterC/>}/>
      <Route path="/control_kalonka" element={<KalonkaC/>}/>
      <Route path="/control_router" element={<RouterC/>}/>
      <Route path="/control_mouse" element={<MouseC/>}/>
      {/* admin_panel  */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
