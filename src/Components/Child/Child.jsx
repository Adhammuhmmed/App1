import { useState } from "react";

export function Child( props ) {
    let { name, price, id,onSale,count} = props.prodctInfo;
  return <>
    <div className="w-1/4  p-3">
            <div className="border border-gray-500 p-4 rounded-md relative">
                <div className="sale relative">
                  
                {onSale ?<div className="onSale">Sale</div>: ''}
                </div>
                <h2>Id: {id}</h2>
                <h2>Name: {name}</h2>
                <h2>Price: {price}</h2>
                <h2>Count: {count}</h2>
                <button onClick={()=>{props.delete(id)}} className="btn-delete">Delete</button>
                <button onClick={()=>{props.update(props.index)}} className="btn-ubdate">UpDate</button>
            </div>
    </div>
  </>;
}
