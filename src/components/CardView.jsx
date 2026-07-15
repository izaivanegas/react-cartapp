

export const CardView = ({items,handleDelete})=>{


    console.log("listProduct en CardView.jsx", items);


    const handleLocalRemoveItem = (product)=>{
        console.log("handleLocalRemoveItem................en CardView.jsx");
        console.log("Removiendo producto del carrito:", product.name);
        handleDelete(product);
    }

    const totalGeneral = items.reduce((sum, item) => sum + (item.total || item.product.price * item.quantity), 0);

        return (

            <div className="card">
                <div className="card-header">
                    <h5 className="mb-0">
                        🛒 Carrito de compras
                        <span className="badge bg-secondary ms-2">{items.length}</span>
                    </h5>
                </div>

                <div className="card-body p-0">
                    {items.length === 0 ? (
                        <p className="text-center text-muted my-4">El carrito está vacío</p>
                    ) : (
                        <div className="table-responsive">
                            <table className="table table-striped table-hover mb-0">
                                <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th className="text-center">Precio</th>
                                    <th className="text-center">Cantidad</th>
                                    <th className="text-end">Total</th>
                                    <th className="text-center">Acción</th>
                                </tr>
                                </thead>
                                <tbody>
                                {items.map(item => (
                                    <tr key={item.product.id}>
                                        <td>{item.product.name}</td>
                                        <td className="text-center">${item.product.price.toFixed(2)}</td>
                                        <td className="text-center">{item.quantity}</td>
                                        <td className="text-end">${(item.total || item.product.price * item.quantity).toFixed(2)}</td>
                                        <td className="text-center">
                                            <button className="btn btn-danger btn-sm" onClick={()=>handleLocalRemoveItem(item.product)}>Eliminar</button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                                <tfoot>
                                <tr className="table-active">
                                    <td colSpan="3" className="text-end fw-bold">Total</td>
                                    <td colSpan="2" className="text-end fw-bold">${totalGeneral.toFixed(2)}</td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        );
}