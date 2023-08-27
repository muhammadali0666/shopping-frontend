import { Card } from "../Card";
import "./style.css";

export const ComputerComp = () => {
  return (
    <div className="comuter_comp">
      <div className="container">
        <div className="computer_comp_inner">
          <h2 className="computer_comp_paragraph">
          Kompyuterlar
          </h2>
          <ul className="computer_comp_list" style={{ paddingLeft: "0px" }}>
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