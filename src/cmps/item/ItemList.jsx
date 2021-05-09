import React from 'react'
import { ItemPreview } from './ItemPreview'


export function ItemList({ items, onRemove, openEditModule }) {
    return (
        <section className= "flex column ">
            {
                items.map(item=>
               <ItemPreview item={ item } 
               key={item._id}
               onRemove={onRemove}
               openEditModule={openEditModule}/>)
            }
        </section>
    )
}
