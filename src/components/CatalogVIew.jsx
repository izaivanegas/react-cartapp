import {useEffect, useState} from "react";
import {getProducts} from "../services/productsService";
import {ProductCardView} from "./ProductCardView";

export const CatalogVIew = ()=>{

    const [products, setProducts] = useState([])


    useEffect(
        ()=>{
            setProducts(getProducts());
        }
        ,[])

    return (
        <>
            <div className="row">
            {products.map((product)=>(
                    <div className="col-4">
                        <ProductCardView product={product} />
                    </div>
                )
            )}

            </div>
        </>
    );
}