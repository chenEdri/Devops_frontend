import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { loadCartToBuy, loadCartItems, addToCartList, RemoveItemsFromCart } from '../store/action/cartAction';
import { loadSales, saveSale } from '../store/action/saleAction.js';
import { CartItemList } from '../cmps/cart/CartItemsList.jsx';
import { CartDash } from '../cmps/cart/CartDash.jsx'

export function Home(props) {
  const [boolCart, setBoolCart] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const { cartItems, itemsToBuy } = useSelector(state => state.cartReducer);
  const { sales } = useSelector(state => state.saleReducer)
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('useEffect');
    dispatch(loadCartItems())
    dispatch(loadCartToBuy())
    dispatch(loadSales())
  }, [boolCart, isChange])

  const addToBuyList = function (item) {
    let itemToBuy = item;
    itemToBuy.isToBuy = true;
    dispatch(addToCartList(itemToBuy));
    // setIsChange(!isChange);
  }

  const clearBuyItems = function (items) {
    for (let item of items) {
      dispatch(saveSale(item, sales));
    }
    dispatch(RemoveItemsFromCart())
    setIsChange(!isChange);
  }

  if (!cartItems) {
    return (
      <div className="main-container">
        <h2>your cart is empty</h2>
      </div>
    )
  }

  return (
    <section className="main-container">
      {(itemsToBuy.length) ? (
        <div className="flex end column shopping-cart">
          <div onClick={() => setBoolCart(!boolCart)}>Shopping Cart <span>{itemsToBuy.length}</span></div>
          {(boolCart && cartItems) ? <div><CartDash cartItems={itemsToBuy} clearBuyItems={clearBuyItems} /></div> : ''}
        </div>) : <div className="flex end shopping-cart">Shopping Cart</div>}
      <div>
        <CartItemList
          cartItems={cartItems}
          addToBuyList={addToBuyList} />
      </div>
    </section>
  );

}


