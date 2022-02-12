import React from 'react';
import {  Carousel } from 'react-bootstrap';

const Banner = () => {
  return (
  <div>
  <Carousel fade>
    <Carousel.Item>
      <img id='bannerImg' className="d-block w-100" src="/images/bannerFlowerPower.jpeg" alt="First slide"/>
    </Carousel.Item>
    <Carousel.Item>
      <img id='bannerImg' className="d-block w-100" src="/images/advancedBanner.jpg" alt="Second slide"/>
    </Carousel.Item>
    <Carousel.Item>
      <img id='bannerImg' className="d-block w-100" src="/images/advanced2Banner.jpg"  alt="Third slide" />
    </Carousel.Item>
  </Carousel>
  </div>
  )
};

export default Banner;
