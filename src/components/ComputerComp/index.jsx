import { useState, useEffect } from "react";
import Monitor from "../../assets/img/card-monitor.png";
import Like from "../../assets/img/card-like.png";
import "./style.css";

export const ComputerComp = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4001/get_computers`)
      .then((res) => res.json(res))
      .then((datas) => setData(datas));
  }, []);
  return (
    <div className="comuter_comp">
      <div className="container">
        <div className="computer_comp_inner">
          <h2 className="computer_comp_paragraph">Kompyuterlar</h2>
          <ul className="computer_comp_list" style={{ paddingLeft: "0px" }}>
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
