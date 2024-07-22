import { useEffect, useRef, useState } from "react";
import { getAllCategories } from "../../../../services/categories";

const EditProduct = () => {

  const [getCategories, setCategories] = useState([])
  const [categoryProductSelect, setCategoryProductSelect] = useState("");


  // TODO: el popUp se puede poner en un componente aparte
  const popUpRef = useRef();
  let popUp;
  useEffect(() => {
    popUp = popUpRef.current
    getAllCategories().then((response) => {
      setCategories(response)
    })
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
    <div class="container-header">
      <h2 class="title">Editar Producto</h2>
    </div>

    {/* <!-- Formulario para editar un nuevo producto --> */}
    <form class="edit-product-form dashboard">
      <label for="nombre">Nombre</label>
      <input type="text" id="nombre" name="nombre" required />

      <label for="cantidad">Cantidad</label>
      <input type="number" id="cantidad" name="cantidad" required />

      <label for="descripcion">Descripción</label>
      <textarea id="descripcion" name="descripcion" rows="4" required></textarea>

      <label for="precio">Precio Unitario</label>
      <input type="number" id="precio" name="precio" step="0.01" required />


      <label for="marca">Marca</label>
      <input type="text" id="marca" name="marca" required />


      <label for="categoria">Categoría</label>
      <select value={categoryProductSelect} onChange={(event) => setCategoryProductSelect(event.target.value)} id="categoria" name="categoria" required>
        {getCategories.map((category) => {
          return <option value={category.id}>{category.name}</option>
        })
        }
        {/* <!-- Agregar opciones adicionales según sea necesario --> */}
      </select>

      {/* <!-- Enlace o botón para abrir la ventana emergente de agregar categoría --> */}
      <p onClick={openPopup} class="add-category-link" id="openAddCategoryPopup">Agregar Nueva Categoría</p>

      <label for="estado">Estado</label>
      <select id="estado" name="estado" required>
        <option value="disponible">Disponible</option>
        <option value="oculto">Oculto</option>
      </select>
      <label for="imagen">Imagen del Producto</label>
      <input type="file" id="imagen" name="imagen" accept="image*/" />

      <button type="submit">Guardar Cambios</button>
    </form>

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

export default EditProduct;