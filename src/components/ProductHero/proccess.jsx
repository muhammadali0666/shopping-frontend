import "./hero.css";
import True from "../../assets/img/true.png";
import Like from "../../assets/img/like.png";

export const Proccess = () => {
  return (
    <div className="proccess">
      <div className="proccess_top">
        <div className="proccess_animate"></div>
        <button className="proccess_top_btn">
          <img
            src={True}
            alt="icon"
            className="proccess_top_btn_img"
            width={24}
            height={24}
          />
        Sotuvda mavjud
        </button>
        <img
          src={Like}
          alt="icon"
          className="proccess_top_img"
          width={28}
          height={28}
        />
      </div>
      <div className="proccess_animate_next"></div>
      <div className="del_bottom">
        <p className="del_bottom_p">1 000 000 so'm.</p>
        <button className="del_bottom_btn">Sotib olish</button>
      </div>
    </div>
  );
};
