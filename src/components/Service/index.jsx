import "./service.css";
import Settings from "../../assets/img/settings.png";
import Pay from "../../assets/img/money.png";
import Delivery from "../../assets/img/Delivery.png";
import Guarante from "../../assets/img/Guarantee.png";
import Price from "../../assets/img/Price.png";
import Achievement from "../../assets/img/Achievement.png";
import Operator from "../../assets/img/Manager.png";

export const Service = () => {
  return (
    <div className="service">
      <ul className="service_list">
        <li className="service_item">
          <img
            src={Settings}
            alt="icon"
            className="service_img"
            width={50}
            height={50}
          />
          <p className="service_p">Бесплатная сборка</p>
        </li>
        <li className="service_item">
          <img
            src={Pay}
            alt="icon"
            className="service_img"
            width={54}
            height={48}
          />
          <p className="service_p">Рассрочка 4 мес./0% без переплат</p>
        </li>
        <li className="service_item">
          <img
            src={Delivery}
            alt="icon"
            className="service_img"
            width={60}
            height={40}
          />
          <p className="service_p">Бесплатная доставка</p>
        </li>
        <li className="service_item">
          <img
            src={Guarante}
            alt="icon"
            className="service_img"
            width={52}
            height={48}
          />
          <p className="service_p">Официальная гарантия</p>
        </li>
        <li className="service_item">
          <img
            src={Price}
            alt="icon"
            className="service_img"
            width={60}
            height={44}
          />
          <p className="service_p">Лучшая цена</p>
        </li>
        <li className="service_item">
          <img
            src={Achievement}
            alt="icon"
            className="service_img"
            width={51}
            height={60}
          />
          <p className="service_p">11 лет на рынке</p>
        </li>
        <li className="service_item">
          <img
            src={Operator}
            alt="icon"
            className="service_img"
            width={43}
            height={60}
          />
          <p className="service_p">Профессиональная консультация</p>
        </li>
      </ul>
    </div>
  );
};
