
import httpService from './httpService';
import { utilService } from './utilService';


export const saleService = {
    query,
    getById,
    update,
    add,
    getSaleObject,
    sortByName,
    getLastFiveDaysSaler,
    getTopFiveSalers,
    getTopFiveMoneySalers,
    getLastDays
}

function query() {
    return httpService.get(`sale/`);
}

function getById(saleId) {
    return httpService.get(`sale/${saleId}`, saleId)
}

function update(sale) {
    return httpService.put(`sale/${sale._id}`, sale)
}

function add(sale) {
    return httpService.post('sale', sale)
}

function getSaleObject(item) {
    let date = utilService.getDate();
    return {
        _id: item._id,
        name: item.name,
        price: item.price,
        sumOfSales: 1,
        totalMoney: item.price,
        saleDates: date,
    }
}

function getLastFiveDaysSaler(sales) {
    let lastFiveDays = _getCellByDateFormate(5);
    sales.forEach(sale => {
        sale.saleDates.forEach(date => {
            let idx = lastFiveDays.findIndex(arr => arr.date === date);
            if (idx !== -1) lastFiveDays[idx].sales.push({
                _id: sale._id,
                name: sale.name,
                price: sale.price
            })
        })
    })
    return lastFiveDays; 
}

function getLastDays(days) {
    return utilService.getLastDays(days);
}

function getTopFiveSalers(sales) {
    return sales.sort((itemA, itemB) => itemB.sumOfSales - itemA.sumOfSales).slice(0, 5);
}

function getTopFiveMoneySalers(sales) {
    return sales.sort((itemA, itemB) => itemB.totalMoney - itemA.totalMoney).slice(0, 5);
}

function sortByName(sales) {
    let res = sales.reduce((acc, item) => {
        if (!acc[item.name]) acc[item.name] = 0
        acc[item.name]++;
        return acc;
    }, {})
    res = Object.keys(res).map((key) => [String(key), res[key]]);
    return res.sort((a, b) => b[1] - a[1]).slice(0, 5);
}

function _getCellByDateFormate() {
    const lastFiveDays = utilService.getLastDays(5);
    return lastFiveDays.map(date => {
        return ({
            date: date,
            sales: []
        })
    })
}