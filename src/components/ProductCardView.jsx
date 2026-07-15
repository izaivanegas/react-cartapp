
import React from 'react';


export const ProductCardView = ({product: {id, name, description, price},handler}) => {

    const onAddProduct = (product)=>{
        console.log("onAddProduct...... in ProductCardView");
        console.log("id: "+ product.id);
        console.log("name: "+ product.name);
        console.log("description: "+ product.description);
        console.log("price: "+ product.price);
        handler(product);

    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{price}</p>
                    <button className="btn btn-danger" onClick={ ()=>onAddProduct({id,name,description,price})  }>Agregar al carrito</button>
                </div>
            </div>
        </>
    );
}