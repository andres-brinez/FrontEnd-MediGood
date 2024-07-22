import { StorageService } from "./StorageService";

const storageService = new StorageService();


const baseHeaders = {
  'Content-Type': 'application/json'
};


// Verifica si hay un token disponible
const getHeadersWithAuthToken = () => {
  const token = storageService.get('TOKEN');
  return token ? { ...baseHeaders, 'Authorization': `Bearer ${token}` } : baseHeaders;
};

// Para cuando se requiera usar formData
// LOs headers los pone el navegadro
const getFormDataHeadersWithAuthToken = () => {
  const token = storageService.get('TOKEN');
  return token ? { 'Authorization': `Bearer ${token}` } : {};
};

const httpService = {
  post: (url, body) => fetch(url, { headers: getHeadersWithAuthToken(), method: 'POST', body: JSON.stringify(body) }),
  // el body no se pasa a json porque es un formData
  postFormData: (url, formData) => fetch(url, { headers: getFormDataHeadersWithAuthToken() , method: 'POST', body: formData }),
  get: (url) => fetch(url, { headers: getHeadersWithAuthToken(), method: 'GET' }),
  put: (url, body) => fetch(url, { headers: getHeadersWithAuthToken(), method: 'PUT', body: JSON.stringify(body) })
  // Puedes añadir más métodos según sea necesario, asegurándote de usar getHeadersWithAuthToken() para obtener los encabezados adecuados
};

export default httpService;
