import {useEffect, useState} from "react";
import {getProducts} from "../services/productsService";
import {ProductCardView} from "./ProductCardView";

export const CatalogVIew = ({handler})=>{

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
                    <div className="col-4" key={product.id || key}>
                        <ProductCardView product={product}

                                         handler={handler}
                        />
                    </div>
                )
            )}

            </div>
        </>
    );
}