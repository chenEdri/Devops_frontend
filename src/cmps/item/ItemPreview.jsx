import React from 'react'


export function ItemPreview({ item, onRemove, openEditModule }) {
    return (
        <div className="card-grid tc">
            <div>{item.name}</div>
            <div>${item.price}</div>
            <div className="flex sb">
                <button className="classic-btn"
                onClick={()=> openEditModule(item._id)}>Edit</button>
                <button className="warning-btn"
                onClick={() => onRemove(item._id)}>delete</button >
            </div>
        </div>
    )
}