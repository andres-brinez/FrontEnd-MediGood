import ProductPreview from "../ProductPreview";
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import searchProductByName from "../../../services/searchProduct";


import "./style.css"
import { getProductByName } from "../../../services/productService";
function ProductsSearched() {

  const productsSearchedRef = useRef(null);

  const { searchTerm } = useParams();
  const [products, setProducts] = useState([])

  useEffect(() => {
    // Desplazar la página hacia la sección "products-searched" después de renderizar
    // Se hace de esta manera para asegurar que se haga scroll cuando el componente se haya renderizado
    productsSearchedRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    setProducts([]);

    if (searchTerm != null) {

      getProductByName(searchTerm).then((response) => {
        setProducts(response);
      })
       console.log(products);
       console.log(products.length===0);



      const productsSearchedSection = document.getElementById('products-searched');

      // Se hace un scroll automatico si el componente ya se renderizó, esto es util para cuando se vuelve a hacer una busqueda
      if (productsSearchedSection != null) {
        productsSearchedSection.scrollIntoView({ behavior: 'smooth' });
      }

    }

  }, [searchTerm])
  return <>

    <section id="products-searched" ref={productsSearchedRef}>
      <div className="search-results-section">
          <p className="search-term-intro">Productos que coinciden con:</p>
      
        <h2 className="search-term">{searchTerm.toString()}</h2>
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
        
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <ProductPreview key={product.id} id={product.id} urlImg={product.imageUrl} name={product.name} price={product.price} />
          ))) : (
          <p>No hay productos que coincidan con este nombre</p>
        )}

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