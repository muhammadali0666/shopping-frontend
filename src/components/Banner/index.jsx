import Carousel from "react-bootstrap/Carousel";
import Bg from "../../assets/img/online-shopping-banner-vector-17230980.jpg";
import "./banner.css"

function Banner() {
  return (
    <Carousel data-bs-theme="dark banner" style={{marginBottom: "50px", marginTop: "32px"}}>
      <Carousel.Item>
        <img className="d-block w-100 banner_img" src={Bg} alt="First slide" />
        <Carousel.Caption>
          <h5>TEXT BANNER</h5>
          <p>BANNER DESCRIPTION SMALL TEXT</p>
          <button className="btn btn-danger" style={{background: "#E93232"}}>text btn</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 banner_img" src={Bg} alt="Second slide" />
        <Carousel.Caption>
        <h5>TEXT BANNER</h5>
          <p>BANNER DESCRIPTION SMALL TEXT</p>
          <button className="btn btn-danger" style={{background: "#E93232"}}>text btn</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 banner_img" src={Bg} alt="Third slide" />
        <Carousel.Caption>
        <h5>TEXT BANNER</h5>
          <p>BANNER DESCRIPTION SMALL TEXT</p>
          <button className="btn btn-danger" style={{background: "#E93232"}}>text btn</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
