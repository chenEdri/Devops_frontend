const initialState = {
    cartItems: [],
    itemsToBuy:[]
}

export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_CART_ITEMS':
            return {
                ...state,
                cartItems: action.cartItems
            }
        case 'REMOVE_CART_ITEM':
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItems => cartItems.itemId !== action.itemId)
            }
        case 'SAVE_CART_ITEM':
           const newCartItems = state.cartItems;
           newCartItems.push(action.cartItem)
            return {
                ...state,
                cartItems: newCartItems
            }
        case 'SET_CART_TO_BUY':
            return{
                ...state,
                itemsToBuy: action.cartItems
            }
        case 'ADD_TO_BUY':
            const newBuyItems = state.itemsToBuy;
            newBuyItems.push(action.item)
            return{
                ...state,
                itemsToBuy: newBuyItems
            }
        case 'CLEAR_CART_TO_BUY':
            return{
                ...state,
                itemsToBuy:[]
            }
        default:
            return state;
    }
}