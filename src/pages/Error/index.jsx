import "./error.css"
import {Header} from "../../components/Header"
import {Footer} from "../../components/Footer"

export const Error = () => {
  return (
    <div className="error">
      <Header/>
      <div className="err_box">
        <h2 className="err_paragraph">
          404
        </h2>
        <p className="err_text">
        К сожалению, запрашиваемая вами страница не найдена.
        </p>
        <p className="err_p">
        Неправильно набран адрес или такой страницы на сайте больше не существует.
        </p>
        <button className="err_btn">
          go to home
        </button>
      </div>
      <Footer/>
    </div>
  )
}
