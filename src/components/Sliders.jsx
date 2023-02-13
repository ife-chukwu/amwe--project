import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import slide1 from "../images/Rotating-picture/slide1.jpeg";
import slide2 from "../images/Rotating-picture/slide2.jpg";
import slide3 from "../images/Rotating-picture/slide3.jpg";
import slide4 from "../images/Rotating-picture/slide4.jpg";
import slide5 from "../images/Rotating-picture/slide5.jpg";
import slide6 from "../images/Rotating-picture/slide6.jpg";

const Sliders = () => {
    const images = [slide1, slide2, slide3, slide4, slide5, slide6];

  return (
    <Zoom scale={0.7} arrows={false} arrows indicators={true} duration={3000}>
      {images.map((each, index) => (
        <div
          key={index}
          className="md:w-full md:h-[80vh]"
        >
          <img
            className="shadow-2xl w-full h-full"
            alt="Slide Image"
            src={each}
          />
        </div>
      ))}
    </Zoom>
  );
};

export default Sliders;
