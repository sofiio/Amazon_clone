import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

export default function CheckoutProduct({id, title, image, price, rating}) {
  const [{basket}, dispatch] = useStateValue();
  const removeFromBasket = () =>{
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id:id,
    })
  }
  
  return (
    <div className='checkoutProduct'>
        <img src={image} alt=""/>
        <div className='checkoutProduct_info'>
            <p className='checkoutProduct_title'><strong>{title}</strong></p>
            <p className='checkoutPrice'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product_rating'>
              {Array(rating).fill().map((_)=>(<p>⭐</p>))}
          </div>
          <button onClick={removeFromBasket} className='product_remove'>Remove from basket</button>
            </div>
    </div>
  )
}
