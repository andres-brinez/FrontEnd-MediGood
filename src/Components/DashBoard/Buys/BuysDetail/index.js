import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPurchaseById } from "../../../../services/Purchase";

function BuysDetail() {

  const { id } = useParams();

  const [idBuy, setIdBuy] = useState('');
  const [date, setDate] = useState();
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState('');
  const [quantity, setQuantity] = useState('');


  useEffect(() => {
    getPurchaseById(id).then((response) => {

      const formattedDate = new Date(response.date).toLocaleString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });

      const formattedPrice = new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'COP'
      }).format(response.total);

      setIdBuy(response.id)
      setDate(formattedDate)
      setProducts(response.products)
      setTotal(formattedPrice)
      setQuantity(response.quantity)
    })
  }, [id])

  return <>
    <div className="container-header">
      <h2 className="title">Detalle Compra</h2>
    </div>
    {/* TODO: El detail container pudiera ser un componente que se use tambien en el orderDetails */}
    <div className="details-container">
      {/* <!-- Detalles de Entrega --> */}
      <div className="detail-box">
        <h3>Entrega</h3>
        <div className="boxInfo">
          <p><strong>Dirección:</strong> Calle 123, Barrio XYZ, Ciudad ABC</p>
          {/* <!-- genera el p para ciudad,barrio.numero --> */}
          <p><strong>Ciudad:</strong> Ciudad ABC</p>
          <p><strong>Barrio:</strong> Barrio XYZ</p>
          <p><strong>Número:</strong> Calle 123,</p>
        </div>
      </div>

      {/* <!-- Detalles del Cliente --> */}
      <div className="detail-box">
        <h3>Cliente</h3>
        <div className="boxInfo">
          <p><strong>ID:</strong> 12345</p>
          <p><strong>Nombre:</strong> Nombre del Cliente</p>
          <p><strong>Email:</strong> cliente@email.com</p>
          <p><strong>Teléfono:</strong> 123-456-7890</p>
          <p ><strong >Dirección:</strong> Calle 456, Barrio LMN, Ciudad PQR</p>
        </div>
      </div>

      {/* <!-- Detalles de la Orden --> */}
      <div className="detail-box">
        <h3>Detalles de la orden</h3>
        <div className="boxInfo">
          <p><strong>Número orden:</strong> {idBuy}</p>
          <p><strong>Fecha venta</strong>{date} </p>
          <p><strong>Fecha de Entrega:</strong> --</p>
          <p><strong>Cantidad de Productos:</strong> {quantity}</p>
          <p><strong>Estado:</strong> Enviado </p>
          <p><strong>Total:</strong> {total} </p>

        </div>
      </div>
    </div>

    {/* <!-- Tabla de resumen de pedidos --> */}
    <table className="table-products">
      <caption>Productos</caption>

      {/* <!-- Encabezados de la tabla --> */}
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Valor unitario</th>
          <th>Valor total</th>
        </tr>
      </thead>
      {/* <!-- Contenido de la tabla --> */}
      <tbody>
        {products.map((product) => {
          return (
            <tr>
              <td>{product.product.id}</td>
              <td>{product.product.name}</td>
              <td>{product.quantity}</td>
              <td>${product.price}</td>
              <td>${product.total}</td>
            </tr>
          )
        })}

      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td></td>
          <td></td>
          <td></td>
          <td>${total} </td>
        </tr>
      </tfoot>
    </table>


  </>

}

export default BuysDetail;