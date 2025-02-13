"use client";

import React from 'react'

import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import Form from 'react-bootstrap/Form';
import { useState , useEffect } from 'react';
import { ScaleLoader } from 'react-spinners';
import Image from 'next/image';



const Contact = () => {
  
  
  const [loding , setLoding] = useState(false)
  
  useEffect(()=>{
  setLoding(true);
  setTimeout(()=>{
    setLoding(false)
  },3000)
  },[])



 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_al1d1ei', 'template_qa0qhlb', form.current, {
        publicKey: 'AVv7bM7Scd-NtXyAa',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
        e.target.reset()
    };



    const handleClick = () => {
      alert('coming soon');
    };
  
  



  return (
<>
{
 
 loding ? 
 <div className='loding'>
 <ScaleLoader color="#adff2f" cssOverride={{}} height={200} 
      loading margin={4} radius={15} speedMultiplier={2} width={15} /> <h1 className='loading000'>We are always happy to communicate with you</h1> </div>
      : 





      

        <>

    

{/* 
<div  className='nav'>
<div className='logo'> <Link to='/'><img src={require('./logo512.png')}/></Link> </div>
<div className='routes'>
<Link to='/'>Home</Link>
<Link to='/AllProducts'>Products</Link>
<Link to='/Contacto'><span className='whereNav'>Contact</span></Link>
</div>
</div>
*/}

<div className='navSpas'></div>



    <div className='ContactP'>




      <div className="contactAlpha">
      <div className='EmailAndPhone locetion'><h1 className='EmailAndPhoneip' >phone: </h1><h2>+20 109 488 5787</h2></div>
      <div className='EmailAndPhone locetion'><h1 className='EmailAndPhoneip'>E-mail: </h1><h2>gamesmarketpc@gmail.com</h2></div>
      <div className='EmailAndPhone'><div className='locetion'><h1 className='EmailAndPhoneip'>location</h1>
      <a target="_blank" href="https://maps.google.com/?q=30.0034588,31.1541049" className="location  animate__animated animate__flash"><i class="bi bi-linkedin"><Image style={{height:'100px'}} className='mediaImg' src={require("./extrafiel/3img/media/location.png")} alt="location" /></i></a>
      </div></div>
      </div>

      <div className="contactAlpha">
      <div className='medeia'>
        <a  href="#" className="twitter animate__animated animate__fadeInBottomLeft"><i class="bi bi-twitter"> <Image style={{height:'100px'}} className='mediaImg' src={require("./extrafiel/3img/media/x twetar.png")} alt="twetar"  onClick={handleClick} /></i></a>
        <a  href="#" className="instagram  animate__animated animate__fadeInBottomRight"><i class="bi bi-instagram"> <Image style={{height:'100px'}} className='mediaImg' src={require("./extrafiel/3img/media/instagram.png")} alt="instagram"  onClick={handleClick} /></i></a>
        <a target="_blank" href="https://www.facebook.com/profile.php?id=100083220524451" className="facebook  animate__animated animate__fadeInBottomLeft"><i class="bi bi-facebook"> <Image style={{height:'100px'}} className='mediaImg' src={require("./extrafiel/3img/media/facebook.png")} alt="facebook"  /> </i></a>
        <a target="_blank" href="https://wa.me/201094885787" className="linkedin  animate__animated animate__fadeInBottomRight"><i class="bi bi-linkedin"><Image style={{height:'100px'}} className='mediaImg' src={require("./extrafiel/3img/media/whatsapp logo.png")} alt="whatsapp" /></i></a>
      </div>
      </div>
<div style={{height:'4px'}}></div>



    </div>
 


        </>
      }











</>
  )
}

export default Contact





