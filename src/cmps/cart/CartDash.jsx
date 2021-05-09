import React from "react";

function getTotalPrice(cartItems) {
    let sum = 0;
    cartItems.forEach(item => sum += item.price)
    return sum;
}


export function CartDash({ cartItems, clearBuyItems }) {

    const totalPrice = getTotalPrice(cartItems);

    return (
        <section className="cart-dash">
            {cartItems.map((item,idx) =>
                <div className="cart-info flex sb" key={idx}>
                    <div>{item.name}</div>
                    <div>${item.price}</div>
                </div>
            )}
            <div className="cart-payment flex column">
                <div className="pb10"><span>total:</span><span>${totalPrice}</span></div>
                <button className="pb10 classic-btn" onClick={()=>clearBuyItems(cartItems)}>Buy All</button>
                </div>
        </section>
    )
}
