"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";


function SimpleSlider() {
 
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, 
  };
  
  return (
    <div className="slider-container">
      <Slider {...settings}>

        <div className="frimeSwipesImg">
            <Image className="swipesImg" src={require("./3img/swiper/swipA.png")} alt="" />
        </div>
        <div className="frimeSwipesImg">
        <Image className="swipesImg" src={require("./3img/swiper/swipB.png")} alt="" />
        </div>
        <div className="frimeSwipesImg">
        <Image className="swipesImg" src={require("./3img/swiper/swipC.png")} alt="" />
        </div>
        
      </Slider>
    </div>
  );
}

export default SimpleSlider;
