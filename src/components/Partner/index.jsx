import "./partner.css";
import Hp from "../../assets/img/hp.png";
import Lenovo from "../../assets/img/lenovo.png";

export const Partner = () => {
  return (
    <div className="partner">
      <div className="container">
        <div className="partner_inner">
          <h2 className="partner_paragraph">Партнеры</h2>
          <ul className="partner_list">
            <li className="partner_item">
              <img
                src={Hp}
                alt="icon"
                className="partner_img"
                width={46}
                height={46}
              />
            </li>
            <li className="partner_item">
              <img
                src={Lenovo}
                alt="icon"
                className="partner_img"
                width={91}
                height={30}
              />
            </li>
            <li className="partner_item">
              <img
                src={Hp}
                alt="icon"
                className="partner_img"
                width={46}
                height={46}
              />
            </li>
            <li className="partner_item">
              <img
                src={Lenovo}
                alt="icon"
                className="partner_img"
                width={91}
                height={30}
              />
            </li>
            <li className="partner_item">
              <img
                src={Hp}
                alt="icon"
                className="partner_img"
                width={46}
                height={46}
              />
            </li>
            <li className="partner_item">
              <img
                src={Lenovo}
                alt="icon"
                className="partner_img"
                width={91}
                height={30}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
