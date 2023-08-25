import "./header.css";
import Hamburger from "../../assets/img/hamburger.png";
import User from "../../assets/img/user.png";
import Logo from "../../assets/img/logo-store.png";
import Katalog from "../../assets/img/Catalog.png";
import Like from "../../assets/img/like.png";
import Shopping from "../../assets/img/shopping-cart.png";
import Search from "../../assets/img/search.png";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="header_top">
        <div className="container header_top_inner">
          <ul className="header_top_list">
            <li className="header_top_item">
              <img src={Hamburger} alt="asdas" width={20} height={20} />
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
            <a href="#" className="header_logo_link">
              <img src={Logo} alt="" className="header_logo" width={104} height={40}/>
            </a>
            <button className="header_btn">
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
