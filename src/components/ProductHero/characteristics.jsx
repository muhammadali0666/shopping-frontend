import "./hero.css";

export const Characteristics = () => {
  return (
    <div className="characteristics">
    <h3 className="characteristics_paragraph">
    Asosiy xususiyatlar
    </h3>
    <ul className="characteristics_list">
      <li className="characteristics_item">
        <ul className="characteristics_inner_list">
          <li className="characteristics_inner_item">Sinf</li>
          <li className="characteristics_inner_item">
          Ish va uy uchun
          </li>
        </ul>
        <ul className="characteristics_inner_list">
          <li className="characteristics_inner_item">
          Ekran diagonali
          </li>
          <li className="characteristics_inner_item">14"</li>
        </ul>
        <ul className="characteristics_inner_list">
          <li className="characteristics_inner_item">
          Ekran o'lchamlari
          </li>
          <li className="characteristics_inner_item">1920x1080</li>
        </ul>
        <ul className="characteristics_inner_list">
          <li className="characteristics_inner_item">Protsessor</li>
          <li className="characteristics_inner_item">
            Intel Pentium Silver
          </li>
        </ul>
        <ul className="characteristics_inner_list">
          <li className="characteristics_inner_item">
          Protsessor modeli
          </li>
          <li className="characteristics_inner_item">
            Intel Pentium Silver N5000
          </li>
        </ul>
        <ul className="characteristics_inner_list">
          <li className="characteristics_inner_item">
          Protsessor chastotasi
          </li>
          <li className="characteristics_inner_item">1.1 - 2.7 ГГц</li>
        </ul>
        <ul className="characteristics_inner_list">
          <li className="characteristics_inner_item">
          Ram
          </li>
          <li className="characteristics_inner_item">4 Gb</li>
        </ul>
      </li>
    </ul>
  </div>
  );
};
