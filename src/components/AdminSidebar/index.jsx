import Accordion from "react-bootstrap/Accordion";
import Proccessor from "../../assets/img/Processor.png";
import Monitor from "../../assets/img/monitor.png";
import "./admin.css";
import { NavLink } from "react-router-dom";
import Kampitur from "../../assets/img/komiputer.png";
import Laptop from "../../assets/img/laptop.png";
import Controller from "../../assets/img/controller.png";
import Two from "../../assets/img/2.png";
import Three from "../../assets/img/3.png";
import Four from "../../assets/img/4.png";
import Five from "../../assets/img/5.png";
import Mouse from "../../assets/img/mouse.png";

export const AdminSidebar = () => {
  return (
    <div className="sidebar">
      <p className="sidebar_paragraph">Admin Panel</p>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <li className="sidebar_item" style={{ border: "none" }}>
              <img
                src={Proccessor}
                alt="icon"
                className="sidebar_img"
                width={20}
                height={20}
              />
              <p className="sidebar_p">Kompyuter komponentlari</p>
            </li>
          </Accordion.Header>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/admin_control"} className="sidebar_box">
                <img
                  src={Proccessor}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Kompyuter komponentlari</p>
              </NavLink>
            </li>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <li className="sidebar_item" style={{ border: "none" }}>
              <img
                src={Monitor}
                alt="icon"
                className="sidebar_img"
                width={20}
                height={24}
              />
              <p className="sidebar_p">Моnitorlar</p>
            </li>
          </Accordion.Header>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/control_monitor"} className="sidebar_box">
                <img
                  src={Monitor}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Monitorlar</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/control_monitor_acer"} className="sidebar_box">
                <img
                  src={Monitor}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Acer</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/control_monitor_asus"} className="sidebar_box">
                <img
                  src={Monitor}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Asus</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/control_monitor_dell"} className="sidebar_box">
                <img
                  src={Monitor}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Dell</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/control_monitor_gigabayte"} className="sidebar_box">
                <img
                  src={Monitor}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Gigabayte</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/control_monitor_lg"} className="sidebar_box">
                <img
                  src={Monitor}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">LG</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/control_monitor_msi"} className="sidebar_box">
                <img
                  src={Monitor}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">MSI</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/control_monitor_samsung"} className="sidebar_box">
                <img
                  src={Monitor}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Samsung</p>
              </NavLink>
            </li>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <li className="sidebar_item" style={{ border: "none" }}>
              <img
                src={Kampitur}
                alt="icon"
                className="sidebar_img"
                width={20}
                height={20}
              />
              <p className="sidebar_p">Kompyterlar</p>
            </li>
          </Accordion.Header>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/control_computer"} className="sidebar_box">
                <img
                  src={Kampitur}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Kompyterlar</p>
              </NavLink>
            </li>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <li className="sidebar_item" style={{ border: "none" }}>
              <img
                src={Laptop}
                alt="icon"
                className="sidebar_img"
                width={20}
                height={24}
              />
              <p className="sidebar_p">Noutbuklar</p>
            </li>
          </Accordion.Header>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/control_nout_macbook"} className="sidebar_box">
                <img
                  src={Laptop}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">MacBook</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/control_nout_asus"} className="sidebar_box">
                <img
                  src={Laptop}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Asus</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/contorl_nout_lenovo"} className="sidebar_box">
                <img
                  src={Laptop}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Lenovo</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/control_nout_hp"} className="sidebar_box">
                <img
                  src={Laptop}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Hp</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/control_nout_dell"} className="sidebar_box">
                <img
                  src={Laptop}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Dell</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/control_nout_acer"} className="sidebar_box">
                <img
                  src={Laptop}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Acer</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/control_nout_sony"} className="sidebar_box">
                <img
                  src={Laptop}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Sony</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/control_nout_samsung"} className="sidebar_box">
                <img
                  src={Laptop}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Samsung</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/control_nout_toshiba"} className="sidebar_box">
                <img
                  src={Laptop}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Toshiba</p>
              </NavLink>
            </li>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <li className="sidebar_item" style={{ border: "none" }}>
              <img
                src={Controller}
                alt="icon"
                className="sidebar_img"
                width={20}
                height={24}
              />
              <p className="sidebar_p">O'yin konsollari</p>
            </li>
          </Accordion.Header>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/control_nout_consol"} className="sidebar_box">
                <img
                  src={Controller}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">O'yin konsollari</p>
              </NavLink>
            </li>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <li className="sidebar_item" style={{ border: "none" }}>
              <img
                src={Two}
                alt="icon"
                className="sidebar_img"
                width={20}
                height={24}
              />
              <p className="sidebar_p">Planshetlar</p>
            </li>
          </Accordion.Header>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/control_planshet"} className="sidebar_box">
                <img
                  src={Two}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Planshetlar</p>
              </NavLink>
            </li>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            <li className="sidebar_item" style={{ border: "none" }}>
              <img
                src={Three}
                alt="icon"
                className="sidebar_img"
                width={20}
                height={24}
              />
              <p className="sidebar_p">Printerlar</p>
            </li>
          </Accordion.Header>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/printer"} className="sidebar_box">
                <img
                  src={Three}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Printerlar</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/printer_hp"} className="sidebar_box">
                <img
                  src={Three}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Hp</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/printer_canon"} className="sidebar_box">
                <img
                  src={Three}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Canon</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/printer_xerox"} className="sidebar_box">
                <img
                  src={Three}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Xerox</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/printer_brother"} className="sidebar_box">
                <img
                  src={Three}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Brother</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/printer_epson"} className="sidebar_box">
                <img
                  src={Three}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Epson</p>
              </NavLink>
            </li>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            <li className="sidebar_item" style={{ border: "none" }}>
              <img
                src={Four}
                alt="icon"
                className="sidebar_img"
                width={20}
                height={24}
              />
              <p className="sidebar_p">Kalonkalar</p>
            </li>
          </Accordion.Header>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/kalonka"} className="sidebar_box">
                <img
                  src={Four}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Kalonkalar</p>
              </NavLink>
            </li>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>
            <li className="sidebar_item" style={{ border: "none" }}>
              <img
                src={Five}
                alt="icon"
                className="sidebar_img"
                width={20}
                height={24}
              />
              <p className="sidebar_p">Tarmoq apparati</p>
            </li>
          </Accordion.Header>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/wifi"} className="sidebar_box">
                <img
                  src={Five}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Tarmoq apparati</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/tp_link"} className="sidebar_box">
                <img
                  src={Five}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">TP_Link</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/tenda"} className="sidebar_box">
                <img
                  src={Five}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Tenda</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/netis"} className="sidebar_box">
                <img
                  src={Five}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Netis</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/microtik"} className="sidebar_box">
                <img
                  src={Five}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">MicroTik</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/huawei"} className="sidebar_box">
                <img
                  src={Five}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Huawei</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/xiaomi"} className="sidebar_box">
                <img
                  src={Five}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Xiaomi</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/cisco"} className="sidebar_box">
                <img
                  src={Five}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Cisco</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/siklu"} className="sidebar_box">
                <img
                  src={Five}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Siklu</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/mercusys"} className="sidebar_box">
                <img
                  src={Five}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">MERCUSYS</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/snr"} className="sidebar_box">
                <img
                  src={Five}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">SNR</p>
              </NavLink>
            </li>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>
            <li className="sidebar_item" style={{ border: "none" }}>
              <img
                src={Mouse}
                alt="icon"
                className="sidebar_img"
                width={20}
                height={24}
              />
              <p className="sidebar_p">Sichqonchalar</p>
            </li>
          </Accordion.Header>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/mouse"} className="sidebar_box">
                <img
                  src={Mouse}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Sichqonchalar</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/mouse_logitech"} className="sidebar_box">
                <img
                  src={Mouse}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Logitech</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/mouse_rizer"} className="sidebar_box">
                <img
                  src={Mouse}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Rizer</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/mouse_microsoft"} className="sidebar_box">
                <img
                  src={Mouse}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Microsoft</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/mouse_stellseries"} className="sidebar_box">
                <img
                  src={Mouse}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">StellSeries</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/mouse_roccat"} className="sidebar_box">
                <img
                  src={Mouse}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">ROCCAT</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/mouse_asus"} className="sidebar_box">
                <img
                  src={Mouse}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Asus</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/mouse_hyperx"} className="sidebar_box">
                <img
                  src={Mouse}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">HyperX</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/mouse_corsair"} className="sidebar_box">
                <img
                  src={Mouse}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Corsair</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/mouse_lenovo"} className="sidebar_box">
                <img
                  src={Mouse}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Lenovo</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/mouse_zowei"} className="sidebar_box">
                <img
                  src={Mouse}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Zowei by BenQ</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/mouse_msi"} className="sidebar_box">
                <img
                  src={Mouse}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">MSI</p>
              </NavLink>
            </li>
          </Accordion.Body>
          <Accordion.Body>
            <li className="sidebar_item">
              <NavLink to={"/mouse_redroger"} className="sidebar_box">
                <img
                  src={Mouse}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Redroger</p>
              </NavLink>
            </li>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

