import "./hero.css";
import Car from "../../assets/img/del-car.png";
import Info from "../../assets/img/del-info.png";
import Location from "../../assets/img/del-location.png";
import H from "../../assets/img/del-h.png";
import DelDel from "../../assets/img/del-del.png";

export const Delivery = () => {
  return (
    <div className="delivery">
      <h4 className="delivery_paragraph">Доставка</h4>
      <ul className="delivery_list">
        <li className="delivery_item">
          <div className="delivery_box">
            <img
              src={Car}
              alt="icon"
              className="del_box_img"
              width={24}
              height={24}
            />
            <p className="del_box_p">Самовывоз из магазина (Днепропетровск)</p>
          </div>
          <p className="delivery_p">Отправим сегодня</p>
          <div className="delivery_right_box">
            <p className="del_right_text">Бесплатно</p>
          </div>
        </li>
        <li className="delivery_item">
          <div className="delivery_box">
            <img
              src={Info}
              alt="icon"
              className="del_box_img"
              width={24}
              height={24}
            />
            <p className="del_box_p">Самовывоз из Justin</p>
          </div>
          <p className="delivery_p">Отправим сегодня</p>
          <div className="delivery_right_box">
            <p className="del_right_p">По тарифам перевозчика</p>
            <p className="del_right_text">Или бесплатно от 5000 грн</p>
          </div>
        </li>
        <li className="delivery_item">
          <div className="delivery_box">
            <img
              src={Location}
              alt="icon"
              className="del_box_img"
              width={32}
              height={32}
            />
            <p className="del_box_p">Самовывоз  УКРПОШТА</p>
          </div>
          <p className="delivery_p">Отправим сегодня</p>
          <div className="delivery_right_box">
            <p className="del_right_p">По тарифам перевозчика</p>
            <p className="del_right_text">Или бесплатно от 5000 грн</p>
          </div>
        </li>
        <li className="delivery_item">
          <div className="delivery_box">
            <img
              src={H}
              alt="icon"
              className="del_box_img"
              width={24}
              height={24}
            />
            <p className="del_box_p">Самовывоз из Новой Почты</p>
          </div>
          <p className="delivery_p">Отправим сегодня</p>
          <div className="delivery_right_box">
            <p className="del_right_p">По тарифам перевозчика</p>
            <p className="del_right_text">Или бесплатно от 5000 грн</p>
          </div>
        </li>
        <li className="delivery_item">
          <div className="delivery_box">
            <img
              src={DelDel}
              alt="icon"
              className="del_box_img"
              width={22}
              height={19}
            />
            <p className="del_box_p">Курьер по вашему адресу</p>
          </div>
          <p className="delivery_p">Отправим сегодня</p>
          <div className="delivery_right_box">
            <p className="del_right_p">По тарифам перевозчика</p>
            <p className="del_right_text">Бесплатно от 3000 грн</p>
          </div>
        </li>
      </ul>
    </div>
  );
};
