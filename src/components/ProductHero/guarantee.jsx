import "./hero.css";
import Guar from "../../assets/img/guarante.png";
import Update from "../../assets/img/update.png";

export const Guarantee = () => {
  return (
    <div className="guarantee">
      <h4 className="guarantee_paragraph">Kafolat</h4>
      <div className="guarantee_box">
        <img
          src={Guar}
          alt="icon"
          className="guarantee_img"
          width={24}
          height={24}
        />
        <p className="guarantee_p">36 oylar</p>
      </div>
      <div className="guarantee_box">
        <img
          src={Update}
          alt="icon"
          className="guarantee_img"
          width={24}
          height={24}
        />
        <p className="guarantee_p">14 kun ichida tovarlarni almashtirish / qaytarish</p>
      </div>
    </div>
  );
};
