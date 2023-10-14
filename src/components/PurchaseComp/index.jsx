import "./purchase.css";
import Monitor from "../../assets/img/card-monitor.png"

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
                  <img src={Monitor} alt="img" className="purchase_item_img" width={200} height={200}/>
                  <div className="purchase_item_left_box">
                    <h4 className="purchase_item_left_paragraph">Monitor</h4>
                    <p className="purchase_item_left_p">SmartArt</p>
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
                  <div className="purchase_item_right_btn_box">
                    <button className="purchase_item_right_btn_left">-</button>
                    <span className="purchase_item_right_span">0</span>
                    <button className="purchase_item_right_btn_right">+</button>
                  </div>
                  <p className="purchase_item_right_price">1 000 000 so'm</p>
                </div>
              </li>
            </ul>
          </h1>
        </div>
      </div>
    </div>
  );
};
