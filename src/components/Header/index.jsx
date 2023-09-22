import "./header.css";
import Home from "../../assets/img/home.png";
import User from "../../assets/img/user.png";
import Logo from "../../assets/img/logo-store.png";
import KatalogImg from "../../assets/img/Catalog.png";
import Like from "../../assets/img/like.png";
import Shopping from "../../assets/img/shopping-cart.png";
import Search from "../../assets/img/search.png";
import { NavLink } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Menyu } from "../Menyu";
import { Katalog } from "../Katalog";
import Checked from "../../assets/img/checked.png";

export const Header = () => {
  const [lgShow, setLgShow] = useState(false);

  const getToken = localStorage.getItem("token");
  const getATN = localStorage.getItem("getATN");

  return (
    <div className="header">
      <div className="header_wrapper">
        <div className="header_top">
          <div className="container header_top_inner">
            <ul className="header_top_list">
              <li className="header_top_item">
                <NavLink to={"/"}>
                  <i class="fa-solid fa-house" style={{ color: "#bdbfc2" }}></i>
                </NavLink>
              </li>
              <li className="header_top_item">
                <a href="#" className="header_top_item_link">
                  Аksiya
                </a>
              </li>
              <li className="header_top_item">
                <a href="#" className="header_top_item_link">
                  To'lash va Yetkazib berish
                </a>
              </li>
              <li className="header_top_item">
                <a href="#" className="header_top_item_link">
                  Yordam
                </a>
              </li>
              <li className="header_top_item">
                <NavLink to={"/contact"} className="header_top_item_link">
                  Bog'lanish
                </NavLink>
              </li>
            </ul>
            <ul className="header_top_list_next">
              <li className="header_top_item_next">
                <a href="#" className="header_top_item_link_next">
                  Uz
                </a>
                <a href="#" className="header_top_item_link_next">
                  /
                </a>
                <a href="#" className="header_top_item_link_next">
                  Eng
                </a>
              </li>
              <li className="header_top_item_next">
                <NavLink
                  to={"/register"}
                  href="#"
                  className="header_top_item_link_next"
                >
                  {getToken ? (
                    <img src={Checked} alt="img" width={26} height={26} />
                  ) : (
                    <img src={User} alt="icon" width={32} height={32} />
                  )}
                </NavLink>
              </li>
              {getATN ? (
                <li className="header_top_item_next">
                  <NavLink
                    to={"/admin_control"}
                    href="#"
                    className="header_top_item_link_next"
                  >
                    <p className="admin_text">admin</p>
                  </NavLink>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="header_inner">
            {/* header_bottom  */}
            <div className="header_bottom">
              <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                className="modal"
                // style={{height: "100vh", overflowY: "scroll"}}
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg">
                    Mahsulot turlari
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div
                    className="katalog_wrapper"
                    style={{ height: "60vh", overflowY: "scroll" }}
                  >
                    <Menyu />
                    <Katalog />
                  </div>
                </Modal.Body>
              </Modal>

              <a href="#" className="header_logo_link">
                <img
                  src={Logo}
                  alt=""
                  className="header_logo"
                  width={104}
                  height={40}
                />
              </a>
              <button className="header_btn" onClick={() => setLgShow(true)}>
                Mahsulot turlari
                <img
                  src={KatalogImg}
                  alt="katalog"
                  className="katalog_img"
                  width={24}
                  height={24}
                />
              </button>
              <form className="header_form">
                <input
                  type="text"
                  className="header_input"
                  placeholder="Qidirish..."
                />
                <button className="header_search_btn">
                  <img
                    src={Search}
                    alt="search"
                    className="header_btn_img"
                    width={24}
                    height={24}
                  />
                </button>
              </form>
              <select className="header_select">
                <option value="" className="header_option">
                  (90) 456 50 25
                </option>
              </select>
              <ul className="header_icons_list">
                <li className="header_icons_item">
                  <img
                    src={Like}
                    alt=""
                    className="header_icons_img"
                    width={30}
                    height={30}
                  />
                </li>
                <li className="header_icons_item">
                  <img
                    src={Shopping}
                    alt=""
                    className="header_icons_img"
                    width={30}
                    height={30}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
