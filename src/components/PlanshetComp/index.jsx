import { Card } from "../Card"
import "./plansher.css"

export const PlanshetComp = () => {
  return (
    <div className="planshet">
      <div className="container">
        <div className="planshet_inner">
          <h2 className="planshet_paragraph">
            Planshetlar
          </h2>
          <ul className="planshet-list">
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
