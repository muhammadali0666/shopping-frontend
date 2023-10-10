import { Layouts } from "../../components/Layouts"
import { PurchaseComp } from "../../components/PurchaseComp"

export const PurchasePage = () => {
  return (
    <div className="product_page">
      <Layouts>
        <PurchaseComp/>
      </Layouts>
    </div>
  )
}