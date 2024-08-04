import { useEffect, useRef, useState } from "react";
import "./style.css"
import { createCategory, getAllCategories } from "../../../../services/categories";
import { addProduct } from "../../../../services/productService";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {

  const navigator = useNavigate();

  const [getCategories, setCategories] = useState([])
  const [nameProduct, setNameProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [categoryProduct, setCategoryProduct] = useState("");
  const [imageProduct, setImageProduct] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [inStock, setInStock] = useState(true);


  const popUpRef = useRef();
  useEffect(() => {
    getAllCategories().then((response) => {
      setCategories(response)
    })
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

  function handleSubmit(e) {
    e.preventDefault();

    // Crear un objeto FormData
    const formData = new FormData();

    // Agregar los datos al FormData
    formData.append('id', Math.floor(Math.random() * 100000000).toString());
    formData.append('name', nameProduct);
    formData.append('price', priceProduct);
    formData.append('description', descriptionProduct);
    formData.append('imageFile', imageProduct);
    formData.append('categoryId', categoryProduct);
    formData.append('inStock', inStock);
    formData.append('quantity', quantity);

    const saveProduct = addProduct(formData)
    if (saveProduct) {
      navigator("/dashboard")
    }

  }

  return <>
    <div className="container-header">
      <h2 className="title">Agregar Producto</h2>
    </div>
    {/* <!-- Formulario para agregar un nuevo producto --> */}
    <form onSubmit={handleSubmit} className="add-product-form dashboard ">

      <label for="nombre">Nombre</label>
      <input value={nameProduct} onChange={(event) => setNameProduct(event.target.value)} type="text" id="nombre" name="nombre" required />

      <label for="cantidad">Cantidad</label>
      <input value={quantity} onChange={(event) => setQuantity(event.target.value)} type="number" id="cantidad" name="cantidad" required />

      {/* TODO: Nueva funcionalidad: Permitir agregar la marxa */}
      {/* <label for="marca">Marca</label>
      <input type="text" id="marca" name="marca" required /> */}

      <label for="categoria">Categoría</label>
      <select value={categoryProduct} onChange={(event) => setCategoryProduct(event.target.value)} id="categoria" name="categoria" required>
        {getCategories.map((category) => {
          return <option value={category.id}>{category.name}</option>
        })
        }
        {/* <!-- Agregar opciones adicionales según sea necesario --> */}
      </select>

      {/* <!-- Abrir la ventana emergente de agregar categoría --> */}
      <p onClick={openPopup} className="add-category-link" id="openAddCategoryPopup">Agregar Nueva Categoría</p>

      <label for="descripcion">Descripción</label>
      <textarea value={descriptionProduct} onChange={(event) => setDescriptionProduct(event.target.value)} id="descripcion" name="descripcion" rows="4" required></textarea>


      <label for="inStock">In Stock</label>
      <select value={inStock} onChange={(event) => setInStock(event.target.value)} id="inStock" name="inStock" required>
        <option value={true}>Disponible</option>
        <option value={false}>No Disponible</option>

      </select>
      <label for="precio">Precio Unitario</label>
      <input value={priceProduct} onChange={(event) => setPriceProduct(event.target.value)} type="number" id="precio" name="precio" step="0.01" required />

      <label for="imagen">Imagen del Producto</label>
      <input type="file" id="imagen" name="imagen" accept="image/*" onChange={(event) => setImageProduct(event.target.files[0])} required />

      <button type="submit" >Agregar Producto</button>
    </form>

    {/* <!-- Ventana emergente para agregar categoría --> */}
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

export default AddProduct;