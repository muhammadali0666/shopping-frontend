import "./header.css";
import Hamburger from "../../assets/img/hamburger.png";
import User from "../../assets/img/user.png";
import Logo from "../../assets/img/logo.png";
import Katalog from "../../assets/img/Catalog.png";
import Like from "../../assets/img/like.png";
import Notification from "../../assets/img/notification.png";
import Shopping from "../../assets/img/shopping.png";
import Search from "../../assets/img/search.png";

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
                Акции
              </a>
            </li>
            <li className="header_top_item">
              <a href="#" className="header_top_item_link">
                Payment and Delivery
              </a>
            </li>
            <li className="header_top_item">
              <a href="#" className="header_top_item_link">
                Help
              </a>
            </li>
            <li className="header_top_item">
              <a href="#" className="header_top_item_link">
                Скупка Б/У
              </a>
            </li>
            <li className="header_top_item">
              <a href="#" className="header_top_item_link">
                Contact
              </a>
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
              <a href="#" className="header_top_item_link_next">
                <img src={User} alt="asdas" width={32} height={32} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="header_inner">
          {/* header_bottom  */}
          <div className="header_bottom">
            <a href="#" className="header_logo_link">
              <img src={Logo} alt="" className="header_logo" width={164} height={42}/>
            </a>
            <button className="header_btn">
              КАТАЛОГ ТОВАРОВ
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
                placeholder="search..."
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
                900000000
              </option>
            </select>
            <ul className="header_icons_list">
              <li className="header_icons_item">
                <img
                  src={Notification}
                  alt=""
                  className="header_icons_img"
                  width={46}
                  height={49}
                />
              </li>
              <li className="header_icons_item">
                <img
                  src={Like}
                  alt=""
                  className="header_icons_img"
                  width={46}
                  height={49}
                />
              </li>
              <li className="header_icons_item">
                <img
                  src={Shopping}
                  alt=""
                  className="header_icons_img"
                  width={46}
                  height={49}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
