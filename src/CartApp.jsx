import {getProducts} from "./services/productsService";
import {useEffect, useState} from "react";


export const CartApp = ()=>{



    const [products, setProducts] = useState([])


    useEffect(
        ()=>{
            setProducts(getProducts());
        }
        ,[])


    return (
        <div className="container">
            <div className="row">

                {products.map((product)=>(

                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text">{product.price}</p>
                                <button className="btn btn-danger">Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                    )

                )}

                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Teclado Mecanico RBG</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                            <p className="card-text">Precio: $100.00</p>
                            <button className="btn btn-danger">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Teclado Mecanico RBG</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                            <p className="card-text">Precio: $100.00</p>
                            <button className="btn btn-danger">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Teclado Mecanico RBG</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                            <p className="card-text">Precio: $100.00</p>
                            <button className="btn btn-danger">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Teclado Mecanico RBG</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                            <p className="card-text">Precio: $100.00</p>
                            <button className="btn btn-danger">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Teclado Mecanico RBG</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                            <p className="card-text">Precio: $100.00</p>
                            <button className="btn btn-danger">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Teclado Mecanico RBG</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                            <p className="card-text">Precio: $100.00</p>
                            <button className="btn btn-danger">Agregar al carrito</button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="my-4 w-58">
                <h3>Carrrito de compras</h3>
                <table>
                    <thead>
                     <tr>
                         <th>Producto</th>
                         <th>Precio</th>
                         <th>Cantidad</th>
                         <th>Total</th>
                         <th>Eliminar</th>
                     </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>nombre</td>
                            <td>Precio</td>
                            <td>Cantidad</td>
                            <td>nombre</td>
                            <td>
                                <button className="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3" >Total</td>
                            <td colSpan="2">12345.23</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}