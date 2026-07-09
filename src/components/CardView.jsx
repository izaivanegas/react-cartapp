

export const CardView = ()=>{
    
        return (
            <>
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
            </>
        );
}