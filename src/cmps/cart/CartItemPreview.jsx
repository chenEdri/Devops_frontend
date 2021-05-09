import React from "react";

export function CartItemPreview({ item, addToBuyList }) {
    return (
        <div className="card-container flex column ">
            <div className="card-img">
                <img src={item.imgUrl} alt="#" />
            </div>
            <div className="card-lng">
                <div className="flex">
                    <div>Name:</div>
                    <div className="pl20">{item.name}</div>
                </div>
                <div className="flex">
                    <div>Price:</div>
                    <div className="pl20">${item.price}</div>
                </div>
            </div>
            <div><p>{item.desription}</p></div>
            <div className="flex align-center justify-center" >
                <button className="classic-btn "
                onClick={()=>addToBuyList(item)}>Buy</button>
            </div>
        </div>
    )
}