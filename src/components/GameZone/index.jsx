import { Card } from "../Card";
import "./game.css";
import Shape from "../../assets/img/Shape.png";
import Klav from "../../assets/img/game-klav.png";
import Mishka from "../../assets/img/game-mishka.png";
import Role from "../../assets/img/game-role.png";
import Nout from "../../assets/img/game-nout.png";
import Kuller from "../../assets/img/game-kuller.png";
import Monitor from "../../assets/img/game-monitor.png";

export const GameZone = () => {
  return (
    <div className="game">
      <div className="container">
        <div className="game_inner">
          <div className="game_top">
            <div className="game_animation"></div>
            <h2 className="game_paragraph">GAME ZONE</h2>
            <div className="game_animation_next"></div>
          </div>
          <ul className="game_list">
            <li className="game_item" style={{color: "#fff"}}>
              <Card/>
            </li>
            <li className="game_item" style={{color: "#fff"}}>
              <Card/>
            </li>
            <li className="game_item" style={{color: "#fff"}}>
              <Card/>
            </li>
            <li className="game_item" style={{color: "#fff"}}>
              <Card/>
            </li>
            <li className="game_item" style={{color: "#fff"}}>
              <Card/>
            </li>
          </ul>
          <a href="#" className="game_link">
            Смотреть все товары
            <img
              src={Shape}
              alt="icon"
              className="game_symbol"
              width={16}
              height={16}
            />
          </a>
          <h3 className="game_paragraph_next">Категории для геймеров</h3>
          <ul className="game_next-list">
            <li className="game_next_item">
              <img
                src={Klav}
                alt="img"
                className="game_next_img"
                width={215}
                height={168}
              />
              <p className="game_next_p">Клавиатуры</p>
            </li>
            <li className="game_next_item">
              <img
                src={Mishka}
                alt="img"
                className="game_next_img"
                width={215}
                height={168}
              />
              <p className="game_next_p">Мыши</p>
            </li>
            <li className="game_next_item">
              <img
                src={Role}
                alt="img"
                className="game_next_img"
                width={215}
                height={168}
              />
              <p className="game_next_p">Аксессуары</p>
            </li>
            <li className="game_next_item">
              <img
                src={Nout}
                alt="img"
                className="game_next_img"
                width={215}
                height={168}
              />
              <p className="game_next_p">Игровые ноутбуки</p>
            </li>
            <li className="game_next_item">
              <img
                src={Kuller}
                alt="img"
                className="game_next_img"
                width={215}
                height={168}
              />
              <p className="game_next_p">Видеокарты</p>
            </li>
            <li className="game_next_item">
              <img
                src={Monitor}
                alt="img"
                className="game_next_img"
                width={215}
                height={168}
              />
              <p className="game_next_p">Мониторы</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
