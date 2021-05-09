import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { itemReducer } from './reducer/itemReducer';
import {cartReducer} from './reducer/cartReducer';
import {saleReducer} from './reducer/saleReducer';

const rootReducer = combineReducers({
    itemReducer,
    cartReducer,
    saleReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))