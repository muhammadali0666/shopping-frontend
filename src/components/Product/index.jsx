import "./product.css"
import { Card } from "../Card"

export const Product = () => {
  return (
    <div className="product">
      <div className="container">
        <div className="product_inner">
          <h2 className="card_paragraph">
          Eng ko'p sotilgan
          </h2>
          <ul className="card_list">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
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
