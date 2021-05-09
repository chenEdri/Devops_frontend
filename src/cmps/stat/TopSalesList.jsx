import React from 'react';
import {TopSalesPreview} from './TopSalesPreview.jsx';

export function TopSalesList({ topSaleItems }) {
    return(
        <section className="flex column top-sales">
            <h3 className="brb tac">Top Sales</h3>
           {topSaleItems.map((item,idx)=> <TopSalesPreview item={item} key={idx}/>)}
        </section>
    )
}