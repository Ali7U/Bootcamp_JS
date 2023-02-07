import React, {useState} from 'react'
import { prod } from './Cards';




function Baskit(props:any) {
      
      const {cartItems}:any = props;
      



    const itemPrice = cartItems.reduce(
      (acc: number , curr: any) => (
        acc + curr.price * curr.qty, 0
      )
    );
    const taxPrice = itemPrice * 0.15;
    const totalPrice = itemPrice + taxPrice;
  return (
    <div>
      {cartItems.length === 0 && <div>cart is empty</div>}


    {/* {cartItems.map((item:any) =>(
        <>
        
        </>
    ))} */}
    </div>
  )
}


export default Baskit
