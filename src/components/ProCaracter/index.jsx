import React from "react";
import True from "../../assets/img/true.png"
import Like from "../../assets/img/like.png"
import {NavLink} from "react-router-dom"
import Laptop from "../../assets/img/pro_laptop.png"
import "./style.css"

export const ProCharacter = () => {
  return (
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
          <NavLink to='/product' style={{textDecoration: "none", color: "black"}}>
          Hamma mahsulot haqida
          </NavLink>
        </li>
        <li className="product_hero_item">
          <NavLink to={'/productCharacteristic'} style={{textDecoration: "none", color: "black"}}>
          Xususiyatlari
          </NavLink>
          </li>
      </ul>
      <hr />
      <div className="product_hero_inner">
        <div className="product_left_box_extra">
          <div className="characteristics">
            <h3 className="characteristics_paragraph">
            Asosiy xususiyatlar
            </h3>
            <ul className="characteristics_list">
              <li className="characteristics_item">
                <ul className="characteristics_inner_list">
                  <li className="characteristics_inner_item">Sinf</li>
                  <li className="characteristics_inner_item">
                  Ish va uy uchun
                  </li>
                </ul>
                <ul className="characteristics_inner_list">
                  <li className="characteristics_inner_item">
                  Ekran diagonali
                  </li>
                  <li className="characteristics_inner_item">14"</li>
                </ul>
                <ul className="characteristics_inner_list">
                  <li className="characteristics_inner_item">
                  Ekran o'lchamlari
                  </li>
                  <li className="characteristics_inner_item">1920x1080</li>
                </ul>
                <ul className="characteristics_inner_list">
                  <li className="characteristics_inner_item">Protsessor</li>
                  <li className="characteristics_inner_item">
                    Intel Pentium Silver
                  </li>
                </ul>
                <ul className="characteristics_inner_list">
                  <li className="characteristics_inner_item">
                  Protsessor modeli
                  </li>
                  <li className="characteristics_inner_item">
                    Intel Pentium Silver N5000
                  </li>
                </ul>
                <ul className="characteristics_inner_list">
                  <li className="characteristics_inner_item">
                  Protsessor chastotasi
                  </li>
                  <li className="characteristics_inner_item">1.1 - 2.7 ГГц</li>
                </ul>
                <ul className="characteristics_inner_list">
                  <li className="characteristics_inner_item">
                  Ram
                  </li>
                  <li className="characteristics_inner_item">4 Gb</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="product_right_box_extra">
          <div className="proccess">
            <div className="process_inner">
              <img src={Laptop} alt="img" className="proccess_inner_img" width={70} height={70}/>
              <h4 className="proccess_inner_paragraph">
              Noutbuk Vinga Iron S140 Grey (S140-P50464GWP)
              </h4>
            </div>
            <div className="proccess_top">
              <div className="proccess_animate"></div>
              <button className="proccess_top_btn">
                <img
                  src={True}
                  alt="icon"
                  className="proccess_top_btn_img"
                  width={24}
                  height={24}
                />
           Sotuvda mavjud
              </button>
              <img
                src={Like}
                alt="icon"
                className="proccess_top_img"
                width={28}
                height={28}
              />
            </div>
            <div className="proccess_animate_next"></div>
            <div className="del_bottom">
              <p className="del_bottom_p">1 000 300 so'm.</p>
              <button className="del_bottom_btn">sotib olish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
