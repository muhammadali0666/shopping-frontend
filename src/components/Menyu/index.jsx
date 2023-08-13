import "./menyu.css";
import Right from "../../assets/img/right.png";
import Proccessor from "../../assets/img/Processor.png";
import Monitor from "../../assets/img/monitor.png"
import Kampitur from "../../assets/img/komiputer.png"
import Laptop from "../../assets/img/laptop.png"
import Controller from "../../assets/img/controller.png"
import One from "../../assets/img/1.png"
import Two from "../../assets/img/2.png"
import Three from "../../assets/img/3.png"
import Four from "../../assets/img/4.png"
import Five from "../../assets/img/5.png"

export const Menyu = () => {
  return (
    <div className="menyu">
      <ul className="menyu_list">
        <li className="menyu_item">
          <div className="menyu_box">
            <img
              src={Proccessor}
              alt="icon"
              className="menyu_img"
              width={20}
              height={20}
            />
            <p className="menyu_p">Комплектующие ПК</p>
          </div>
          <img
            src={Right}
            alt="motion"
            className="menyu_img_next"
            width={24}
            height={24}
          />
        </li>
        <li className="menyu_item">
          <div className="menyu_box">
            <img
              src={Monitor}
              alt="icon"
              className="menyu_img"
              width={20}
              height={24}
            />
            <p className="menyu_p">Мониторы</p>
          </div>
          <img
            src={Right}
            alt="motion"
            className="menyu_img_next"
            width={24}
            height={24}
          />
        </li>
        <li className="menyu_item">
          <div className="menyu_box">
            <img
              src={Kampitur}
              alt="icon"
              className="menyu_img"
              width={24}
              height={24}
            />
            <p className="menyu_p">Компьютеры</p>
          </div>
          <img
            src={Right}
            alt="motion"
            className="menyu_img_next"
            width={24}
            height={24}
          />
        </li>
        <li className="menyu_item">
          <div className="menyu_box">
            <img
              src={Laptop}
              alt="icon"
              className="menyu_img"
              width={16}
              height={24}
            />
            <p className="menyu_p">Ноутбуки</p>
          </div>
          <img
            src={Right}
            alt="motion"
            className="menyu_img_next"
            width={24}
            height={24}
          />
        </li>
        <li className="menyu_item">
          <div className="menyu_box">
            <img
              src={Controller}
              alt="icon"
              className="menyu_img"
              width={20}
              height={20}
            />
            <p className="menyu_p">Игровые консоли</p>
          </div>
          <img
            src={Right}
            alt="motion"
            className="menyu_img_next"
            width={24}
            height={24}
          />
        </li>
        <li className="menyu_item">
          <div className="menyu_box">
            <img
              src={One}
              alt="icon"
              className="menyu_img"
              width={24}
              height={12}
            />
            <p className="menyu_p">Комплектующие к ноутбукам</p>
          </div>
          <img
            src={Right}
            alt="motion"
            className="menyu_img_next"
            width={24}
            height={24}
          />
        </li>
        <li className="menyu_item">
          <div className="menyu_box">
            <img
              src={Two}
              alt="icon"
              className="menyu_img"
              width={20}
              height={20}
            />
            <p className="menyu_p">Планшеты</p>
          </div>
          <img
            src={Right}
            alt="motion"
            className="menyu_img_next"
            width={24}
            height={24}
          />
        </li>
        <li className="menyu_item">
          <div className="menyu_box">
            <img
              src={Three}
              alt="icon"
              className="menyu_img"
              width={18}
              height={24}
            />
            <p className="menyu_p">Принтеры и МФУ</p>
          </div>
          <img
            src={Right}
            alt="motion"
            className="menyu_img_next"
            width={24}
            height={24}
          />
        </li>
        <li className="menyu_item">
          <div className="menyu_box">
            <img
              src={Four}
              alt="icon"
              className="menyu_img"
              width={20}
              height={20}
            />
            <p className="menyu_p">Акустические колонки</p>
          </div>
          <img
            src={Right}
            alt="motion"
            className="menyu_img_next"
            width={24}
            height={24}
          />
        </li>
        <li className="menyu_item">
          <div className="menyu_box">
            <img
              src={Five}
              alt="icon"
              className="menyu_img"
              width={24}
              height={23}
            />
            <p className="menyu_p">Сетевое оборудование</p>
          </div>
          <img
            src={Right}
            alt="motion"
            className="menyu_img_next"
            width={24}
            height={24}
          />
        </li>
      </ul>
    </div>
  );
};
