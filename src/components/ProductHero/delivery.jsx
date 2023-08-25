import "./hero.css";
import Car from "../../assets/img/del-car.png";
import Info from "../../assets/img/del-info.png";
import Location from "../../assets/img/del-location.png";
import H from "../../assets/img/del-h.png";
import DelDel from "../../assets/img/del-del.png";

export const Delivery = () => {
  return (
    <div className="delivery">
      <h4 className="delivery_paragraph">Yetkazib berish</h4>
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
            <p className="del_box_p">Do'kondan olib ketish (Samarqand)</p>
          </div>
          <p className="delivery_p">Bugun yuboring</p>
          <div className="delivery_right_box">
            <p className="del_right_text">Tekinga</p>
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
            <p className="del_box_p">Samarqanddan olib ketish</p>
          </div>
          <p className="delivery_p">Bugun yuboring</p>
          <div className="delivery_right_box">
            <p className="del_right_p">Tashuvchining tariflariga ko'ra</p>
            <p className="del_right_text">Yoki 5000 so'm dan bepul</p>
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
            <p className="del_box_p">Yetkazmani olib ketish</p>
          </div>
          <p className="delivery_p">Bugun yuboramiz</p>
          <div className="delivery_right_box">
            <p className="del_right_p">Tashuvchining tariflariga ko'ra</p>
            <p className="del_right_text">Yoki 5000 so'm dan bepul</p>
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
            <p className="del_box_p">Yangi filialdan olib ketish</p>
          </div>
          <p className="delivery_p">Bugun yuboramiz</p>
          <div className="delivery_right_box">
            <p className="del_right_p">Tashuvchining tariflariga ko'ra</p>
            <p className="del_right_text">Yoki 5000 so'm dan bepul</p>
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
            <p className="del_box_p">Sizning manzilingiz bo'yicha kurer</p>
          </div>
          <p className="delivery_p">Bugun yetkazib berish</p>
          <div className="delivery_right_box">
            <p className="del_right_p">Tashuvchining tariflariga ko'ra</p>
            <p className="del_right_text">Yoki 5000 so'm dan bepul</p>
          </div>
        </li>
      </ul>
    </div>
  );
};
