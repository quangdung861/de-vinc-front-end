import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Wrapper } from './styles';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Wrapper>
      <div className="slider-container">
        <Slider {...settings}>
          <div className='carousel-item'>
            <img src='https://theme.hstatic.net/1000333436/1000835503/14/slideshow_1_master.jpg?v=473' alt="" />
          </div>
          <div className='carousel-item'>
            <img src='https://theme.hstatic.net/1000333436/1000835503/14/slideshow_2_master.jpg?v=473' alt="" />
          </div>
        </Slider>
      </div>
    </Wrapper>
  )
}

export default Carousel