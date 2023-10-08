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
              <NavLink to={"/control_nout_all_c"} className="sidebar_box">
                <img
                  src={Laptop}
                  alt="icon"
                  className="sidebar_img"
                  width={20}
                  height={24}
                />
                <p className="sidebar_p">Noutbuklar</p>
              </NavLink>
            </li>
          </Accordion.Body>
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
              <NavLink to={"/control_printer"} className="sidebar_box">
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
              <NavLink to={"/control_printer_hp"} className="sidebar_box">
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
              <NavLink to={"/control_printer_canon"} className="sidebar_box">
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
              <NavLink to={"/control_printer_xerox"} className="sidebar_box">
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
              <NavLink to={"/control_printer_brother"} className="sidebar_box">
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
              <NavLink to={"/control_printer_epson"} className="sidebar_box">
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
              <NavLink to={"/control_kalonka"} className="sidebar_box">
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
              <NavLink to={"/control_router"} className="sidebar_box">
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
              <NavLink to={"/control_router_tp_link"} className="sidebar_box">
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
              <NavLink to={"/control_router_tenda"} className="sidebar_box">
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
              <NavLink to={"/control_router_netis"} className="sidebar_box">
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
              <NavLink to={"/control_router_microtik"} className="sidebar_box">
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
              <NavLink to={"/control_router_huawei"} className="sidebar_box">
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
              <NavLink to={"/control_router_xiaomi"} className="sidebar_box">
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
              <NavLink to={"/control_router_cisco"} className="sidebar_box">
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
              <NavLink to={"/control_router_siklu"} className="sidebar_box">
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
              <NavLink to={"/control_router_mercusys"} className="sidebar_box">
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
              <NavLink to={"/control_router_snr"} className="sidebar_box">
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
              <NavLink to={"/control_mouse"} className="sidebar_box">
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
              <NavLink to={"/control_mouse_logitech"} className="sidebar_box">
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
              <NavLink to={"/control_mouse_rizer"} className="sidebar_box">
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
              <NavLink to={"/control_mouse_microsoft"} className="sidebar_box">
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
              <NavLink
                to={"/control_mouse_stell_series"}
                className="sidebar_box"
              >
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
              <NavLink to={"/control_mouse_roccat"} className="sidebar_box">
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
              <NavLink to={"/control_mouse_asus"} className="sidebar_box">
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
              <NavLink to={"/control_mouse_hyperx"} className="sidebar_box">
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
              <NavLink to={"/control_mouse_corsair"} className="sidebar_box">
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
              <NavLink to={"/control_mouse_lenovo"} className="sidebar_box">
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
              <NavLink to={"/control_mouse_zowei"} className="sidebar_box">
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
              <NavLink to={"/control_mouse_msi"} className="sidebar_box">
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
              <NavLink to={"/control_mouse_redroger"} className="sidebar_box">
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
