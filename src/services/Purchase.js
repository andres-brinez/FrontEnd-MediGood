import { urls } from "../resources/url"
import httpService from "./general/http";

export const createPurchaseProducts = (information) => {

  const url = urls.purcheseProducts;
  const body = information

  return httpService.post(url, body).then((response) =>{
    // console.log(response)
    if(response.status===200){
      alert("Compra realizada con exito")
      return true
    }else{
      //response.json()
      console.log(response)
      alert("Error al realizar la compra")
      // alert(response.errorMessage)
      return false
    }
  }).catch((error) => {
  }

  )
}

export const getAllPurchaseProducts = () => {

  const url = urls.getAllPurchase;

  return httpService.get(url).then((response) =>{
    // console.log(response)
    if(response.status===200){
      return response.json()
    }

  });
}
