import { urls } from "../resources/url"
import httpService from "./general/http";

export const getUserByEmail= (email)=>{

  const url= urls.getInformationProfile+email;
  return httpService.get(url).then((response)=>{
    if(response.status===200){
      return response.json();
    }else{
      return false;
    }
  })
}


export const editUser= (information)=>{

  const url= urls.editUser;
  const body= information

  return httpService.post(url,body).then((response)=>{
    if(response.status===200){
      return response.json();
    }else{
      return false;
    }
  })
}


