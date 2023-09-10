import {Header} from "../../../components/Header"
import {Footer} from "../../../components/Footer"
import {Card} from "../../../components/Card"

export const MonitorGigabayte = () => {
  return (
    <div className='asus-page'>
      <Header/>
      <div className="asus">
        <div className="container">
          <div className="asus_inner template_inner">
            <h2 className="template_paragraph">
              Gigabayte
            </h2>
            <ul className="template_list">
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
