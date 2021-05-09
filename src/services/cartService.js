
import httpService from './httpService';
export const cartService = {
    query,
    queryRes,
    getById,
    remove,
    removeAll,
    save,
    getEmptyItem,
}
function query() {
    return httpService.get(`cart/`);
}

function queryRes(creteria){
    let queryParams = new URLSearchParams();
    queryParams.set('isToBuy', creteria)
    return httpService.get(`cart/?${queryParams}`)
}

function getById(cartId) {
    return httpService.get(`cart/${cartId}`, cartId)
}

function remove(cartId) {
    return httpService.delete(`cart/${cartId}`)
}

function removeAll() {
    return httpService.delete(`cart/ALL`)
}

function save(cart) {
    if (cart._id) {
        return httpService.put(`cart/${cart._id}`, cart)
    } else {
        return httpService.post('cart', cart)
    }
}

function getEmptyItem() {
    return {
        name: '',
        price: 0,
        description:'',
        isToBuy:false,
        imgUrl: ''
    }
}
