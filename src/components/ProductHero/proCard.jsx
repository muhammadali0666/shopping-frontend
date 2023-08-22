import "./hero.css"
import {Card} from "../Card"

export const ProCard = () => {
  return (
    <ul className="procard" style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap", listStyle: "none"}}>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </ul>
  )
}
