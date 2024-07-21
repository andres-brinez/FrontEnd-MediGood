import { environment } from "../environment"

export const urls={
  registerUser:`${environment.apiUrl}/auth/register`,
  login:`${environment.apiUrl}/auth/login`,
  getAllProductsAvailable:`${environment.apiUrl}/products/available`,
  getAllProducts:`${environment.apiUrl}/products/all`,
  getProductsTop:`${environment.apiUrl}/products/top`,
  getProductById:`${environment.apiUrl}/products/`,
  purcheseProducts:`${environment.apiUrl}/purchase/save`,



}

