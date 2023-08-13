import "./news.css";
import Job from "../../assets/img/job.png";
import Workplace from "../../assets/img/workplace.png";
import Service from "../../assets/img/service.png";
import Work from "../../assets/img/work.png";
import Right from "../../assets/img/card-rigth.png";

export const News = () => {
  return (
    <div className="news">
      <div className="container">
        <div className="news_inner">
          <h2 className="news_paragraph_next">Новости</h2>
          <ul className="news_list">
            <li className="news_item">
              <img
                src={Job}
                alt="icon"
                className="news_img"
                width={371}
                height={209}
              />
              <h4 className="news_paragraph">
                Вакансия! Требуется контент-менеджер
              </h4>
              <p className="news_p">
                Интернет-магазину V-COMP на постоянную работу, требуется
                контент-менеджер. Работа удаленно (на дому), не сложная...
              </p>
              <a href="#" className="news_link">
                Читать полностью
                <img
                  src={Right}
                  alt="icon"
                  className="news_symbol"
                  width={12}
                  height={12}
                />
              </a>
            </li>
            <li className="news_item">
              <img
                src={Workplace}
                alt="icon"
                className="news_img"
                width={371}
                height={209}
              />
              <h4 className="news_paragraph">Бесплатная сборка ПК</h4>
              <p className="news_p">
                Друзья! При покупке всех комплектующих для ПК в нашей компании,
                сборка ПК бесплатно. Вам не нужно тратить время и рисковать...
              </p>
              <a href="#" className="news_link">
                Читать полностью
                <img
                  src={Right}
                  alt="icon"
                  className="news_symbol"
                  width={12}
                  height={12}
                />
              </a>
            </li>
            <li className="news_item">
              <img
                src={Service}
                alt="icon"
                className="news_img"
                width={371}
                height={209}
              />
              <h4 className="news_paragraph">Бесплатная доставка</h4>
              <p className="news_p">
                Бесплатная доставка по Днепру (курьером) при покупке от 3000
                грн. (Подробнее в разделе Оплата и доставка)...
              </p>
              <a href="#" className="news_link">
                Читать полностью
                <img
                  src={Right}
                  alt="icon"
                  className="news_symbol"
                  width={12}
                  height={12}
                />
              </a>
            </li>
            <li className="news_item">
              <img
                src={Work}
                alt="icon"
                className="news_img"
                width={251}
                height={209}
              />
              <h4 className="news_paragraph">
                Акция! Подготовь ноутбук к лету!
              </h4>
              <p className="news_p">
                У нас ежегодная акция "Подготовь ноутбук к лету!" 50% скидка на
                чистку ноутбука, 15.05.19-15.06.19 В чистку входит...
              </p>
              <a href="#" className="news_link">
                Читать полностью
                <img
                  src={Right}
                  alt="icon"
                  className="news_symbol"
                  width={12}
                  height={12}
                />
              </a>
            </li>
          </ul>
          <a href="#" className="news_btn">
            Все новости
            <img
              src={Right}
              alt="icon"
              className="news_symbol"
              width={16}
              height={16}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
