import ProductPreview from "../ProductPreview";
import React, { useEffect, useRef } from 'react';

import "./style.css"
function ProductsSearched({ searchValue, products }) {

  const productsSearchedRef = useRef(null);

  useEffect(() => {
    // Desplazar la página hacia la sección "products-searched" después de renderizar
    // Se hace de esta manera para asegurar que se haga scroll cuando el componente se haya renderizado
    productsSearchedRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);
  return <>
    <section id="products-searched" ref={productsSearchedRef}>
      <div className="search-results-section">
        {products.length === 0 ?
          <p className="no-results">No hay resultados que coincidan con:</p>:
          <p className="search-term-intro">Productos que coinciden con:</p>
        }
        <h2 className="search-term">{searchValue.toString()}</h2>
        <hr className="divider" />
      </div>
      {/* TODO: Se puede agregar el filtro y la cantidad de resultados */}
      {/* <div className="product-top">
        <div className="product-count">
          Mostrando 1 - 20 de 49 productos
        </div>
        <div className="sort-by">
          Ordenar por
          <select>
            <option value="default">Por defecto</option>
            <option value="price-low-high">Precio: bajo a alto</option>
            <option value="price-high-low">Precio: alto a bajo</option>
          </select>
        </div>
      </div> */}
      <div className="product-searched-list">
        {
          products.map((product) => (
            <ProductPreview key={product.id} id={product.id} urlImg={product.imageUrl} name={product.name} price={product.price} />
          ))
        }

      </div>
      {/* TODO: Se puede agregar la paginacion */}
      {/* <div className="paginacionMenu">
        <div className="paginacion">
          <a href="#">&laquo;</a>
          <a href="#">1</a>
          <a href="#" className="activo">2</a>
          <a href="#">3</a>

          <a href="#">&raquo;</a>
        </div>
        <button>Mostrar todos los productos</button>

      </div> */}

    </section>
  </>
}

export default ProductsSearched;