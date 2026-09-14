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

import { HiBackspace } from "react-icons/hi";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaCartArrowDown } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import TestHome from './TestHome';
import { AiTwotonePhone } from "react-icons/ai";

const ProductNew = () => {
  
  


  // ______________________________________________________________________________________________
  // سويبر صور كرت المنتجات الهردات والاكسسوار
  
  const [liImgcartsmartSwiperImg, setLiImgcartsmartSwiperImg] = useState([]);
  // ______________________________________________________________________________________________


  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [harddata,setHarddata]=useState([])
  const [accessoriesdata,setAccessoriesdata]=useState([])

  // ______________________________________________________________________________________________
  // كود التنقل للاعلى
  // const scrollToTop = () => {window.scrollTo({ top: 0});};
  // ______________________________________________________________________________________________

  // ______________________________________________________________________________________________
  // ايقاف زر الرجوع في المتصفح

  // useEffect(() => {
  //   window.history.pushState(null, "", window.location.href);
  //   window.onpopstate = () => {
  //     window.history.pushState(null, "", window.location.href);
  //   };
  // }, []);


useEffect(() => {
  window.history.pushState(null, "", window.location.href);
  window.onpopstate = () => {
    // أولاً غيّر الحالة
    setImgcartOnerB(false);

    // بعد كده ارجع الحالة الأصلية عشان تمنع الرجوع فعليًا
    window.history.pushState(null, "", window.location.href);
  };

  // تنظيف الحدث عند الخروج من الصفحة
  return () => {
    window.onpopstate = null;
  };
}, []);




  // ______________________________________________________________________________________________

  // ______________________________________________________________________________________________
  // الضافة للكرت
  const [cartAlrt, setCartAlrt] = useState([]);
  const [cartAlrtON, setCartAlrtON] = useState(false);
  // const cartAlrtCood = () => {cartAlrtON(true)}
      // setTimeout(()=>{setCartAlrtON(false)},3000)

if (cartAlrtON === true) {
  setTimeout(() => {
    setCartAlrtON(false);
  }, 3000);
}


  // ______________________________________________________________________________________________

  
  const [showCart, setShowCart] = useState(false);
  const [search, setSearch] = useState('');
  const [loding,setLodong]=useState(false);

  // ______________________________________________________________________________________________
  // روتنج الالعاب و الهردات والاكسيسوار
  
  const [gamesdata,setGamesdata]=useState(true)
  const [hardZone,setHardZone]=useState(false)
  const [accessoriesZone,setAccessoriesZone]=useState(false)

  // ______________________________________________________________________________________________
    //الكرت التعريفى للالعاب
    const [imgcart, setImgcart] = useState([]);
    const [imgcartOner, setImgcartOner] = useState(false);
    const [imgcartOnerB, setImgcartOnerB] = useState(false);


  // ______________________________________________________________________________________________

useEffect(()=>{
    setLodong(true)
    setTimeout(()=>{setLodong(false)},4000)
},[])

// ______________________________________________________________________________________________
// ______________________________________________________________________________________________
// ______________________________________________________________________________________________

  useEffect(() => {
    // https://fakestoreapi.com/products
    // \Mapi.json
      fetch('\Mapi.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

// ______________________________________________________________________________________________

  useEffect(() => {
    // https://fakestoreapi.com/products
    // \Mapi.json
      fetch('\Harddisc.json')
      .then(response => response.json())
      .then(data => setHarddata(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);
// ______________________________________________________________________________________________
  useEffect(() => {
    // https://fakestoreapi.com/products
    // \Mapi.json
      fetch('\Accessories.json')
      .then(response => response.json())
      .then(data => setAccessoriesdata(data))
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

const [Testorder , setTestorder ] = useState(false)
const HandleClickB = ()=>{setTestorder(true);};


console.log(Testorder);

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
    }
    //  else {
    //   alert('This game is already in your cart !!');
    // }
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
  //  console.log(productTitles);

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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
<>

{loding ?
<div className="loding">
<div className="zoomAnimation">
    </div>
</div>
//  <div className='loding'>
//  <PacmanLoader
//   color="#e94f08"
//   cssOverride={{}}
//   size={77}
//   speedMultiplier={1}
// /> <h1 className='loading000'>product Loading ...</h1> </div>

     :
<>

<div className={ cartAlrtON ? 'cartAlrtON':'cartAlrtOFF'}>
  <h3>{cartAlrt}</h3> <h3>in cart</h3>
</div>



{/* _________________________________________________________________________________________________
order Zone
_________________________________________________________________________________________________
_________________________________________________________________________________________________ */}


            <div className={ Testorder ? 'setTestorder':'setTestorderOff'}>
              <div className="setTestorderData">
                <PacmanLoader  color="yellowgreen" cssOverride={{}} size={120} speedMultiplier={1}/>
                <h1 className='setTestorderH1' style={{color:'black',textShadow:'0 0 5px yellowgreen'}}>تم ارسال طلبك بنجاح</h1>
                <h1 className='setTestorderH1' style={{color:'black',textShadow:'0 0 5px yellowgreen'}}>خدمة الشحن تستغرق من 3 الى 5 ايام عمل</h1>
                <Link href={'../contactA'} style={{margin:'10px'}}> <button className='botContactGo'><h1 style={{color:'yellowgreen',fontSize:'800'}}> اضغط هنا للذهاب الى صفحة التواصل </h1></button></Link>
              </div>
            </div>

{/* _________________________________________________________________________________________________
_________________________________________________________________________________________________ */}

<div className='ProductNew'>



{/*nav zone
_________________________________________________________________________________________________ 
_________________________________________________________________________________________________  */}

<div className='navProductNew'>

 {/* ______________________________________________________________________________________________ */}
 {/* روتنج الالعاب و الهردات والاكسيسوار */}
<button className={gamesdata ? 'switsherbuttonRun' : 'switsherbutton'} onClick={()=>{setGamesdata(true);setHardZone(false);setAccessoriesZone(false);window.scrollTo({ top: 0, behavior: 'smooth' });}}>Games</button>
<button className={hardZone ? 'switsherbuttonRun' : 'switsherbutton'} onClick={()=>{setHardZone(true);setGamesdata(false);setAccessoriesZone(false);window.scrollTo({ top: 0, behavior: 'smooth' });}}>Hard Drive</button>
<button className={accessoriesZone ? 'switsherbuttonRun' : 'switsherbutton'} onClick={()=>{setAccessoriesZone(true);setGamesdata(false);setHardZone(false);window.scrollTo({ top: 0, behavior: 'smooth' });}}>Accessories</button>
 {/* ______________________________________________________________________________________________ */}




{/* <IoHome /> */}




        <div className='searchZonecontaner'> 
          <input
            className='searthZone'
            type="search"
            placeholder="ابحث عن المنتج هنا"
            onChange={e => setSearch(e.target.value)}
            />
        </div>



        <button className='cartOpiner' onClick={() => setShowCart(!showCart)}>
          {showCart ? 
          <BsBagXFill/> 
          :
          <div className='cartNewandTitles'><h1 className='cartNewandTitlesData'>{productTitles.length}</h1></div>
          // <BsBagCheckFill />
          }
        </button>


      <Link href='/contactA' className='cartOpiner'><AiTwotonePhone /></Link>



</div>

                {/* <div className='navSpas'></div> */}

  {/* _________________________________________________________________________________________________ 
 _________________________________________________________________________________________________  */}








{/* 
cart zone
________________________________________________________________________________________________
________________________________________________________________________________________________
 */}

<div className='cartzonePN'>
      {showCart && (
        <div className="cartZone" style={{marginTop:'300px'}}>
          <div className="cart">
            <h2 className='cartHEDER'>Shopping Cart  <button className='liImgcartsmartOFFeR' onClick={() => setShowCart(!showCart)}><HiX /></button></h2>
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
<input className={hesham? 'Send animate__animated animate__zoomIn': 'hesham animate__animated animate__zoomOut'} type="submit" value="Click to Send" onClick={HandleClickB} />
</div>







</form>


      

              </li>
              <div className="totalSize">Total size: <h2>{TotalGB}</h2> GB</div>
            <button className={nextb?'cartsendButtom Send':'LockZone'} onClick={NextData}>NEXT</button>
          </div>
        </div>
      )}
</div>
{/* ____________________________________________________________________________________________
____________________________________________________________________________________________ */}



{/* media data zone
__________________________________________________________________________________________________
__________________________________________________________________________________________________ */}
<div className='mediaDataZone'>
<TestHome />
</div>
{/* __________________________________________________________________________________________________
__________________________________________________________________________________________________ */}
{/* 
products zone
_______________________________________________________________________________________________________
_______________________________________________________________________________________________________ */}



      <div className={gamesdata ?"productListContaner" : "gamesdata"} style={{zIndex:'1'}}>
      <div className="product-list">
        {products.filter(product => {
          return search.toLocaleLowerCase() === '' ? product : product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
        }).map(product => (
          <div key={product.title} className="product-item">
            <img className='catrImg' src={product.image} loading='lazy' alt={product.title} onClick={()=> {setImgcart([...imgcart, product]);setImgcartOner(true)}} />
            <h3 onClick={()=> {setImgcart([...imgcart, product]);setImgcartOner(true)}}>{product.title}</h3>
            <p>Size: {product.price} GB</p>
            <button className='orderbutton orderNaw' onClick={() => {addToCart(product);setCartAlrt(product.title);setCartAlrtON(true)}}><span className='checkSend orderbuttonTEXT'>Add to Cart</span></button>
          </div>
        ))}
      </div>
      </div>

{/* // ____________________________________________________________________________________________________
// ____________________________________________________________________________________________________
// ____________________________________________________________________________________________________ */}


      <div className={hardZone ?"productListContaner" : "gamesdata"}>
      <div className="product-list">
        {harddata.filter(harddata => {
          return search.toLocaleLowerCase() === '' ? harddata : harddata.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
        }).map(harddata => (
          <div key={harddata.title} className="product-item">
            <img className='catrImg' src={harddata.image} loading='lazy' alt={harddata.title} onClick={()=> {setImgcart([...imgcart, harddata]);setImgcartOnerB(true)}}/>
            <h3 onClick={()=> {setImgcart([...imgcart, harddata]);setImgcartOnerB(true)}}>{harddata.title}</h3>
            <p>price: {harddata.priceNow} L.E</p>
            <button className='orderbutton orderNaw' onClick={() => {addToCart(harddata);setCartAlrt(harddata.title);setCartAlrtON(true)}}><span className='checkSend orderbuttonTEXT'>Add to Cart</span></button>
          </div>
        ))}
      </div>
      </div>

{/* // ____________________________________________________________________________________________________
// ____________________________________________________________________________________________________
// ____________________________________________________________________________________________________ */}
      <div className={accessoriesZone ?"productListContaner" : "gamesdata"}>
      <div className="product-list">
        {accessoriesdata.filter(accessoriesdata => {
          return search.toLocaleLowerCase() === '' ? accessoriesdata : accessoriesdata.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
        }).map(accessoriesdata => (
          <div key={accessoriesdata.title} className="product-item">
            <img className='catrImg' src={accessoriesdata.image} loading='lazy' alt={accessoriesdata.title} onClick={()=> {setImgcart([...imgcart, accessoriesdata]);setImgcartOnerB(true)}}/>
            <h3 onClick={()=> {setImgcart([...imgcart, accessoriesdata]);setImgcartOnerB(true)}}>{accessoriesdata.title}</h3>
            <p>price: {accessoriesdata.priceNow} L.E</p>
            <button className='orderbutton orderNaw' onClick={() => {addToCart(accessoriesdata);setCartAlrt(accessoriesdata.title);setCartAlrtON(true)}}><span className='checkSend orderbuttonTEXT'>Add to Cart</span></button>
          </div>
        ))}
      </div></div>




{/* _______________________________________________________________________________________________________
_______________________________________________________________________________________________________ */}
{/* detail game cart zone
_________________________________________________________________________________________________
_________________________________________________________________________________________________ */}

<div className={imgcartOner ?'test2026' :'test2026Off'}>

{/* <img className='catrImg' src={setImgcart} loading='lazy' alt={'nane'} /> */}
{imgcart.map(product => (
                <li key={product.id}  className='liImgcartsmart'>
                  <div className='test2026Heider'>
                  <button className='liImgcartsmartOFFeR'  onClick={() => {setImgcart([]); setImgcartOner(false);}}><AiOutlineClose /></button>
                  <img className='Imgcartsmart' src={product.image} loading='lazy' alt={product.title} />
                     <div className='dataImgcartsmart'>
                      <h1 style={{color:'#d7fc71b2',width:'100%',textAlign:'center'}}>{product.title}</h1>
                      <h1 style={{color:'#ff9900'}}>Description</h1>
                      <h3>{product.description}</h3>
                      <hr />
                      <h1 style={{color:'#ff9900'}}>System Requirements</h1>
                      <div style={{gap:'5px',display:'flex',flexDirection:'column'}}>
                      <h3 style={{margin:'5px'}}><span style={{color:'#adff2f'}}>OS : </span>{product.category.OpenSYSTEM}</h3>
                      <h3 style={{margin:'5px'}}><span style={{color:'#adff2f'}}>CPU : </span>{product.category.Processor}</h3>
                      <h3 style={{margin:'5px'}}><span style={{color:'#adff2f'}}>GPU : </span>{product.category.VideoCard}</h3>
                      <h3 style={{margin:'5px'}}><span style={{color:'#adff2f'}}>RAM : </span>{product.category.MemoryRAM}</h3>
                      </div>
                      <h1>size by gigabyte</h1>
                      <span style={{color:'yellowgreen', fontSize:'50px'}}>{product.price} GB</span> 
                  <hr/>
                  <button className='orderbutton orderNaw'  onClick={() => {addToCart(product);setImgcart([]);setCartAlrt(product.title);setCartAlrtON(true); setImgcartOner(false)}}><span className='checkSend orderbuttonTEXT'>Add to Cart</span><span style={{paddingLeft:'5px',fontSize:'20px'}}><FaCartArrowDown /></span></button>           
                  <button className='orderbutton orderNaw' onClick={() => {setImgcart([]); setImgcartOner(false);}}><span className='checkSend orderbuttonTEXT'> Go back</span><span style={{paddingLeft:'5px',fontSize:'20px'}}><HiBackspace /></span></button>
                                        <div className='spaceImgcart'></div>
                     </div>
                   </div>
                  </li>
                  
                
              ))}
</div>


{/* _________________________________________________________________________________________________
_________________________________________________________________________________________________ */}
{/* detail hard + accesor cart zone */}

<div className={imgcartOnerB ?'test2026' :'test2026Off'}>

{/* <img className='catrImg' src={setImgcart} loading='lazy' alt={'nane'} /> */}
{imgcart.map(product => (
                <li key={product.id}  className='liImgcartsmart'>
                  <div className='test2026Heider'>
                  <button className='liImgcartsmartOFFeR'  onClick={() => {setImgcart([]); setImgcartOnerB(false);setLiImgcartsmartSwiperImg([]);}}><AiOutlineClose /></button>
                  <img className='Imgcartsmart' src={product.image} loading='lazy' alt={product.title} />
                     <div className='dataImgcartsmart'>
                      <h1 style={{color:'#d7fc71b2',width:'100%',textAlign:'center'}}>{product.title}</h1>
                      <h1 style={{color:'#ff9900'}}>Description</h1>
                      <h3>{product.description}</h3>
                      <hr />
                      <h1 style={{color:'#ff9900'}}>Images</h1>

                      <div className='liImgcartsmartSwiper'>
                      <img  className='liImgcartsmartSwiperImg' src={product.imageA} loading='lazy'   onClick={()=>{setLiImgcartsmartSwiperImg(product.imageA)}}/>
                      <img  className='liImgcartsmartSwiperImg' src={product.imageB} loading='lazy'   onClick={()=>{setLiImgcartsmartSwiperImg(product.imageB)}}/>
                      <img  className='liImgcartsmartSwiperImg' src={product.imageC} loading='lazy'   onClick={()=>{setLiImgcartsmartSwiperImg(product.imageC)}} />
                      <img  className='liImgcartsmartSwiperImg' src={product.imageD} loading='lazy'   onClick={()=>{setLiImgcartsmartSwiperImg(product.imageD)}} />
                      </div>
                      
                      <div className='liImgcartsmartSwiperImgVEWdev'>
                      <img  className='liImgcartsmartSwiperImgVEW' src={liImgcartsmartSwiperImg} loading='lazy'  />
                      </div>
                      <hr />

                      {/* <h1 style={{color:'#ff9900'}}>System Requirements</h1>
                      <div style={{gap:'5px',display:'flex',flexDirection:'column'}}>
                      <h3 style={{margin:'5px'}}><span style={{color:'#adff2f'}}>OS : </span>{product.category.OpenSYSTEM}</h3>
                      <h3 style={{margin:'5px'}}><span style={{color:'#adff2f'}}>CPU : </span>{product.category.Processor}</h3>
                      <h3 style={{margin:'5px'}}><span style={{color:'#adff2f'}}>GPU : </span>{product.category.VideoCard}</h3>
                      <h3 style={{margin:'5px'}}><span style={{color:'#adff2f'}}>RAM : </span>{product.category.MemoryRAM}</h3>
                      </div> */}
                      <h1>price</h1>
                      <span style={{color:'yellowgreen', fontSize:'50px'}}>{product.priceNow} LE</span> 
                  <hr/>
                  <button className='orderbutton orderNaw'  onClick={() => {addToCart(product);setImgcart([]); setImgcartOnerB(false);setLiImgcartsmartSwiperImg([]);setCartAlrt(product.title);setCartAlrtON(true)}}><span className='checkSend orderbuttonTEXT'>Add to Cart</span><span style={{paddingLeft:'5px',fontSize:'20px'}}><FaCartArrowDown /></span></button>           
                  <button className='orderbutton orderNaw' onClick={() => {setImgcart([]); setImgcartOnerB(false);setLiImgcartsmartSwiperImg([]);}}><span className='checkSend orderbuttonTEXT'> Go back</span><span style={{paddingLeft:'5px',fontSize:'20px'}}><HiBackspace /></span></button>
                                        <div className='spaceImgcart'></div>
                     </div>
                   </div>
                  </li>
                  
                
              ))}
</div>

{/* _________________________________________________________________________________________________
_________________________________________________________________________________________________ */}







</div>
</>}

</>



    </div>
  )
}

export default ProductNew

