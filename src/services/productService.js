import { urls } from "../resources/url"
import httpService from "./general/http";


export const addProduct = (formData) => {

  const url = urls.addProduct;
  const body = formData;
  return httpService.postFormData(url, body)
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        alert("Producto agregado con éxito");
        return true;
      } else {
        alert("No se pudo agregar el producto");
      }
    })
}

export const updateProduct =(information)=>{
  const url=urls.updateProduct
  const body=information
  return httpService.put(url,body)
  .then((response)=>{
    if (response.status === 200 || response.status === 201) {
      alert("Producto editado con éxito");
      return true;
    } else {
      alert("No se pudo editar el producto");
      return false
    }
  }
)

}
export const getAllProducts=()=>{
  const url= urls.getAllProducts;
  return httpService.get(url).then((response) => response.json())
  .then((response) => {
    return response;
  });

}

export const getAllProductsAvailable=()=>{
  const url= urls.getAllProductsAvailable;
  return httpService.get(url).then((response) => response.json())
  .then((response) => {
    return response;
  });

}

export const getProductsTop=()=>{
  const url= urls.getProductsTop;
  return httpService.get(url).then((response) => response.json())
  .then((response) => {
    return response;
  });

}

export const getProductById=(id)=>{
  const url= urls.getProductById+id;
  return httpService.get(url).then((response) => response.json())
  .then((response) => {
    return response;
  });

}

// ProductByName
export const getProductByName=(nameProduct)=>{
  const url= urls.getProductByName+nameProduct;
  return httpService.get(url).then((response) => response.json())
  .then((response) => {
    if(response.status===400){
      return;
    }
    return response;
  });
}