import {getProducts} from "./services/productsService";
import {useEffect, useState} from "react";
import {CatalogVIew} from "./components/CatalogVIew";
import {CardView} from "./components/CardView";





const initialCartItems = [];


export const CartApp = ()=>{



const[cartItems, setCartItems] = useState(initialCartItems)

    /**
     * Agregar un producto a nuestro carrito de compras
     * @param product
     */
    const  handleAddCartItem = (product)=>{
        console.log("handleAddCartItem................en CartApp.jsx");
        console.log("Agregando producto al carrito", product);

        const hasItem = cartItems.find((i)=>i.product.id===product.id);
        if(hasItem){
            setCartItems([
                ...cartItems.filter((item)=>item.product.id !== product.id),{
                product,
                    quantity: hasItem.quantity + 1,
                }
            ])
        }else{
            setCartItems([...cartItems, {
                product: product,
                quantity: 1,
                total: product.price * 1
            }])


        }





    }




    return (
        <div className="container">
            <h1>CartApp</h1>
                <CatalogVIew handler={(product)=>handleAddCartItem(product)} />


            <div className="my-4 w-100">
                <CardView items={cartItems} />
            </div>
        </div>
    )
}