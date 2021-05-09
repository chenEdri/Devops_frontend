import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadItems, removeItem, saveItem } from '../../store/action/ItemAction.js';
import { saveItemToCart} from '../../store/action/cartAction.js';
import { ItemList } from '../../cmps/item/ItemList';
import { ItemEdit } from "../../cmps/item/ItemEdit.jsx";
import { itemService } from "../../services/itemService.js";


export function ItemApp(props) {
    const { items } = useSelector(state => state.itemReducer);
    const [isChange, setIsChange] = useState(false);
    const [editBoolean, setEditBoolean] = useState(false);
    const [itemToEdit, setItemToEdit] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadItems())
    }, [editBoolean, isChange])

    const onRemove = (_id) => {
        dispatch(removeItem(_id))
        setIsChange(!isChange)
    }

    const openEditModule = async function (_id) {
        const item = (_id)? await itemService.getById(_id): itemService.getEmptyItem()
        setItemToEdit(item)
        setEditBoolean(!editBoolean);
    }

    const closeEditModule = function (item) {
        dispatch(saveItem(item))
        if(!item._id){
            dispatch(saveItemToCart(item))
        }
        setItemToEdit(null)
        setEditBoolean(!editBoolean);
    }

    if (!items) return <div className="loader"><img src={'https://res.cloudinary.com/dygtul5wx/image/upload/v1601042370/sprint%204/users/75_2_cf1ozr.gif'} /></div>
    return (
        <section className="main-container">
            <div className="flex end">
                <button className="classic-btn" onClick={()=>openEditModule()}>Add</button>
            </div>
            <div className="card-grid bold brb tc">
                <div>Title</div>
                <div>Price</div>
                <div>Options</div>
            </div>
            <div className="flex column">
                <ItemList items={items}
                    onRemove={onRemove}
                    openEditModule={openEditModule} />
            </div>
            {(editBoolean) ? <div className="module">
                <ItemEdit itemToEdit={itemToEdit} 
                closeEditModule={closeEditModule}/>
            </div> : ''}
        </section>
    )
}
