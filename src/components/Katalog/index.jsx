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
            <NavLink className="katalog_link" to={'/dell'}>Dell</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/acer'}>Acer</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/sony'}>Sony</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/samsung'}>Samsung</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/toshiba'}>Toshiba</NavLink>
          </li>
        </ul>
        <ul className="katalog_list">
          <li className="katalog_item">
            <h4 className="katalog_paragrph">Sichqonchalar</h4>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/mouse_logitech'}>Logitech</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/mouse_razer'}>Razer</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/mouse_microsoft'}>Microsoft</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/mouse_steelseries'}>SteelSeries</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/mouse_roccat'}>ROCCAT</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/mouse_asus'}>Asus</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/mouse_hyperx'}>HyperX</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/mouse_corsair'}>Corsair</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/mouse_lenovo'}>Lenovo</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/mouse_zowie'}>Zowie by BenQ</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/mouse_msi'}>MSI</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/mouse_redroger'}>Redroger</NavLink>
          </li>
        </ul>
      </div>
      <div className="katalog_middle">
        <ul className="katalog_list">
          <li className="katalog_item">
            <h4 className="katalog_paragrph">Monitorlar</h4>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/monitor_acer'}>Acer</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/monitor_asus'}>Asus</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/monitor_dell'}>Dell</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/monitor_gigabayte'}>Gigabayte</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/monitor_lg'}>LG</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/monitor_msi'}>MSI</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/monitor_samsung'}>Samsung</NavLink>
          </li>
        </ul>
        <ul className="katalog_list">
          <li className="katalog_item">
            <h4 className="katalog_paragrph">Printerlar</h4>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/printer_hp'}>Hp</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/printer_canon'}>Canon</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/printer_xerox'}>Xerox</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/printer_brother'}>Brother</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/printer_epson'}>Epson</NavLink>
          </li>
        </ul>
      </div>
      <div className="katalog_right">
        <ul className="katalog_list">
          <li className="katalog_item">
            <h4 className="katalog_paragrph">Wi-Fi routerlar</h4>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/tp_link'}>TP-Link</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/tenda'}>Tenda</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/netis'}>Netis</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/microtik'}>MicroTik</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/huawei'}>Huawei</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/xiaomi'}>Xiaomi</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/cisco'}>Cisco</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/siklu'}>Siklu</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/mercusys'}>MERCUSYS</NavLink>
          </li>
          <li className="katalog_item">
            <NavLink className="katalog_link" to={'/snr'}>SNR</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
