import { useEffect, useRef, useState } from "react";
import "./style.css"
import { createCategory, getAllCategories } from "../../../../services/categories";
const AddProduct = () => {

  const [getCategories, setCategories] = useState([])

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
        else if( response===403){
          alert('No tienes permisos para crear categorias.');
        }

      })

    } else {
      alert('Por favor, ingresa un nombre válido para la categoría.');
    }
  }

  return <>
    <div class="container-header">
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
        {getCategories.map((category) => {
          return <option value={category.id}>{category.name}</option>
        })
        }
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
        <button onClick={addCategory} id="addCategoryButton">Agregar</button>
      </div>
    </div>

  </>
}

export default AddProduct;