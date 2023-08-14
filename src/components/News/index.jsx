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
          <h2 className="news_paragraph_next">Yangiliklar</h2>
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
              Vakansiya! Kontent menejeri kerak
              </h4>
              <p className="news_p">
              Doimiy ish uchun onlayn-do'kon V-COMP, talab qilinadi
                 Kontent menejeri. Masofadan turib (uyda) ishlash qiyin emas...
              </p>
              <a href="#" className="news_link">
              To'liq o'qing
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
              <h4 className="news_paragraph">Bepul kompyuter yig'ish</h4>
              <p className="news_p">
              Do'stlar! Kompaniyamizdagi barcha shaxsiy kompyuter komponentlarini sotib olayotganda, kompyuterni yig'ish bepul. Vaqt va tavakkalchilikni behuda sarflashingiz shart emas...
              </p>
              <a href="#" className="news_link">
              To'liq o'qing
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
              <h4 className="news_paragraph">Bepul yetkazib berish</h4>
              <p className="news_p">
              10 000 000 so'mdan sotib olayotganda O'zbekiston bo'ylab bepul yetkazib berish (kurer orqali).
                  (Batafsil ma'lumot to'lov va yetkazib berish bo'limida)...
              </p>
              <a href="#" className="news_link">
              To'liq o'qing
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
              Aksiya! Noutbukingizni yozga tayyorlang!
              </h4>
              <p className="news_p">
              Bizda har yili “Noutbukni yozga tayyorla!” aksiyasi o‘tkaziladi. 50% chegirma
                 Noutbuklarni tozalash, 15/15/19-06/15/19 Tozalash quyidagilarni o'z ichiga oladi...
              </p>
              <a href="#" className="news_link">
              To'liq o'qing
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
            Hamma yangiliklar
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
