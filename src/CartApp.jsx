import {getProducts} from "./services/productsService";
import {useEffect, useState} from "react";
import {CatalogVIew} from "./components/CatalogVIew";
import {CardView} from "./components/CardView";

export const CartApp = ()=>{


    return (
        <div className="container">
            <h1>CartApp</h1>
                <CatalogVIew />


            <div className="my-4 w-50">
                <CardView />
            </div>
        </div>
    )
}