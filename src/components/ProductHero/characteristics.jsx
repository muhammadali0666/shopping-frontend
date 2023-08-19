import "./hero.css"

export const Characteristics = () => {
  return (
    <div className="characteristics">
      <h3 className="characteristics_paragraph">
      Основные характеристики
      </h3>
      <ul className="characteristics_list">
        <li className="characteristics_item">
          <ul className="characteristics_inner_list">
            <li className="characteristics_inner_item">
            Класс
            </li>
            <li className="characteristics_inner_item">
            Для работы и дома
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
