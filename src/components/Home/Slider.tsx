import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import './Slider.css';
import { clientImg } from "../../assets";

const Testimonials: React.FC = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6100}
    >
      <div>
        <div className="myCarousel">
          <p>I know that my family deserves the best. It was the right decision for us to use this company. Their services are great!</p>
          <img className="mt-4" src={clientImg} />
          <h3 className="mt-2">JOSEPH MICHAEL</h3>
        </div>
      </div>

      <div>
      <div className="myCarousel">
          <p>Everything about your company is great. From quality products to impeccable customer support.</p>
          <img className="mt-4" src={clientImg} />
          <h3 className="pt-2">ROSE Ashley</h3>
        </div>
      </div>
    </Carousel>
  );
};

export default Testimonials;
