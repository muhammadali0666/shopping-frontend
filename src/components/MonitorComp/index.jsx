import { useState, useEffect } from "react";
import Like from "../../assets/img/card-like.png";
import "./monitor.css";

export const MonitorComp = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4001/get_monitors`)
      .then((res) => res.json(res))
      .then((datas) => setData(datas));
  }, []);
  return (
    <div className="monitor">
      <div className="container">
        <div className="monitor_inner">
          <h2 className="monitor_paragraph">Monitorlar</h2>
          <ul className="monitor_list">
            {data.length &&
              data.map((element, idx) => (
                <li className="card_item" key={idx}>
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
                    src={element.picture}
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
