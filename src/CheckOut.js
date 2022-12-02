import React from 'react'
import Header from './Header'
import { useStateValue } from './StateProvider'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { Key } from '@mui/icons-material';

function CheckOut() {
  const [{basket}] = useStateValue();
  return (
    <>
    <Header/>
    <div className='checkout'>
      <div className='checkout_ad_img'>
    <img className = 'checkout_ad' 
    src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg"
    alt=""
    />
    </div>
    {/* it is a condition : if the basket length.. */}
    {basket?.length === 0?(
      <div>
        <h2>Your shopping basket is empty</h2>
        <p>You can add items by clicking on the button: 'add to basket'</p>
      </div>
    ):(
      <div><h2 className='checkout_title'>Your shopping basket :</h2>
      
      <div className='checkout_map'>
      {basket.map(item =>(
         <CheckoutProduct
         id={item.id}
         title={item.title}
         image={item.image}
         price={item.price}
         rating={item.rating}
         />
      ))}
      </div>
     
      </div>
    )}
    </div>
    </>
  )
}

export default CheckOut