import { environment } from "../environment"

export const urls={
  registerUser:`${environment.apiUrl}/auth/register`,
  login:`${environment.apiUrl}/auth/login`,
  getAllProductsAvailable:`${environment.apiUrl}/products/available`,
  getAllProducts:`${environment.apiUrl}/products/all`,
  getProductsTop:`${environment.apiUrl}/products/top`,
  getProductById:`${environment.apiUrl}/products/`,
  addProduct:`${environment.apiUrl}/products/create`,
  updateProduct:`${environment.apiUrl}/products/update`,

  purcheseProducts:`${environment.apiUrl}/purchase/save`,
  getAllCategories:`${environment.apiUrl}/categories`,
  createCategory:`${environment.apiUrl}/categories/create`,

  getAllPurchase:`${environment.apiUrl}/purchase/all`,




}

