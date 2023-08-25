import "./footer.css";
import { NavLink } from "react-router-dom";
import MiniWhatsap from "../../assets/img/s.png";
import MiniTelegram from "../../assets/img/M.png";
import Inst from "../../assets/img/instagram.png";
import Facebook from "../../assets/img/facebook.png";
import Whatsapp from "../../assets/img/whatsap.png";
import Youtube from "../../assets/img/youtube.png";
import Telegram from "../../assets/img/telegram.png";
import Linkedin from "../../assets/img/linkedin.png";
import Send from "../../assets/img/send.png";
import FooterLogo from "../../assets/img/logo-store.png"
import Visa from "../../assets/img/visa.png"
import Master from "../../assets/img/mastercard white.png"

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_inner">
          <div className="footer_wrapper">
            <ul className="footer_list">
              <li className="footer_item">
                <h4 href="#" className="footer_item_paragraph">
                  Ma'lumot
                </h4>
              </li>
              <li className="footer_item">
                <a href="#" className="footer_item_link">
                  Акsiya
                </a>
              </li>
              <li className="footer_item">
                <a href="#" className="footer_item_link">
                  To'lov va Yetkazib berish
                </a>
              </li>
              <li className="footer_item">
                <a href="#" className="footer_item_link">
                  Kafolat
                </a>
              </li>
              <li className="footer_item">
                <a href="#" className="footer_item_link">
                TSS
                </a>
              </li>
              <li className="footer_item">
                <NavLink to={'/news'} className="footer_item_link">
                  Yangiliklar
                </NavLink>
              </li>
              <li className="footer_item">
                <a href="#" className="footer_item_link">
                Blog
                </a>
              </li>
              <li className="footer_item">
                <a href="#" className="footer_item_link">
                Biz haqimizda
                </a>
              </li>
              <li className="footer_item">
                <a href="#" className="footer_item_link">
                Maxfiylik siyosati
                </a>
              </li>
              <li className="footer_item">
                <a href="#" className="footer_item_link">
                  Bog'lanish
                </a>
              </li>
            </ul>
            <ul className="footer_list">
              <li className="footer_item">
                <h4 href="#" className="footer_item_paragraph">
                Xizmatlar va xizmatlar
                </h4>
              </li>
              <li className="footer_item">
                <a href="#" className="footer_item_link">
                  Xizmat markazi
                </a>
              </li>
              <li className="footer_item">
                <a href="#" className="footer_item_link">
                Kompyuter va ofis jihozlarini ta'mirlash
                </a>
              </li>
              <li className="footer_item">
                <a href="#" className="footer_item_link">
                  kompitur bo'yicha yordam
                </a>
              </li>
              <li className="footer_item">
                <a href="#" className="footer_item_link">
                Hamkorlik
                </a>
              </li>
              <li className="footer_item">
              <NavLink to={'/'} className="footer_item_link">
                  Bosh Sahifa
                </NavLink>
              </li>
            </ul>
            <ul className="footer_list">
              <li className="footer_item">
                <h4 href="#" className="footer_item_paragraph">
                  Bog'lanish
                </h4>
              </li>
              <li className="footer_item">
                <a href="#" className="footer_item_link">
                  (90) 456-50-25 - Savdo bo'limi
                  <img
                    src={MiniWhatsap}
                    alt="icon"
                    className="footer_item_link_img"
                    width={12}
                    height={12}
                  />
                  <img
                    src={MiniTelegram}
                    alt="icon"
                    className="footer_item_link_img"
                    width={12}
                    height={12}
                  />
                </a>
              </li>
              <li className="footer_item">
                <a href="#" className="footer_item_link">
                 Dushanba-Yakshanba 9:00-19:00
                </a>
              </li>
            </ul>
            <div className="footer_box">
              <h3 className="footer_box_paragraph">Bizni kuzatib boring</h3>
              <ul className="footer_box_list">
                <li className="footer_box_item">
                  <a href="#" className="footer_box_link">
                    <img
                      src={Inst}
                      alt=""
                      className="footer_box_img"
                      width={31}
                      height={32}
                    />
                  </a>
                </li>
                <li className="footer_box_item">
                  <a href="#" className="footer_box_link">
                    <img
                      src={Whatsapp}
                      alt=""
                      className="footer_box_img"
                      width={31}
                      height={32}
                    />
                  </a>
                </li>
                <li className="footer_box_item">
                  <a href="#" className="footer_box_link">
                    <img
                      src={Telegram}
                      alt=""
                      className="footer_box_img"
                      width={31}
                      height={32}
                    />
                  </a>
                </li>
                <li className="footer_box_item">
                  <a href="#" className="footer_box_link">
                    <img
                      src={Youtube}
                      alt=""
                      className="footer_box_img"
                      width={31}
                      height={32}
                    />
                  </a>
                </li>
                <li className="footer_box_item">
                  <a href="#" className="footer_box_link">
                    <img
                      src={Linkedin}
                      alt=""
                      className="footer_box_img"
                      width={31}
                      height={32}
                    />
                  </a>
                </li>
                <li className="footer_box_item">
                  <a href="#" className="footer_box_link">
                    <img
                      src={Facebook}
                      alt=""
                      className="footer_box_img"
                      width={31}
                      height={32}
                    />
                  </a>
                </li>
              </ul>
              <h4 className="footer_box_paragraph">Chegirmalarga obuna bo'ling</h4>
              <form className="footer_box_form">
                <input
                  type="text"
                  className="footer_box_input"
                  placeholder="Укажите ваш email..."
                />
                <button className="footer_box_btn">
                  <img
                    src={Send}
                    alt=""
                    className="footer_box_btn_img"
                    width={32}
                    height={32}
                  />
                </button>
              </form>
            </div>
          </div>
          <div className="footer_bottom">
            <ul className="footer_bottom_list">
              <li className="footer_bottom_item">
                <a href="#" className="footer_logo_link">
                  <img
                    src={FooterLogo}
                    alt="icon"
                    className="footer_logo"
                    width={159}
                    height={40}
                  />
                </a>
                <p className="footer_bottom_p">
                  {new Date().getFullYear()} ZarStore onlayn-do'koni
                   huquqlar himoyalangan
                </p>
              </li>
              <li className="footer_bottom_item">
                <a href="#" className="footer_logo_link">
                  <img
                    src={Master}
                    alt="icon"
                    className="footer_logo"
                    width={50}
                    height={31}
                  />
                </a>
                <a href="#" className="footer_logo_link">
                  <img
                    src={Visa}
                    alt="icon"
                    className="footer_logo"
                    width={50}
                    height={32}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
