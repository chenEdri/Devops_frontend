import { itemService } from '../../services/itemService.js'

export function loadItems() {
    return async dispatch => {
        const items = await itemService.query();
        dispatch({ type: 'SET_ITEMS', items })
      };
}

export function loadItem(itemId){
  return async dispatch =>{
    const item = await itemService.getById(itemId);
    dispatch({ type: 'SET_ITEM', item })
  }
}

export function removeItem(itemId) {
    return async dispatch => {
        await itemService.remove(itemId)
        dispatch({ type: 'REMOVE_ITEM', itemId })
      };
}

export function saveItem(item) {
  const actionType = (item._id)? 'EDIT_ITEM' : 'ADD_ITEM';
  return async dispatch => {
      const _item = await itemService.save(item);
        dispatch({ type: actionType, _item })
      };
}
