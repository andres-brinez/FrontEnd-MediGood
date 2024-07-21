// import authenticationMapper from "../mappers/authentication.mapper";
import { urls } from "../resources/url";
import httpService from "./general/http";
import { StorageService } from "./general/StorageService";

export const authServiceLogin = (credentials) => {
  const url = urls.login;
  // TODO: Crear mapper para pasar los tipos de datos que se reciben del formulario a los que se necesitan para el backend
  // const body = authenticationMapper.toApiLogin(credentials);
  const body = credentials;

  return httpService.post(url, body)
    .then((response) => response.json())
    .then((response) => {

      const storage = new StorageService();
      storage.set('TOKEN', response.token);
      return response.token;

    });
}

export const authServiceRegister = (credentials) => {
  const url = urls.registerUser;
  const body = credentials;
  return httpService.post(url, body)
    .then((response) => {
      if (response.status === 200) {
        return true;
      } else {
        return false;
      }
    })

}
