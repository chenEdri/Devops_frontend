import React, { useReducer } from 'react'
import { connect } from 'react-redux'
import { saveItem } from '../../store/action/ItemAction.js'

function itemEditReducer(state, action) {
    switch (action.type) {
        case 'SET_ITEM':
            return {
                ...state,
                item: action.item
            }
        case 'SET_NAME':
            return {
                ...state,
                item: {
                    ...state.item,
                    name: action.name
                }
            }
        case 'SET_PRICE':
            return {
                ...state,
                item: {
                    ...state.item,
                    price: action.price
                }
            }
        case 'SET_DESC':
            return {
                ...state,
                item: {
                    ...state.item,
                    description: action.description
                }
            }
        case 'SET_IMG':
            return {
                ...state,
                item: {
                    ...state.item,
                    imgUrl: action.imgUrl
                }
            }
        default:
            return state
    }
}

function _ItemEdit({ itemToEdit, closeEditModule }) {
    const [state, dispatch] = useReducer(itemEditReducer, { item: itemToEdit })

    const onAddItem = async (ev) => {
        ev.preventDefault()
        closeEditModule(state.item);
    }
    const { item } = state
    if (!item) return <div>Loading....</div>
    return (
        <form className="item-edit container" onSubmit={(ev) => onAddItem(ev)}>
            <div className="form">
                <label htmlFor="">Name:</label>
                <input type="text" name="name" placeholder="Name" value={item.name}
                    onChange={(ev) => dispatch({ type: 'SET_NAME', name: ev.target.value })} />
                <label htmlFor="">Price:</label>
                <input type="number" name="price" placeholder="Price" value={item.price}
                    onChange={(ev) => dispatch({ type: 'SET_PRICE', price: +ev.target.value })} />
                <input type="text" name="description" placeholder="Description" value={item.description}
                    onChange={(ev) => dispatch({ type: 'SET_DESC', description: ev.target.value })} />
                <input type="text" name="imgUrl" placeholder="Image-Url" value={item.imgUrl}
                    onChange={(ev) => dispatch({ type: 'SET_IMG', imgUrl: ev.target.value })} />
                <button className='classic-btn'>Save</button>
            </div>
        </form>
    )
}
const mapDispatchToProps = {
    saveItem
};

export const ItemEdit = connect(null, mapDispatchToProps)(_ItemEdit);
