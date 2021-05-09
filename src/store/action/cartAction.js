import { cartService } from '../../services/cartService.js'

export function loadCartItems() {
  return async dispatch => {
    const cartItems = await cartService.query();
    dispatch({ type: 'SET_CART_ITEMS', cartItems })
  };
}

export function loadCartToBuy() {
  return async dispatch => {
    const cartItems = await cartService.queryRes(true);
    console.log('cartItems-', cartItems);
    dispatch({ type: 'SET_CART_TO_BUY', cartItems })
  }
}

export function loadCartItem(itemId) {
  return async dispatch => {
    const cartItem = await cartService.getById(itemId);
    dispatch({ type: 'SET_CART_ITEMS', cartItem })
  }
}

export function removeCartItem(itemId) {
  return async dispatch => {
    await cartService.remove(itemId)
    dispatch({ type: 'REMOVE_CART_ITEM', itemId })
  };
}

export function saveItemToCart(item) {
  return async dispatch => {
    const cartItem = await cartService.save(item);
    dispatch({ type: 'SAVE_CART_ITEM', cartItem })
  };
}

export function addToCartList(item) {
  console.log('addtocartlist');
  return async dispatch => {
    await cartService.save(item);
    dispatch({ type: 'ADD_TO_BUY', item });
  }
}

export function RemoveItemsFromCart() {
  return async dispatch => {
    await cartService.removeAll();
    dispatch({ type: 'CLEAR_CART_TO_BUY' })
  }
}