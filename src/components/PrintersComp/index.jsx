import { Card } from "../Card"
import "./printer.css"

export const PrinterComp = () => {
  return (
    <div className="printer">
      <div className="container">
        <div className="printer_inner">
          <h2 className="printer_paragraph">
            Printerlar
          </h2>
          <ul className="printer_list">
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
