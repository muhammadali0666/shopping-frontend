import "./console.css";
import { useState, useEffect } from "react";
import Monitor from "../../assets/img/card-monitor.png";
import Like from "../../assets/img/card-like.png";

export const ConsoleComp = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4001/get_pults`)
      .then((res) => res.json(res))
      .then((datas) => setData(datas));
  }, []);
  return (
    <div className="consol">
      <div className="container">
        <div className="console_inner">
          <h2 className="consol_paragraph">O'yin konsollari</h2>
          <ul className="consol_list">
            {data.length &&
              data.map((element) => (
                <li className="card_item">
                  <span className="card_span">
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
                  <p className="card_p">{element.title}</p>
                  <p className="card_text">Sharhlar: 0</p>
                  <div className="card_box">
                    <p className="card_price">{element.price}</p>
                    <button className="card_btn btn btn-success">
                      Sotib olish
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
