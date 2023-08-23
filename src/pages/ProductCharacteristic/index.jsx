import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ProCharacter } from "../../components/ProCaracter";

export const ProductCharacteristic = () => {
  return (
    <div className="pro_caracter">
      <Header />
      <ProCharacter />
      <div className="container">
        <ul
          style={{
            listStyle: "none",
            marginTop: "40px",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ul>
      </div>
      <Footer />
    </div>
  );
};
