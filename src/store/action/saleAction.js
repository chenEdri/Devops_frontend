import { saleService } from '../../services/saleService.js'
import { utilService } from '../../services/utilService.js';

export function loadSales() {
  return async dispatch => {
    const sales = await saleService.query();
    dispatch({ type: 'SET_SALES', sales })
  };
}

export function loadSale(saleId) {
  return async dispatch => {
    const sale = await saleService.getById(saleId);
    dispatch({ type: 'SET_SALE', sale })
  }
}

export function saveSale(sale ,sales) {
  sale = saleService.getSaleObject(sale);
  let idx = utilService.findIdxById(sales, sale._id);
  console.log(idx);
  if (idx !== -1) {
    return async dispatch => {
      const _sale = await saleService.update(sale);
      dispatch({ type: 'UPDATE_SALE', _sale })
    }
  } else {
    return async dispatch => {
      const _sale = await saleService.add(sale);
      dispatch({ type: 'ADD_SALE', _sale })
    }
  }
}

