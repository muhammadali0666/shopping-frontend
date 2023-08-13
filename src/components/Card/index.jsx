import "./card.css";
import Tarozi from "../../assets/img/card-tarozi.png";
import Like from "../../assets/img/card-like.png";
import Monitor from "../../assets/img/card-monitor.png";

export const Card = () => {
  return (
    <li className="card_item">
      <span className="card_span">
        <img
          src={Tarozi}
          alt="icon"
          className="card_mini_img"
          width={24}
          height={24}
        />
        <img
          src={Like}
          alt="icon"
          className="card_mini_img"
          width={24}
          height={24}
        />
      </span>
      <img
        src={Monitor}
        alt="icon"
        className="card_img"
        width={218}
        height={214}
      />
      <p className="card_p">Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)</p>
      <p className="card_text">Отзывов: 0</p>
      <div className="card_box">
        <p className="card_price">3500 грн.</p>
        <button className="card_btn btn btn-success">КУПИТЬ</button>
      </div>
    </li>
  );
};
