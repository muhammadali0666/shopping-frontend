import { NavLink } from "react-router-dom";
import "./katalog.css";

export const Katalog = () => {
  return (
    <div className="katalog">
      <div className="katalog_left">
        <ul className="katalog_list">
          <li className="katalog_item">
            <h4 className="katalog_paragrph">Noutbuklar</h4>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/macbook'}>MacBook</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/asus'}>Asus</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/lenovo'}>Lenovo</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/hp'}>Hp</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">Dell</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">Acer</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">Sony</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">Samsung</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">Toshiba</NavLink>
          </li>
        </ul>
        <ul className="katalog_list">
          <li className="katalog_item">
            <h4 className="katalog_paragrph">Sichqonchalar</h4>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">Logitech</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">Razer</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">Microsoft</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">SteelSeries</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">ROCCAT</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">Asus</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">HyperX</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">Corsair</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">Leovo</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">Zowie by BenQ</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">MSI</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">Redroger</NavLink>
          </li>
        </ul>
      </div>
      <div className="katalog_middle">
        <ul className="katalog_list">
          <li className="katalog_item">
            <h4 className="katalog_paragrph">Monitorlar</h4>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">Acer</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">Asus</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">Dell</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">Gigabayte</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">LG</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">MSI</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">Samsung</NavLink>
          </li>
        </ul>
        <ul className="katalog_list">
          <li className="katalog_item">
            <h4 className="katalog_paragrph">Printerlar</h4>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">Hp</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">Canon</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">Xerox</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">Brother</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">Epson</NavLink>
          </li>
        </ul>
      </div>
      <div className="katalog_right">
        <ul className="katalog_list">
          <li className="katalog_item">
            <h4 className="katalog_paragrph">Wi-Fi routerlar</h4>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">TP-Link</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">Tenda</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">Netis</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">MicroTik</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">Huawei</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">Xiaomi</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">Cisco</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">Siklu</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">MERCUSYS</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link">SNR</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
