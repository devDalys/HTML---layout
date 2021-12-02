import React from "react";
import './App.css'

function declOfNum(n, titles) {
    return titles[n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
}

function Taxform(props) {
    return (
        <div className='list__items'>
            {props.massive.map((item, index) => {
                while (index < 100) {
                    return (
                        <div className='list__items-item'>
                            <input type="checkbox"/>
                            <p>{Math.round(item)} {declOfNum(Math.round(item), ['рубль', 'рубля', 'рублей'])} <span
                                className='grey__text'>в {index + 1}-й год </span></p>
                        </div>
                    )
                }

            })}
        </div>
    )
}

export default Taxform;