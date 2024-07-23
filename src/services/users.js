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