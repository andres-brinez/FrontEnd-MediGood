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

const httpService = {
  post: (url, body) => fetch(url, { headers: getHeadersWithAuthToken(), method: 'POST', body: JSON.stringify(body) }),
  get: (url) => fetch(url, { headers: getHeadersWithAuthToken(), method: 'GET' }),
  // Puedes añadir más métodos según sea necesario, asegurándote de usar getHeadersWithAuthToken() para obtener los encabezados adecuados
};

export default httpService;
