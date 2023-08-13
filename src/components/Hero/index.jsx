import "./hero.css"
import { Menyu } from "../Menyu"
import Banner from "../Banner"
import { Service } from "../Service"

export const Hero = () => {
  return (
    <div className="hero container">
      <Menyu/>
      <div className="hero_box">
        <Banner/>
        <Service/>
      </div>
    </div>
  )
}
