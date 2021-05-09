
import httpService from './httpService';


export const itemService = {
    query,
    getById,
    remove,
    save,
    getEmptyItem,
}

function query() {
    return httpService.get(`item/`);
}

function getById(itemId) {
    return httpService.get(`item/${itemId}`, itemId)
}

function remove(itemId) {
    return httpService.delete(`item/${itemId}`)
}

function save(item) {
    if (item._id) {
        return httpService.put(`item/${item._id}`, item)
    } else {
        return httpService.post('item', item)
    }
}

function getEmptyItem() {
    return {
        name: '',
        price: 0,
        description:'',
        isToBuy:false,
        imgUrl: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1600013117/mrToy/6_iyplsc.jpg'
    }
}
