import React, { useState } from 'react'
function Listitem(props){

return(
    <div className = 'wrapper'>   
       <div className="items">
         {props.item.map(i =>  {return(
            <div className="item" key ={i.id} >
                <input type="checkbox" name="select__item" id="select__item" />
                <h5 className = "item__text">{i.text}</h5>
                <button className="delete__item" onClick = {()=> {props.onDeleteItem(i.id)}}  >
                </button>
            </div>)
         })}
         
       </div>
     </div>
)
}
export default Listitem