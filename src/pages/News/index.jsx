import "./news.css"
import {Header} from "../../components/Header"
import {Footer} from "../../components/Footer"
import { NewsComp } from "../../components/NewsComp"

export const News = () => {
  return (
    <div className="news">
      <Header/>
      <NewsComp/>
      <Footer/>
    </div>
  )
}
