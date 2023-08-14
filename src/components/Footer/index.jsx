import "./footer.css";
import MiniWhatsap from "../../assets/img/s.png";
import MiniTelegram from "../../assets/img/M.png";
import Inst from "../../assets/img/instagram.png";
import Facebook from "../../assets/img/facebook.png";
import Whatsapp from "../../assets/img/whatsap.png";
import Youtube from "../../assets/img/youtube.png";
import Telegram from "../../assets/img/telegram.png";
import Linkedin from "../../assets/img/linkedin.png";
import Send from "../../assets/img/send.png";
import FooterLogo from "../../assets/img/footer_logo.png"
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
                  Частые вопросы
                </a>
              </li>
              <li className="footer_item">
                <a href="#" className="footer_item_link">
                  Yangiliklar
                </a>
              </li>
              <li className="footer_item">
                <a href="#" className="footer_item_link">
                  Блог
                </a>
              </li>
              <li className="footer_item">
                <a href="#" className="footer_item_link">
                  О нас
                </a>
              </li>
              <li className="footer_item">
                <a href="#" className="footer_item_link">
                  Политика конфиденциальности
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
                  Услуги и сервисы
                </h4>
              </li>
              <li className="footer_item">
                <a href="#" className="footer_item_link">
                  Xizmat markazi
                </a>
              </li>
              <li className="footer_item">
                <a href="#" className="footer_item_link">
                  Магазин Б/У товара
                </a>
              </li>
              <li className="footer_item">
                <a href="#" className="footer_item_link">
                  Скупка Б/У
                </a>
              </li>
              <li className="footer_item">
                <a href="#" className="footer_item_link">
                  Ремонт ПК и оргтехники
                </a>
              </li>
              <li className="footer_item">
                <a href="#" className="footer_item_link">
                  kompitur bo'yicha yordam
                </a>
              </li>
              <li className="footer_item">
                <a href="#" className="footer_item_link">
                  Сотрудничество
                </a>
              </li>
              <li className="footer_item">
                <a href="#" className="footer_item_link">
                  Bosh sahifa
                </a>
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
                  (90) 456-50-25 - Отдел продаж
                </a>
              </li>
              <li className="footer_item">
                <a href="#" className="footer_item_link">
                  (90) 456-50-25 - Отдел продаж
                </a>
              </li>
              <li className="footer_item">
                <a href="#" className="footer_item_link">
                  (90) 456-50-25 - Отдел продаж
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
                  Днепр Европейская, 8 (бывшая Миронова 8)
                </a>
              </li>
              <li className="footer_item">
                <a href="#" className="footer_item_link">
                 Dushanba-Yakshanba 9:00-19:00
                </a>
              </li>
            </ul>
            <div className="footer_box">
              <h3 className="footer_box_paragraph">Следите за нами</h3>
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
              <h4 className="footer_box_paragraph">Подписывайтесь на скидки</h4>
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
                  {new Date().getFullYear()} Интернет-магазин ... Все
                  права защищены
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
