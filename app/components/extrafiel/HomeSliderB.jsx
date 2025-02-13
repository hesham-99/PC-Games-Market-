"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { SiEpicgames } from "react-icons/si";
import { SiRockstargames } from "react-icons/si";
import { SiRiotgames } from "react-icons/si";
import { SiRepublicofgamers } from "react-icons/si";
import { BiSolidGame } from "react-icons/bi";
import { SiMonogame } from "react-icons/si";
import { SiGameloft } from "react-icons/si";
import { SiBoardgamegeek } from "react-icons/si";
import { SiRedcandlegames } from "react-icons/si";
import { GiBackgammon } from "react-icons/gi";
import { SiPcgamingwiki } from "react-icons/si";
import { FaFantasyFlightGames } from "react-icons/fa";


function SimpleSlider() {
 
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
  };
  
  return (
    <div className="slider-container">
      <Slider {...settings}>

        <div className="frimeSwipesImg iconCom">
        <div className="cartOpiner"><SiEpicgames /></div>
        </div>
        
        <div className="frimeSwipesImg iconCom">
        <div className="cartOpiner"><SiRockstargames /></div>
        </div>
        
        <div className="frimeSwipesImg iconCom">
        <div className="cartOpiner"><SiRiotgames /></div>
        </div>
        
        <div className="frimeSwipesImg iconCom">
        <div className="cartOpiner"><SiRepublicofgamers /></div>
        </div>
        
        <div className="frimeSwipesImg iconCom">
        <div className="cartOpiner"><BiSolidGame /></div>
        </div>
        
        <div className="frimeSwipesImg iconCom">
        <div className="cartOpiner"><SiMonogame /></div>
        </div>
        
        <div className="frimeSwipesImg iconCom">
        <div className="cartOpiner"><SiGameloft /></div>
        </div>
        
        <div className="frimeSwipesImg iconCom">
        <div className="cartOpiner"><SiBoardgamegeek /></div>
        </div>
        
        <div className="frimeSwipesImg iconCom">
        <div className="cartOpiner"><SiRedcandlegames /></div>
        </div>
        
        <div className="frimeSwipesImg iconCom">
        <div className="cartOpiner"><GiBackgammon /></div>
        </div>
        
        <div className="frimeSwipesImg iconCom">
        <div className="cartOpiner"><SiPcgamingwiki /></div>
        </div>
        
        <div className="frimeSwipesImg iconCom">
        <div className="cartOpiner"><FaFantasyFlightGames /></div>
        </div>
        
        
      </Slider>
    </div>
  );
}

export default SimpleSlider;

