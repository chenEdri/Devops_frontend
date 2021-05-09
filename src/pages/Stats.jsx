import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { saleService } from "../services/saleService";
import { LastFiveDatesList } from '../cmps/stat/LastFiveDatesList.jsx'
import { TopSalesList } from '../cmps/stat/TopSalesList.jsx';
import { PopularSales } from '../cmps/stat/PopularSales.jsx';
export function Stats(props) {

  const [sales, setSales] = useState(null);
  const [isChange, setIsChange] = useState(false);
  const [popularNameItems, setPopularNameItems] = useState(null);
  const [mostValueItems, setMostValueItems] = useState(null);
  const [topSaleItems, setTopSaleItems] = useState(null);
  const [lastDaysSales, setLastDaysSales] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(loadSales())
    loadSales()
  }, [isChange])

  async function loadSales() {
    let res = await saleService.query();
    setSales(res);
    getSpecialItems(res)
    return res;
  }

  function getSpecialItems(sales) {
    const sortedByDates = saleService.getLastFiveDaysSaler(sales);
    const sortedBySales = saleService.getTopFiveSalers(sales);
    const TopFiveMoneySalers = saleService.getTopFiveMoneySalers(sales);
    const sortedByName = saleService.sortByName(sales);
    setPopularNameItems(sortedByName)
    setMostValueItems(TopFiveMoneySalers)
    setTopSaleItems(sortedBySales)
    setLastDaysSales(sortedByDates)
  }

  if (!sales) return <div>loading...</div>
  return (
    <section className="main-container">
      <div className="stat-container">   
          {(topSaleItems) ? <TopSalesList topSaleItems={topSaleItems} /> : ''}
          <PopularSales popularNameItems={popularNameItems}
            topSaleItems={topSaleItems} />
          {(lastDaysSales) ? <LastFiveDatesList lastDaysSales={lastDaysSales} /> : ''}
      </div>
    </section>
  );
}

