import "./slider.scss";
import image1 from "../../assets/sliders/apt1.jpg";
import image2 from "../../assets/sliders/apt2.jpg";
import image3 from "../../assets/sliders/apt3.jpg";
import image4 from "../../assets/sliders/apt4.jpg";

const Slider = () => {
  return (
    <>
      <div>
        <h2>The most affordable luxury suits</h2>
      </div>
      <section className="slider-container">
        <div className="slider-wrapper">
          <div className="slider">
            <img id="slide-1" src={image1} alt="img1" />
            <img id="slide-2" src={image2} alt="img2" />
            <img id="slide-3" src={image3} alt="img3" />
            <img id="slide-4" src={image4} alt="img4" />
          </div>
          <div className="slider-nav">
            <a href="#slide-1"></a>
            <a href="#slide-2"></a>
            <a href="#slide-3"></a>
            <a href="#slide-4"></a>
          </div>
        </div>
      </section>
    </>
  );
};
export default Slider;
