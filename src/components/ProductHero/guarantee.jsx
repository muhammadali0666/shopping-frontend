import "./hero.css";
import Guar from "../../assets/img/guarante.png";
import Update from "../../assets/img/update.png";

export const Guarantee = () => {
  return (
    <div className="guarantee">
      <h4 className="guarantee_paragraph">Гарантия</h4>
      <div className="guarantee_box">
        <img
          src={Guar}
          alt="icon"
          className="guarantee_img"
          width={24}
          height={24}
        />
        <p className="guarantee_p">36 месяцев</p>
      </div>
      <div className="guarantee_box">
        <img
          src={Update}
          alt="icon"
          className="guarantee_img"
          width={24}
          height={24}
        />
        <p className="guarantee_p">Обмен/возврат товара в течение 14 дней</p>
      </div>
    </div>
  );
};
