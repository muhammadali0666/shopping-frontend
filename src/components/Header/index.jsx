import "./header.css";
import Home from "../../assets/img/home.png";
import User from "../../assets/img/user.png";
import Logo from "../../assets/img/logo-store.png";
import Katalog from "../../assets/img/Catalog.png";
import Like from "../../assets/img/like.png";
import Shopping from "../../assets/img/shopping-cart.png";
import Search from "../../assets/img/search.png";
import { NavLink } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import Right from "../../assets/img/right.png";
import Proccessor from "../../assets/img/Processor.png";
import Monitor from "../../assets/img/monitor.png"
import Kampitur from "../../assets/img/komiputer.png"
import Laptop from "../../assets/img/laptop.png"
import Controller from "../../assets/img/controller.png"
import One from "../../assets/img/1.png"
import Two from "../../assets/img/2.png"
import Three from "../../assets/img/3.png"
import Four from "../../assets/img/4.png"
import Five from "../../assets/img/5.png"

export const Header = () => {
  const [lgShow, setLgShow] = useState(false)
  return (
    <div className="header">
      <div className="header_top">
        <div className="container header_top_inner">
          <ul className="header_top_list">
            <li className="header_top_item">
              <NavLink to={'/'}>
            <i class="fa-solid fa-house" style={{color: '#bdbfc2'}}></i>
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
              <NavLink to={'/contact'} className="header_top_item_link">
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
              <NavLink to={'/register'} href="#" className="header_top_item_link_next">
                <img src={User} alt="asdas" width={32} height={32} />
              </NavLink>
            </li>
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
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Mahsulot turlari
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="menyu">
      <ul className="menyu_list">
        <li className="menyu_item">
          <NavLink to={'/com_components'} className="menyu_box">
            <img
              src={Proccessor}
              alt="icon"
              className="menyu_img"
              width={20}
              height={20}
            />
            <p className="menyu_p">Kompyuter komponentlari</p>
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
          <NavLink to={'acsessuar'} className="menyu_box">
            <img
              src={One}
              alt="icon"
              className="menyu_img"
              width={24}
              height={12}
            />
            <p className="menyu_p">Noutbuklar uchun aksessuarlar</p>
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
      </ul>
    </div>
        </Modal.Body>
      </Modal>







            <a href="#" className="header_logo_link">
              <img src={Logo} alt="" className="header_logo" width={104} height={40}/>
            </a>
            <button className="header_btn" onClick={() => setLgShow(true)}>
              Mahsulot turlari
              <img
                src={Katalog}
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
  );
};
