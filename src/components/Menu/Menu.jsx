import React from 'react'

// Componente MenuItem
export function MenuItem({ item }) {
    return (
        <div className="menuItem"> 
            <img src={item.image_url} alt={item.titulo} className="menuItem img" />
            <div className="itemDetails">
                <h3 className="itemDetails h3">{item.titulo}</h3>
                <p className="description">{item.descripcion}</p> 
                <p className="price">$ {item.precio}</p>
            </div>
        </div>
    );
}
