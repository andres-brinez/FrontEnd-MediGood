import { useEffect, useRef, useState } from "react";
import "./style.css"
const AddProduct = () => {

  const [getCategories, setCategories] = useState([])

  const popUpRef = useRef();
  let popUp;
  useEffect(() => {
    popUp = popUpRef.current
  }, []);


  function openPopup() {
    popUp.className = "popup-open";
  }

  function closePopup() {
    popUp.className = "popup-close";
  }

  // Lógica para agregar la nueva categoría
  function addCategory() {
    var newCategoryName = document.getElementById('newCategory').value;
    if (newCategoryName.trim() !== '') {
      // Puedes realizar aquí la lógica para agregar la nueva categoría a tu sistema
      alert('Nueva categoría agregada: ' + newCategoryName);
      closePopup();
    } else {
      alert('Por favor, ingresa un nombre válido para la categoría.');
    }
  }

  return <>
    <div class="inventory-container">
      <h2 class="title">Agregar Producto</h2>
    </div>
    {/* <!-- Formulario para agregar un nuevo producto --> */}
    <form class="add-product-form dashboard ">

      <label for="nombre">Nombre</label>
      <input type="text" id="nombre" name="nombre" required />

      <label for="cantidad">Cantidad</label>
      <input type="number" id="cantidad" name="cantidad" required />

      {/* TODO: Nueva funcionalidad: Permitir agregar la marxa */}
      {/* <label for="marca">Marca</label>
      <input type="text" id="marca" name="marca" required /> */}

      <label for="categoria">Categoría</label>
      <select id="categoria" name="categoria" required>
        <option value="categoria1">Categoría 1</option>
        <option value="categoria2">Categoría 2</option>
        {/* <!-- Agregar opciones adicionales según sea necesario --> */}
      </select>

      {/* <!-- Abrir la ventana emergente de agregar categoría --> */}
      <p onClick={openPopup} class="add-category-link" id="openAddCategoryPopup">Agregar Nueva Categoría</p>

      <label for="descripcion">Descripción</label>
      <textarea id="descripcion" name="descripcion" rows="4" required></textarea>

      <label for="precio">Precio Unitario</label>
      <input type="number" id="precio" name="precio" step="0.01" required />

      <label for="imagen">Imagen del Producto</label>
      <input type="file" id="imagen" name="imagen" accept="image/*" />

      <button type="submit" >Agregar Producto</button>
    </form>

    {/* <!-- Ventana emergente para agregar categoría --> */}
    <div id="addCategoryPopup" className="popup-close" ref={popUpRef}>
      <div class="popup-content">
        <span id="closeAddCategoryPopup" class="close-popup" onClick={closePopup}>&times;</span>
        <h3>Agregar Nueva Categoría</h3>
        <label for="newCategory">Nombre de la categoría</label>
        <input type="text" id="newCategory" name="newCategory" required />
        <button  onClick={addCategory}id="addCategoryButton">Agregar</button>
      </div>
    </div>

  </>
}

export default AddProduct;