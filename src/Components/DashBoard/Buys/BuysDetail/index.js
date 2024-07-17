function BuysDetail() {
  return <>
    <div class="container-header">
      <h2 class="title">Detalle Compra</h2>
    </div>
    {/* TODO: El detail container pudiera ser un componente que se use tambien en el orderDetails */}
    <div class="details-container">
      {/* <!-- Detalles de Entrega --> */}
      <div class="detail-box">
        <h3>Entrega</h3>
        <div class="boxInfo">
          <p><strong>Dirección:</strong> Calle 123, Barrio XYZ, Ciudad ABC</p>
          {/* <!-- genera el p para ciudad,barrio.numero --> */}
          <p><strong>Ciudad:</strong> Ciudad ABC</p>
          <p><strong>Barrio:</strong> Barrio XYZ</p>
          <p><strong>Número:</strong> Calle 123,</p>
        </div>
      </div>

      {/* <!-- Detalles del Cliente --> */}
      <div class="detail-box">
        <h3>Cliente</h3>
        <div class="boxInfo">
          <p><strong>ID:</strong> 12345</p>
          <p><strong>Nombre:</strong> Nombre del Cliente</p>
          <p><strong>Email:</strong> cliente@email.com</p>
          <p><strong>Teléfono:</strong> 123-456-7890</p>
          <p ><strong >Dirección:</strong> Calle 456, Barrio LMN, Ciudad PQR</p>
        </div>
      </div>

      {/* <!-- Detalles de la Orden --> */}
      <div class="detail-box">
        <h3>Información</h3>
        <div class="boxInfo">
          <p><strong>Número:</strong> 001</p>
          <p><strong>Fecha venta</strong> 2024-01-27 10:30 AM</p>
          <p><strong>Fecha de Entrega:</strong> 2024-01-28 02:45 PM</p>
          <p><strong>Cantidad de Productos:</strong> 5</p>
          <p><strong>Estado:</strong> Enviado </p>
        </div>
      </div>
    </div>

    {/* <!-- Tabla de resumen de pedidos --> */}
    <table class="table-products">
      <caption>Productos</caption>

      {/* <!-- Encabezados de la tabla --> */}
      <thead>
        <tr>
          <th>Número</th>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Valor unitario</th>
          <th>Valor total</th>
        </tr>
      </thead>
      {/* <!-- Contenido de la tabla --> */}
      <tbody>
        <tr>
          <td>1</td>
          <td>Producto A</td>
          <td>3</td>
          <td>$100.00</td>
          <td>$300.00</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Producto B</td>
          <td>2</td>
          <td>$200.00</td>
          <td>$400.00</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Producto C</td>
          <td>1</td>
          <td>$300.00</td>
          <td>$300.00</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td></td>
          <td></td>
          <td></td>
          <td>$1000.00</td>
        </tr>
      </tfoot>
    </table>


  </>

}

export default BuysDetail;