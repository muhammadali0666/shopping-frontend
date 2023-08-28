import "./console.css"
import {Card} from "../../components/Card"

export const ConsoleComp = () => {
  return (
    <div className="consol">
      <div className="container">
        <div className="console_inner">
          <h2 className="consol_paragraph">
            O'yin konsollari
          </h2>
          <ul className="consol_list">
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
