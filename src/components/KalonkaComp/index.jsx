import { Card } from '../Card'
import "./kalonka.css"

export const KalonkaComp = () => {
  return (
    <div className='kalonka'>
      <div className="container">
        <div className="kalonka_inner">
          <h2 className="kalonka_paragraph">
            Kalonkalar
          </h2>
          <ul className="kalonkalr_list">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </ul>
        </div>
      </div>
    </div>
  )
}
