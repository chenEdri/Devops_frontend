import React from 'react';

export function TopSalesPreview({ item }) {
    return (
        <section className="top-sale-prev flex column">
            <div><span>Name:</span> <span>{item.name}</span></div>
            <div><span>Price:</span> <span>${item.price}</span></div>
            <div><span>Number Of Sales:</span> <span>{item.sumOfSales}</span></div>
        </section>
    )
}