{
  /* <ul className="sidebar_list">
<li className="menyu_item">
  <NavLink to={'/monitor'} className="menyu_box">
    <img
      src={Monitor}
      alt="icon"
      className="menyu_img"
      width={20}
      height={24}
    />
    <p className="menyu_p">Моnitorlar</p>
  </NavLink>
  <img
    src={Right}
    alt="motion"
    className="menyu_img_next"
    width={24}
    height={24}
  />
</li>
<li className="menyu_item">
  <NavLink to={'/computer'} className="menyu_box">
    <img
      src={Kampitur}
      alt="icon"
      className="menyu_img"
      width={24}
      height={24}
    />
    <p className="menyu_p">Kompyuterlar</p>
  </NavLink>
  <img
    src={Right}
    alt="motion"
    className="menyu_img_next"
    width={24}
    height={24}
  />
</li>
<li className="menyu_item">
  <NavLink to={'/laptop'} className="menyu_box">
    <img
      src={Laptop}
      alt="icon"
      className="menyu_img"
      width={16}
      height={24}
    />
    <p className="menyu_p">Noutbuklar</p>
  </NavLink>
  <img
    src={Right}
    alt="motion"
    className="menyu_img_next"
    width={24}
    height={24}
  />
</li>
<li className="menyu_item">
  <NavLink to={'/consol'} className="menyu_box">
    <img
      src={Controller}
      alt="icon"
      className="menyu_img"
      width={20}
      height={20}
    />
    <p className="menyu_p">O'yin konsollari</p>
  </NavLink>
  <img
    src={Right}
    alt="motion"
    className="menyu_img_next"
    width={24}
    height={24}
  />
</li>
<li className="menyu_item">
  <NavLink to={'/planshet'} className="menyu_box">
    <img
      src={Two}
      alt="icon"
      className="menyu_img"
      width={20}
      height={20}
    />
    <p className="menyu_p">Planshetlar</p>
  </NavLink>
  <img
    src={Right}
    alt="motion"
    className="menyu_img_next"
    width={24}
    height={24}
  />
</li>
<li className="menyu_item">
  <NavLink to={'/printer'} className="menyu_box">
    <img
      src={Three}
      alt="icon"
      className="menyu_img"
      width={18}
      height={24}
    />
    <p className="menyu_p">Printerlar</p>
  </NavLink>
  <img
    src={Right}
    alt="motion"
    className="menyu_img_next"
    width={24}
    height={24}
  />
</li>
<li className="menyu_item">
  <NavLink to={'/kalonka'} className="menyu_box">
    <img
      src={Four}
      alt="icon"
      className="menyu_img"
      width={20}
      height={20}
    />
    <p className="menyu_p">Kalonkalar</p>
  </NavLink>
  <img
    src={Right}
    alt="motion"
    className="menyu_img_next"
    width={24}
    height={24}
  />
</li>
<li className="menyu_item">
  <NavLink to={'/wifi'} className="menyu_box">
    <img
      src={Five}
      alt="icon"
      className="menyu_img"
      width={24}
      height={23}
    />
    <p className="menyu_p">tarmoq apparati</p>
  </NavLink>
  <img
    src={Right}
    alt="motion"
    className="menyu_img_next"
    width={24}
    height={24}
  />
</li>
<li className="menyu_item">
  <NavLink to={'/mouse'} className="menyu_box">
    <img
      src={Mouse}
      alt="icon"
      className="menyu_img"
      width={28}
      height={27}
    />
    <p className="menyu_p">mouse</p>
  </NavLink>
  <img
    src={Right}
    alt="motion"
    className="menyu_img_next"
    width={24}
    height={24}
  />
</li>
</ul> */
}
