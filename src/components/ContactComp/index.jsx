import "./contact.css";
import Contact from "../../assets/img/contact_call.png";
import ContactMessage from "../../assets/img/contact_message.png";
import ContactClock from "../../assets/img/contact-clock.png";
import ContactLocation from "../../assets/img/contact-location.png";
import Whatsap from "../../assets/img/whatsap.png";
import Telegram from "../../assets/img/telegram.png";

export const ContactComp = () => {
  return (
    <div className="contactComp">
      <div className="container">
        <div className="contact_inner">
          <h2 className="contact_paaragraph">Bog'lanish</h2>
          <div className="contact_box">
            <div className="contact_left_box">
              <ul className="footer_list">
                <li className="footer_item">
                  <a
                    target="_blank"
                    href="tel:+998904565025"
                    className="footer_item_link"
                  >
                    <img
                      src={Contact}
                      alt="icon"
                      className="footer_item_link_img"
                      width={24}
                      height={24}
                    />
                    <p className="footer_item_link_p">(90) 456-50-25</p>
                  </a>
                </li>
                <li className="footer_item">
                  <a
                    target="_blank"
                    href="https://wa.me/904565025"
                    className="footer_item_link"
                  >
                    <img
                      src={Whatsap}
                      alt="icon"
                      className="footer_item_link_img"
                      width={24}
                      height={24}
                    />
                    <p className="footer_item_link_p">(90) 456-50-25</p>
                  </a>
                </li>
                <li className="footer_item">
                  <a
                    target="_blank"
                    href="https://t.me/Sh_Muhammadali5"
                    className="footer_item_link"
                  >
                    <img
                      src={Telegram}
                      alt="icon"
                      className="footer_item_link_img"
                      width={24}
                      height={24}
                    />
                    <p className="footer_item_link_p">(90) 456-50-25</p>
                  </a>
                </li>
                <li className="footer_item">
                  <a
                    target="_blank"
                    href="mailto:muhammadalishuhratjono50@gmail.com"
                    className="footer_item_link"
                  >
                    <img
                      src={ContactMessage}
                      alt="icon"
                      className="footer_item_link_img"
                      width={24}
                      height={24}
                    />
                    <p className="footer_item_link_p">
                      muhammadalishuhratjono50@gmail.com
                    </p>
                  </a>
                </li>
                <li className="footer_item">
                  <a href="#" className="footer_item_link">
                    <img
                      src={ContactClock}
                      alt="icon"
                      className="footer_item_link_img"
                      width={24}
                      height={24}
                    />
                    <p className="footer_item_link_p">
                      Dushanba-Shanba 9:00-19:00
                    </p>
                  </a>
                </li>
                <li className="footer_item">
                  <a
                    target="_blank"
                    href="https://goo.gl/maps/CJPpfDDB8zSrW2cf6"
                    className="footer_item_link"
                  >
                    <img
                      src={ContactLocation}
                      alt="icon"
                      className="footer_item_link_img"
                      width={18}
                      height={24}
                    />
                    <p className="footer_item_link_p">
                      V. Samarqand k. Jartepa.
                    </p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="contact_right_box">
              <iframe
                className="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196672.41028460156!2d66.67008409453128!3d39.627059500000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d1f6f36d8e657%3A0xfbe0eb224147d0a3!2sJartepa!5e0!3m2!1sru!2s!4v1692967174058!5m2!1sru!2s"
                style={{ border: "0" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
