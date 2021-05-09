import React from 'react';


export function LastFiveDatesPreview({ sale }) {
    return (
        <div className="sale-in-day">
            <div><span className="bold">Name:</span> <span>{sale.name}</span></div>
            <div><span className="bold">Price:</span> <span>${sale.price}</span></div>
        </div>
    )
}