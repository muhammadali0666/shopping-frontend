import "./hero.css";
import Carousel from "react-bootstrap/Carousel";
import Bg from "../../assets/img/hero-bg.png";
import BgTwo from "../../assets/img/online-shopping-banner-vector-17230980.jpg";
import { Characteristics } from "./characteristics";
import { Proccess } from "./proccess";
import { Delivery } from "./delivery";
import { Guarantee } from "./guarantee";
import { Cheaper } from "./cheaper";
import { ProCard } from "./proCard";
import { NavLink } from "react-router-dom";

export const Product_hero = () => {
  return (
    <div className="product_hero">
      <div className="container">
        <div className="product_hero_top">
          <h2 className="product_hero_paragraph">
          Noutbuk Vinga Iron S140 Grey (S140-P50464GWP)
          </h2>

          <p className="product_hero_p">
          Mahsulot kodi: <span className="product_hero_span">1234</span>
          </p>
        </div>
        <ul className="product_hero_list">
          <li className="product_hero_item">
            <NavLink to={'/product'} style={{textDecoration: "none", color: "black"}}>Mahsulot haqida</NavLink>
          </li>
          <li className="product_hero_item">
            <NavLink to={'/productcharacteristic'} style={{textDecoration: "none", color: "black"}}>Xususiyatlari</NavLink>
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
            <Proccess />
            <Delivery />
            <Guarantee />
          </div>
        </div>
        <Cheaper />
        <ProCard />
      </div>
    </div>
  );
};
