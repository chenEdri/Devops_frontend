import React from 'react';

export function PopularSales({ popularNameItems, topSaleItems }) {
    return (
        <div className="flex column popular-sales" >
            <h3 className="tac brb">The Unique Sales</h3>
            <div className="flex column">
                <h4>Most Popular By Name</h4>
                {(popularNameItems) ? popularNameItems.map((item, idx) => <div 
                key={idx} 
                className="by flex sb"><span>{item[0]}:</span><span>{item[1]}</span></div>) : ''}
            </div>
            <div className="flex column">
                <h4>Top 5 Salers</h4>
                {(topSaleItems) ? topSaleItems.map(item => <div 
                key={item._id} 
                className="by flex sb"><sapn>{item.name}:</sapn><span>${item.totalMoney}</span></div>) : ''}
            </div>
        </div>
    )
}