const initialState = {
    sales: [],
}

export function saleReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_SALES':
            return {
                ...state,
                sales: action.sales
            }
        case 'ADD_SALE':
            let newSales = state.sales;
            newSales.push(action._sale)
            return{
                ...state,
                sales: newSales
            }
            case 'UPDATE_SALE':
                return {...state,
                     sales : state.sales.map(item=>(item._id === action._sale._id)? item: action._sale)}
        default:
            return state;
    }
}