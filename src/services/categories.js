import { urls } from "../resources/url"
import httpService from "./general/http"

export const getAllCategories=()=>{
  const url= urls.getAllCategories
  return httpService.get(url).then((response)=>{
    return response.json()
  }).then((response)=>{
    return response
  })
}

export const createCategory=(information)=>{
  const url = urls.createCategory
  const body = information

  return httpService.post(url,body).then((response)=>{
    
    return response.status
   
  })
}