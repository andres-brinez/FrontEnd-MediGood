import { useEffect, useRef, useState } from "react";
import { createCategory, getAllCategories } from "../../../../services/categories";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById, updateProduct } from "../../../../services/productService";

const EditProduct = () => {

  const [getCategories, setCategories] = useState([])
  const [categoryProductSelect, setCategoryProductSelect] = useState("");
  const [product, setProduct] = useState({});

  const [name, setName] = useState()
  const [quantityProduct, setQuantityProduct] = useState()
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [inStockProduct, setInStockProduct] = useState(true);
  const { id } = useParams();
  const navigator = useNavigate();



  // TODO: el popUp se puede poner en un componente aparte
  const popUpRef = useRef();
  useEffect(() => {
    getAllCategories().then((response) => {
      setCategories(response)
    })
    if (id) {
      getProductById(id).then((response) => {
        setProduct(response);
        setName(response.name)
        setQuantityProduct(response.quantity)
        setDescriptionProduct(response.description)
        setPriceProduct(response.price)
        setInStockProduct(response.inStock)
        // setCategoryProductSelect(product.category)

      })
    }
    else {
      alert("No hay ID del producto")
    }
  }, []);

  function openPopup() {
    popUpRef.current.className = "popup-open";
  }

  function closePopup() {
    popUpRef.current.className = "popup-close";
  }

  // Lógica para agregar la nueva categoría
  function addCategory() {
    var newCategoryName = document.getElementById('newCategory').value;
    if (newCategoryName.trim() !== '') {

      createCategory({ name: newCategoryName }).then((response) => {

        if (response === 200) {
          // Se actualizan las categorias
          getAllCategories().then((response) => {
            setCategories(response)
          })

          alert('Nueva categoría agregada: ' + newCategoryName);
          closePopup();
        }
        else if (response === 400) {
          alert('Error al crear la categoria.');
        }
        else if (response === 403) {
          alert('No tienes permisos para crear categorias.');
        }

      })

    } else {
      alert('Por favor, ingresa un nombre válido para la categoría.');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let newProduct = {
      id,
      name,
      quantity: quantityProduct,
      description: descriptionProduct,
      price: priceProduct,
      inStock: inStockProduct,
      // category: categoryProductSelect,
    }
    console.log(newProduct)
    const isProductUpdate = updateProduct(newProduct)
    console.log(isProductUpdate)
    if (isProductUpdate) {
      navigator("/dashboard/inventory")
    }

  }
  return <>
    <div className="container-header">
      <h2 className="title">Editar Producto</h2>
    </div>

    {/* <!-- Formulario para editar un nuevo producto --> */}
    <form onSubmit={handleSubmit} className="edit-product-form dashboard">
      <label for="nombre">Nombre</label>
      <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="nombre" name="nombre" required />

      <label for="cantidad">Cantidad</label>
      <input value={quantityProduct} onChange={(e) => setQuantityProduct(e.target.value)} id="cantidad" type="number" name="cantidad" required />

      <label for="descripcion">Descripción</label>
      <textarea value={descriptionProduct} onChange={(e) => setDescriptionProduct(e.target.value)} id="descripcion" name="descripcion" rows="4" required></textarea>

      <label for="precio">Precio Unitario</label>
      <input value={priceProduct} onChange={(e) => setPriceProduct(e.target.value)} type="number" id="precio" name="precio" step="0.01" required />

      <label for="marca">Marca</label>
      <input type="text" id="marca" name="marca" required disabled />

      {/*TODO: Falta traer la catoegira del producto porque no se encuentra en la api--> */}
      <label for="categoria">Categoría</label>
      <select value={categoryProductSelect} onChange={(event) => setCategoryProductSelect(event.target.value)} id="categoria" name="categoria" required >
        {getCategories.map((category) => {
          return <option value={category.id}>{category.name}</option>
        })
        }
        {/* <!-- Agregar opciones adicionales según sea necesario --> */}
      </select>

      {/* <!-- Enlace o botón para abrir la ventana emergente de agregar categoría --> */}
      <p onClick={openPopup} className="add-category-link" id="openAddCategoryPopup">Agregar Nueva Categoría</p>

      <label for="estado">Estado</label>
      <select value={inStockProduct} onChange={(event) => setInStockProduct(event.target.value)} id="estado" name="estado" required>
        <option value="true">Disponible</option>
        <option value="false">Oculto</option>
      </select>
      <label for="imagen">Imagen del Producto</label>
      <input type="file" id="imagen" name="imagen" accept="image*/" disabled />

      <button type="submit">Guardar Cambios</button>
    </form>

    <div id="addCategoryPopup" className="popup-close" ref={popUpRef}>
      <div className="popup-content">
        <span id="closeAddCategoryPopup" className="close-popup" onClick={closePopup}>&times;</span>
        <h3>Agregar Nueva Categoría</h3>
        <label for="newCategory">Nombre de la categoría</label>
        <input type="text" id="newCategory" name="newCategory" required />
        <button onClick={addCategory} id="addCategoryButton">Agregar</button>
      </div>
    </div>

  </>
}

export default EditProduct;