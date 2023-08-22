import "./hero.css";
import Carousel from "react-bootstrap/Carousel";
import Bg from "../../assets/img/hero-bg.png";
import BgTwo from "../../assets/img/online-shopping-banner-vector-17230980.jpg";
import { Characteristics } from "./characteristics";
import { Proccess } from "./proccess";
import { Delivery } from "./delivery";
import { Guarantee } from "./guarantee";
import { Cheaper } from "./cheaper";

export const Product_hero = () => {
  return (
    <div className="product_hero">
      <div className="container">
        <div className="product_hero_top">
          <h2 className="product_hero_paragraph">
            Ноутбук Vinga Iron S140 Grey (S140-P50464GWP)
          </h2>

          <p className="product_hero_p">
            Код товара: <span className="product_hero_span">1234</span>
          </p>
        </div>
            <ul className="product_hero_list">
              <li className="product_hero_item">
                  Все о товаре
              </li>
              <li className="product_hero_item">
                  Характеристики
              </li>
            </ul>
            <hr />
        <div className="product_hero_inner">
          <div className="product_left_box">
            <Carousel
              data-bs-theme="dark banner"
              style={{ marginBottom: "50px", marginTop: "32px" }}
            >
              <Carousel.Item>
                <img
                  className="d-block w-100 banner_img"
                  src={Bg}
                  alt="First slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 banner_img"
                  src={BgTwo}
                  alt="Second slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 banner_img"
                  src={Bg}
                  alt="Third slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 banner_img"
                  src={BgTwo}
                  alt="Second slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <Characteristics />
          </div>
          <div className="product_right_box">
            <Proccess/>
            <Delivery/>
            <Guarantee/>
          </div>
        </div>
         <Cheaper/>
      </div>
    </div>
  );
};
