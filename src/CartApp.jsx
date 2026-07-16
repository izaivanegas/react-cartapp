import {CatalogVIew} from "./components/CatalogVIew";
import {CardView} from "./components/CardView";
import {useState, useEffect} from "react";


const getInitialCartItems = ()=>{
    try{
        const cart = sessionStorage.getItem('cart');
        //aqui estamos declarando que si cart es null, entonces retorne un array vacio
        return cart ? JSON.parse(cart):[];
    }
    catch (e){
        console.log("Error al parsear el carrito de compras desde sessionStorage", e);
        return [];
    }
}


export const CartApp = ()=>{


    const[cartItems, setCartItems] = useState(getInitialCartItems)





    const[total, setTotal] = useState(0)

    useEffect(()=>{
        console.log("Esta pasndo aqui por que cambio");
        const valortotal = cartItems.reduce((acc,item)=>acc + item.total ,0);
        console.log("El valor total es: ", valortotal)

        setTotal(
            cartItems.reduce((acc,item)=>acc + item.total ,0)
            )
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    },[cartItems]);


    /**
     * Agregar un producto a nuestro carrito de compras
     * @param product
     */
    const  handleAddCartItem = (product)=>{
        console.log("handleAddCartItem................en CartApp.jsx");
        console.log("Agregando producto al carrito", product);

        const hasItem = cartItems.find((i)=>i.product.id===product.id);
        if(hasItem){
            setCartItems(
               cartItems.map((i)=>{
                   if(i.product.id === product.id){
                        i.quantity = i.quantity + 1;
                        i.total = i.quantity * i.product.price;
                        }
                   return i;
               })
            )
        }else{
            setCartItems([...cartItems, {
                product: product,
                quantity: 1,
                total: product.price * 1
            }])


        }

    }

    /**
     * Remove a product from our shopping cart
     * Remover un producto de nuestro carrito de compra
     * @param product
     */
    const handleRemoveCartItem = (product)=>{

        setCartItems(
            [
                ...cartItems.filter(i=>i.product.id !== product.id)
            ]
        );

    }

    return (
        <div className="container">
            <h1>CartApp</h1>
                <CatalogVIew handler={(product)=>handleAddCartItem(product)} />


            <div className="my-4 w-100">
                <CardView items={cartItems} handleDelete={handleRemoveCartItem}  totalGlobal={total}/>
            </div>
        </div>
    )
}