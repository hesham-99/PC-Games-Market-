// "use client";

// import React, { useState, useEffect } from 'react';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {

//     // https://fakestoreapi.com/products
//     // \Mapi.json
//       fetch('\Mapi.json')
//       .then(response => response.json())
//       .then(data => setProducts(data))
//       .catch(error => console.error('Error fetching products:', error));
//   }, []);

//   return (
//     <div>
//       <h1>Products</h1>
//       <ul>
//         {products.map((product) => (
//           <li>{product.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ProductList;




"use client";

import React, { useState, useEffect } from 'react';

const ProductList = () => {
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

  return (
    <div style={{background:"#000000c9" ,width:'100%',display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <h1 style={{color:'#ff9900',padding:'5px',background:'black',borderRadius:'5px',margin:"5px"}} >New Games</h1>
      <ul style={{display: 'flex', justifyContent: 'center', alignItems: 'center',gap:'25px'}}>
        {products.map((product) => (
          <li key={product.id} className='HomecatrConra' ><img className='HomecatrImg' src={product.image} loading='lazy' alt={product.title} /></li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
