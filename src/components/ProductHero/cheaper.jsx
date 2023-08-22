import "./hero.css";
import Processor from "../../assets/img/card-case.png";
import Monitor from "../../assets/img/card-monitor.png";
import Carousel from "react-bootstrap/Carousel";

export const Cheaper = () => {
  return (
    <Carousel
      data-bs-theme="dark banner"
      style={{ marginBottom: "50px", marginTop: "32px" }}
    >
      <h2 className="cheaper_big_text">
      Вместе дешевле
      </h2>
      <Carousel.Item>
        <div className="cheaper">
          <div className="cheaper_box">
            <ul className="cheaper_list">
              <li className="cheaper_item">
                <img
                  src={Processor}
                  alt="img"
                  className="cheaper_img"
                  width={160}
                  height={160}
                />
                <div className="cheaper_inner">
                  <h4 className="cheaper_paragraph">
                    Процессор Intel Core i5-10400F, Box (BX8070110400F)
                    (BX8070110400F)
                  </h4>
                  <p className="cheaper_p">
                    3500 <span className="cheaper_span">грн.</span>
                  </p>
                </div>
              </li>
              <li className="cheaper_item" style={{ fontSize: "24px" }}>
                +
              </li>
              <li className="cheaper_item">
                <img
                  src={Monitor}
                  alt="img"
                  className="cheaper_img"
                  width={160}
                  height={160}
                />
                <div className="cheaper_inner">
                  <h4 className="cheaper_paragraph">
                    Процессор Intel Core i5-10400F, Box (BX8070110400F)
                    (BX8070110400F)
                  </h4>
                  <p className="cheaper_p">
                    3500 <span className="cheaper_span">грн.</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="cheaper">
          <div className="cheaper_box">
            <ul className="cheaper_list">
              <li className="cheaper_item">
                <img
                  src={Processor}
                  alt="img"
                  className="cheaper_img"
                  width={160}
                  height={160}
                />
                <div className="cheaper_inner">
                  <h4 className="cheaper_paragraph">
                    Процессор Intel Core i5-10400F, Box (BX8070110400F)
                    (BX8070110400F)
                  </h4>
                  <p className="cheaper_p">
                    3500<span className="cheaper_span">грн.</span>
                  </p>
                </div>
              </li>
              <li className="cheaper_item" style={{ fontSize: "24px" }}>
                +
              </li>
              <li className="cheaper_item">
                <img
                  src={Monitor}
                  alt="img"
                  className="cheaper_img"
                  width={160}
                  height={160}
                />
                <div className="cheaper_inner">
                  <h4 className="cheaper_paragraph">
                    Процессор Intel Core i5-10400F, Box (BX8070110400F)
                    (BX8070110400F)
                  </h4>
                  <p className="cheaper_p">
                    3500 <span className="cheaper_span">грн.</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="cheaper">
          <div className="cheaper_box">
            <ul className="cheaper_list">
              <li className="cheaper_item">
                <img
                  src={Processor}
                  alt="img"
                  className="cheaper_img"
                  width={160}
                  height={160}
                />
                <div className="cheaper_inner">
                  <h4 className="cheaper_paragraph">
                    Процессор Intel Core i5-10400F, Box (BX8070110400F)
                    (BX8070110400F)
                  </h4>
                  <p className="cheaper_p">
                    3500 <span className="cheaper_span">грн.</span>
                  </p>
                </div>
              </li>
              <li className="cheaper_item" style={{ fontSize: "24px" }}>
                +
              </li>
              <li className="cheaper_item">
                <img
                  src={Monitor}
                  alt="img"
                  className="cheaper_img"
                  width={160}
                  height={160}
                />
                <div className="cheaper_inner">
                  <h4 className="cheaper_paragraph">
                    Процессор Intel Core i5-10400F, Box (BX8070110400F)
                    (BX8070110400F)
                  </h4>
                  <p className="cheaper_p">
                    3500 <span className="cheaper_span">грн.</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="cheaper">
          <div className="cheaper_box">
            <ul className="cheaper_list">
              <li className="cheaper_item">
                <img
                  src={Processor}
                  alt="img"
                  className="cheaper_img"
                  width={160}
                  height={160}
                />
                <div className="cheaper_inner">
                  <h4 className="cheaper_paragraph">
                    Процессор Intel Core i5-10400F, Box (BX8070110400F)
                    (BX8070110400F)
                  </h4>
                  <p className="cheaper_p">
                    3500<span className="cheaper_span">грн.</span>
                  </p>
                </div>
              </li>
              <li className="cheaper_item" style={{ fontSize: "24px" }}>
                +
              </li>
              <li className="cheaper_item">
                <img
                  src={Monitor}
                  alt="img"
                  className="cheaper_img"
                  width={160}
                  height={160}
                />
                <div className="cheaper_inner">
                  <h4 className="cheaper_paragraph">
                    Процессор Intel Core i5-10400F, Box (BX8070110400F)
                    (BX8070110400F)
                  </h4>
                  <p className="cheaper_p">
                    3500<span className="cheaper_span">грн.</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
