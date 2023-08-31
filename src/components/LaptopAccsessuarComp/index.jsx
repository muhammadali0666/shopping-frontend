import { Card } from "../Card"
import "./style.css"

export const LaptopAcssesuarComp = () => {
  return (
    <div className="acesuar">
      <div className="container">
        <div className="acesuar_inner">
          <h2 className="acsesuar_paragraph">
           Noutbuk uchun aksessuarlar
          </h2>
          <ul className="acsesuar_list">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </ul>
        </div>
      </div>
    </div>
  )
}
