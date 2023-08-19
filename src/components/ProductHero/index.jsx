import "./hero.css"
import Carousel from "react-bootstrap/Carousel";
import Bg from "../../assets/img/hero-bg.png";
import BgTwo from "../../assets/img/online-shopping-banner-vector-17230980.jpg"
import { Characteristics } from "./characteristics";

export const Product_hero = () => {
  return (
    <div className="product_hero">
      <div className="container">
        <div className="product_hero_nner">
          <div className="product_hero_top">
            <h2 className="product_hero_paragraph">
            Ноутбук Vinga Iron S140 Grey (S140-P50464GWP)
            </h2>
            <p className="product_hero_p">
            Код товара: 1234
            </p>
          </div>
          <ul className="Product_hero List">
            <li className="Product_hero_item">
              <a href="#" className="Product_hero_link">
              Все о товаре
              </a>
            </li>
            <li className="Product_hero_item">
              <a href="#" className="Product_hero_link">
              Характеристики
              </a>
            </li>
          </ul>
          <Carousel data-bs-theme="dark banner" style={{marginBottom: "50px", marginTop: "32px"}}>
      <Carousel.Item>
        <img className="d-block w-100 banner_img" src={Bg} alt="First slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 banner_img" src={BgTwo} alt="Second slide" />
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 banner_img" src={Bg} alt="Third slide" />
        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 banner_img" src={BgTwo} alt="Second slide" />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Characteristics/>
        </div>
      </div>
    </div>
  )
}
