import { Card } from "../Card";
import "./com.css";

export const ComComp = () => {
  return (
    <div className="com_comp">
      <div className="container">
        <div className="com_comp_inner">
          <h2 className="com_comp_paragraph">
          Kompyuterlar qismlari
          </h2>
          <ul className="com_comp_list" style={{ paddingLeft: "0px" }}>
            <Card />
            <Card />
            <Card />
            <Card />
          </ul>
        </div>
      </div>
    </div>
  );
};
