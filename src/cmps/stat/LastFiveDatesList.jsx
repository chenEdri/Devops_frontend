import React from 'react';
import { LastFiveDatesPreview } from './LastFiveDatesPreview.jsx';

function getTotalSales(lastDaysSales) {
    console.log(lastDaysSales);
    let sum = 0;
    lastDaysSales.forEach(date => {
        if (date.sales.length) date.sales.forEach(sale => sum += sale.price)
    });
    return sum;
}

export function LastFiveDatesList({ lastDaysSales }) {
    const totalSales = getTotalSales(lastDaysSales)
    return (
        <section className="last-dates flex column">
            <h3 className="brb tac">Last 5 Days</h3>
            <div className="flex sb"> <h4>Total Sales: </h4>
                <h4>${totalSales}</h4>
            </div>
            {lastDaysSales.map((date, idx) => <div key={idx}>
                <h4>{date.date}</h4>
                {(date.sales.length) ? (date.sales.map((sale, idx) => <LastFiveDatesPreview
                    sale={sale}
                    key={idx} />)) :
                    (<div>
                        <div className="no-sale ml15">There are no sales at this date</div>
                    </div>)}
            </div>)}
        </section>
    )
}
