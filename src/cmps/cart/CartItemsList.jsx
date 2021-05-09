import React from "react";
import {CartItemPreview} from './CartItemPreview';

export function CartItemList({cartItems, addToBuyList}){
    return(
        <section className= "cart-grid ">
        {
            cartItems.map(item=>
           <CartItemPreview item={ item } 
           addToBuyList={addToBuyList}
           key={item._id}
           />)
        }
    </section>
    )
}