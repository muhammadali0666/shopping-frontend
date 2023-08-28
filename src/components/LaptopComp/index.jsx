import { Card } from "../Card"
import "./laptop.css"

export const LaptopComp = () => {
  return (
    <div className="laptop">
      <div className="container">
        <div className="laptop_inner">
          <h2 className="laptop_paragraph">
            Noutbuklar
          </h2>
          <ul className="laptop_list">
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
