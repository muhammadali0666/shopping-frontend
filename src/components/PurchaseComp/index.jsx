import "./purchase.css"

export const PurchaseComp = () => {
  return (
    <div className="purchase">
      <div className="container">
        <div className="purchase_inner">
          <h1 className="purchase_paragraph">
            Xaridlar
            <ul className="purchase_list">
              <li className="purchase_item">
                <div className="purchase_item_left">
                  <img src="" alt="" className="purchase_item_img" />
                  <div className="purchase_item_left_box">
                    <h4 className="purchase_item_left_paragraph">
                      Monitor
                    </h4>
                    <p className="purchase_item_left_p">
                      SmartArt
                    </p>
                    <div className="purchase_item_left_inner_div">
                      <button className="purchase_item_left_inner_btn">
                        Katta rasm
                      </button>
                      <button className="purchase_item_left_inner_btn">
                        o'chirish
                      </button>
                    </div>
                  </div>
                </div>
                <div className="purchase_item_right">
                  
                </div>
              </li>
            </ul>
          </h1>
        </div>
      </div>
    </div>
  )
}
