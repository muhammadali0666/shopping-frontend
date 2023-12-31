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
import Mouse from "../../assets/img/mouse.png"
import { NavLink } from "react-router-dom";

export const Menyu = () => {
  return (
    <div className="menyu">
      <ul className="menyu_list">
        <li className="menyu_item">
          <NavLink to={'/com_components'} className="menyu_box">
            <img
              src={Proccessor}
              alt="icon"
              className="menyu_img"
              width={20}
              height={20}
            />
            <p className="menyu_p">Kompyuter komponentlari</p>
          </NavLink>
          <img
            src={Right}
            alt="motion"
            className="menyu_img_next"
            width={24}
            height={24}
          />
        </li>
        <li className="menyu_item">
          <NavLink to={'/monitor'} className="menyu_box">
            <img
              src={Monitor}
              alt="icon"
              className="menyu_img"
              width={20}
              height={24}
            />
            <p className="menyu_p">Моnitorlar</p>
          </NavLink>
          <img
            src={Right}
            alt="motion"
            className="menyu_img_next"
            width={24}
            height={24}
          />
        </li>
        <li className="menyu_item">
          <NavLink to={'/computer'} className="menyu_box">
            <img
              src={Kampitur}
              alt="icon"
              className="menyu_img"
              width={24}
              height={24}
            />
            <p className="menyu_p">Kompyuterlar</p>
          </NavLink>
          <img
            src={Right}
            alt="motion"
            className="menyu_img_next"
            width={24}
            height={24}
          />
        </li>
        <li className="menyu_item">
          <NavLink to={'/laptop'} className="menyu_box">
            <img
              src={Laptop}
              alt="icon"
              className="menyu_img"
              width={16}
              height={24}
            />
            <p className="menyu_p">Noutbuklar</p>
          </NavLink>
          <img
            src={Right}
            alt="motion"
            className="menyu_img_next"
            width={24}
            height={24}
          />
        </li>
        <li className="menyu_item">
          <NavLink to={'/consol'} className="menyu_box">
            <img
              src={Controller}
              alt="icon"
              className="menyu_img"
              width={20}
              height={20}
            />
            <p className="menyu_p">O'yin konsollari</p>
          </NavLink>
          <img
            src={Right}
            alt="motion"
            className="menyu_img_next"
            width={24}
            height={24}
          />
        </li>
        <li className="menyu_item">
          <NavLink to={'/planshet'} className="menyu_box">
            <img
              src={Two}
              alt="icon"
              className="menyu_img"
              width={20}
              height={20}
            />
            <p className="menyu_p">Planshetlar</p>
          </NavLink>
          <img
            src={Right}
            alt="motion"
            className="menyu_img_next"
            width={24}
            height={24}
          />
        </li>
        <li className="menyu_item">
          <NavLink to={'/printer'} className="menyu_box">
            <img
              src={Three}
              alt="icon"
              className="menyu_img"
              width={18}
              height={24}
            />
            <p className="menyu_p">Printerlar</p>
          </NavLink>
          <img
            src={Right}
            alt="motion"
            className="menyu_img_next"
            width={24}
            height={24}
          />
        </li>
        <li className="menyu_item">
          <NavLink to={'/kalonka'} className="menyu_box">
            <img
              src={Four}
              alt="icon"
              className="menyu_img"
              width={20}
              height={20}
            />
            <p className="menyu_p">Kalonkalar</p>
          </NavLink>
          <img
            src={Right}
            alt="motion"
            className="menyu_img_next"
            width={24}
            height={24}
          />
        </li>
        <li className="menyu_item">
          <NavLink to={'/wifi'} className="menyu_box">
            <img
              src={Five}
              alt="icon"
              className="menyu_img"
              width={24}
              height={23}
            />
            <p className="menyu_p">Tarmoq apparati</p>
          </NavLink>
          <img
            src={Right}
            alt="motion"
            className="menyu_img_next"
            width={24}
            height={24}
          />
        </li>
        <li className="menyu_item">
          <NavLink to={'/mouse'} className="menyu_box">
            <img
              src={Mouse}
              alt="icon"
              className="menyu_img"
              width={28}
              height={27}
            />
            <p className="menyu_p">Sichqonchalar</p>
          </NavLink>
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
