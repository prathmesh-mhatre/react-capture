import React from "react";
import { About, Description, Hide, Image } from "../styles";
//importing images
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <About className="about">
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span> dreams </span> come
            </h2>
          </Hide>
          <Hide>
            <h2>True</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills
        </p>
        <button>Contact us</button>
      </Description>
      <Image>
        <img src={home1} alt="" />
      </Image>
    </About>
  );
};

//Styled Components

export default AboutSection;
