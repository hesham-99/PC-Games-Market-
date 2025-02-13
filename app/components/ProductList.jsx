"use client";

import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import  { useRef } from 'react';
// import HashLoader from 'react-spinners/HashLoader';
import emailjs from '@emailjs/browser';
// import { useNavigate } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';
import { IoHome } from "react-icons/io5";
import { RiArrowGoBackLine } from "react-icons/ri";
import { HiX } from "react-icons/hi";
// import { FaBeer } from "react-icons/fa";
import { BsBackspaceFill } from "react-icons/bs";
import { BsBagCheckFill } from "react-icons/bs";
import { BsBagXFill } from "react-icons/bs";
// import { IoCall } from "react-icons/bs";
import Link from 'next/link';



const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [search, setSearch] = useState('');
  const [loding,setLodong]=useState(false)



useEffect(()=>{
    setLodong(true)
    setTimeout(()=>{setLodong(false)},2500)
},[])



  useEffect(() => {

    // https://fakestoreapi.com/products
    // \Mapi.json
      fetch('\Mapi.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);


// ______________________________________________________________________________________________
// ______________________________________________________________________________________________
// ______________________________________________________________________________________________

const[inputValueName,setInputValueName]= useState ('')
const[inputValueEmail,setInputValueEmail]= useState ('')
const[inputValuePhone,setInputValuePhone]= useState ('')
const handelChangeName = (e)=>{setInputValueName(e.target.value)}
const handelChangeEmail = (e)=>{setInputValueEmail(e.target.value)}
const  [ hesham ,setHesham]= useState(false)
const handelChangePhone = (e)=>{setInputValuePhone(e.target.value);if(e.target.value.length >= 11 ){setHesham(true)} else if (e.target.value.length <= 11 ){setHesham(false)}}


const [nexta , setNexta] = useState(false)
const [nextb , setNextb] = useState(true)

const NextData = ()=>{
  setNexta(true);
  setNextb(false)
}

const NextDataB = ()=>{
  setNexta(false);
  setNextb(true)
}

// const navigate = useNavigate();
// const handleClickB = () => {
//   setTimeout(() => {
//     navigate('/Contact'); 
//   }, 1000); 
// };

const [testorder , setTestorder ] = useState(false)
const handleClickB= ()=>{
  setTestorder(true)
};




const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('service_rbp8max', 'template_gajonz9', form.current, {
      publicKey: 'y1niHeZ9lTaiUtQ0g',
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


// ______________________________________________________________________________________________
// ______________________________________________________________________________________________
// ______________________________________________________________________________________________



  const addToCart = product => {
    // Check if the product already exists in the cart
    if (!cart.some(cartItem => cartItem.id === product.id)) {
      setCart([...cart, product]);
    } else {
      alert('This game is already in your cart !!');
    }
  };

  const removeFromCart = productId => {
    setCart(cart.filter(product => product.id !== productId));
  };


  
  // State for product titles in cart
  const [productTitles, setProductTitles] = useState([]);
  // Update productTitles state whenever the cart changes
  useEffect(() => {
    const titles = cart.map(product => product.title);
    setProductTitles(titles);
  }, [cart]);
  // console.log(productTitles);

  // State for product price in cart
  const [productPrice, setProductPrice] = useState([]);
  // Update productPrice state whenever the cart changes
  useEffect(() => {
    const price = cart.map(product => product.price);
    setProductPrice(price);
  }, [cart]);
  // console.log(productPrice);

  const sumProductPrice = productPrice.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  // console.log(sumProductPrice);
  const TotalGB = parseFloat(sumProductPrice.toFixed(2));
// console.log(TotalGB);






// ____________________________________________________________________________________________________
// ____________________________________________________________________________________________________
// ____________________________________________________________________________________________________
// ____________________________________________________________________________________________________
// ____________________________________________________________________________________________________


  return (
  <>

{loding ? 
 <div className='loding'>
 <PacmanLoader
  color="#e94f08"
  cssOverride={{}}
  size={77}
  speedMultiplier={1}
/> <h1 className='loading000'>Games Loading ...</h1> </div>

     :



    <div>



            <div className={ testorder ? 'setTestorder':'setTestorderOff'}>
              <div className="setTestorderData">
                <PacmanLoader  color="yellowgreen" cssOverride={{}} size={120} speedMultiplier={1}/>
                <h1 className='setTestorderH1' style={{color:'black',textShadow:'0 0 5px yellowgreen'}}>Your order has been sent.</h1>
                <Link href={'../contactA'} style={{margin:'10px'}}> <button className='botContactGo'><h1 style={{color:'yellowgreen',fontSize:'800'}}> Go to the contact page...</h1></button></Link>
              </div>
            </div>




      <nav>
      <Link href='/' className='cartOpiner'><IoHome /></Link>
        <div className='searchZonecontaner'> 
          <input
            className='searthZone'
            type="search"
            placeholder="ابحث عن اللعبة هنا"
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <button className='cartOpiner' onClick={() => setShowCart(!showCart)}>
          {showCart ? <BsBagXFill/> : <BsBagCheckFill />
          } 
        </button>
      </nav>

      <div className='navSpas'></div>
      
      {showCart && (
        <div className="cartZone">
          <div className="cart">
            <h2 className='cartHEDER'>Shopping Cart  <button className='onCartHoping' onClick={() => setShowCart(!showCart)}><HiX /></button></h2>
            <ul className={nextb?'cartContet':'LockZone'}>
              {cart.map(product => (
                <li key={product.id} className={nextb?'cartproSel':'LockZone'} >
                  {product.title} - <span style={{color:'yellowgreen'}}>{product.price}</span> GB
                  <button className='removeButton' onClick={() => removeFromCart(product.id)}><BsBackspaceFill/></button>
                  <hr/></li>
                
              ))}
              

            </ul>
              <li className={nexta?'LockZoneA':'nexta'}  style={{width:'100%', height:'100%'}}>
              

              <div className='forminfo'><h1 className='forminfoB'>برجاء كتابة البيانات لارسال الطلب  </h1><button className='gobackButtomCart' onClick={NextDataB}><RiArrowGoBackLine /></button></div>
              
              
              
      <div className='formData'>
      <label>Name</label>
      <input className='Name getData' type="text" name="Name" value={inputValueName}  onChange={handelChangeName} />
      </div>

      <div className='formData'>
      <label>Phone</label>
      <input className='Phone getData' type="number" name="Phone"  value={inputValuePhone} onChange={handelChangePhone}  />
      </div>
 

       
      <form ref={form} onSubmit={sendEmail} >

<div style={{display:'none'}}>
<label>Name</label>
<input className='Name getData' type="text" name="Name" value={inputValueName}  readOnly/>
</div>

<div className={nexta ? 'formData':"nexta"} style={{display:'none'}}>
<label>Phone</label>
<input className='Phone getData' type="number" name="Phone" value={inputValuePhone} readOnly />
</div>

<div className={nexta ? 'formData':"nexta"}style={{display:'none'}} >
<label>Size by gigabyte</label>
<input className='Size getData' type="text" name="Size"  value={sumProductPrice +'GB'} />
</div>

<div className={nexta ? 'formData':"nexta"} style={{display:'none'}}>
<label>Selected Games</label>
<textarea id='message' className='MessageProdact getData' name="message" value={productTitles}/>
</div> 

<div className='formData'>
<input className={hesham? 'Send animate__animated animate__zoomIn': 'hesham animate__animated animate__zoomOut'} type="submit" value="Click to Send" onClick={handleClickB} />
</div>







</form>


      

              </li>
              <div className="totalSize">Total size: <h2>{TotalGB}</h2> GB</div>
            <button className={nextb?'cartsendButtom Send':'LockZone'} onClick={NextData}>NEXT</button>
          </div>
        </div>
      )}
      <div className="productListContaner">
      <div className="product-list">
        {products.filter(product => {
          return search.toLocaleLowerCase() === '' ? product : product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
        }).map(product => (
          <div key={product.title} className="product-item">
            <img className='catrImg' src={product.image} loading='lazy' alt={product.title} />
            <h3>{product.title}</h3>
            <p>Size: {product.price} GB</p>
            <button className='orderbutton orderNaw' onClick={() => addToCart(product)}><span className='checkSend orderbuttonTEXT'>Add to Cart</span></button>
          </div>
        ))}
      </div>
      </div>

    </div>
}</>
  );
};

export default ProductList;
