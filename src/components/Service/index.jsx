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
          <p className="service_p">Tekin yig'ilish</p>
        </li>
        <li className="service_item">
          <img
            src={Delivery}
            alt="icon"
            className="service_img"
            width={60}
            height={40}
          />
          <p className="service_p">Yetkazib berish uchun</p>
        </li>
        <li className="service_item">
          <img
            src={Guarante}
            alt="icon"
            className="service_img"
            width={52}
            height={48}
          />
          <p className="service_p">Rasmiy kafolat</p>
        </li>
        <li className="service_item">
          <img
            src={Price}
            alt="icon"
            className="service_img"
            width={60}
            height={44}
          />
          <p className="service_p">Eng yaxshi narx</p>
        </li>
        <li className="service_item">
          <img
            src={Achievement}
            alt="icon"
            className="service_img"
            width={51}
            height={60}
          />
          <p className="service_p">Bozorda 11 yil</p>
        </li>
        <li className="service_item">
          <img
            src={Operator}
            alt="icon"
            className="service_img"
            width={43}
            height={60}
          />
          <p className="service_p">Professional maslahat</p>
        </li>
      </ul>
    </div>
  );
};
