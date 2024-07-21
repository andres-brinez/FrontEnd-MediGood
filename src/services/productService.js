import { urls } from "../resources/url"
import httpService from "./general/http";

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