"use client";

import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import "../style/tass.css"
import logoamg from "../components/extrafiel/3img/swiper/swipA.png";
const TestHome = () => {

const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('\Mapi.json')
      .then(response => response.json())
      .then(data => {
        // الحصول على آخر 5 منتجات فقط
        const lastFiveProducts = data.slice(-5);
        setProducts(lastFiveProducts);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);



 
  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, 
  };






  return (
        <div className="slider-container">
          <Slider {...settings}>
            <div className="frimeSwipesImg">
                <Image className="swipesImg" src={logoamg} alt="" />
            </div>
     {products.map((product) => (
      <div key={product.id} className='swipehomecontainerA'>
      <img className='swipeImghome' src={product.homebace} loading='lazy' alt={product.title} />
      </div>
    // <ul key={product.id} style={{width:'100%',height:'400px',background:`url(${product.homebac})`,display: 'flex', justifyContent: 'center', alignItems: 'center',gap:'25px',flexWrap:'wrap'}}>
    //     <li  style={{width:'50%',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}} className='HomecatrConra' ><h1>{product.title}</h1>
    //     {/* <img className='HomecatrImg' src={product.image} loading='lazy' alt={product.title} /> */}
    //     </li>
    // </ul>
  ))}
  
        </Slider>
      </div>
  )
}

export default TestHome
