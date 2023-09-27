import "./com.css";
import { useState, useEffect } from "react";
import Monitor from "../../assets/img/card-monitor.png";
import Like from "../../assets/img/card-like.png";

export const ComComp = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4001/get_components`)
      .then((res) => res.json(res))
      .then((datas) => setData(datas));
  }, []);

  return (
    <div className="com_comp">
      <div className="container">
        <div className="com_comp_inner">
          <h2 className="com_comp_paragraph">Kompyuterlar qismlari</h2>
          <ul className="com_comp_list" style={{ paddingLeft: "0px" }}>
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
