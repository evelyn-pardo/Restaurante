import React from 'react';

export function Boton({btnTxt, btnClass ,btnFunction}){
    return (
        <button className={btnClass} onClick={btnFunction}>
            {btnTxt}
        </button>
    )
}