import React from 'react'
import "./Product.css";
import { useState } from 'react';
import { useStateValue } from './StateProvider';

function Product({id, title, image, price, rating,}) {
  
  const [{basket}, dispatch] = useStateValue();
  const addToBasket =() => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id:id,
        title:title,
        image:image,
        rating:rating,
        price:price,
      }
    })
  }

  return (
   
   <> 
          
    <div className='product'>
      <div className='product_info'>
      <p><strong>{title}</strong></p>
      <p className='product_price'>
        <small>$</small>
        <strong>{price}</strong>
        </p>
        <div className='product_rating'>
         {Array(rating).fill().map((_)=>(<p>⭐</p>))}
          </div>
          <div className='product_button'>
        <img src={image} alt=""/>
        <button onClick={addToBasket}>Add to basket</button>
        </div>
    </div>
    </div>
  </>
  )
}

export default Product