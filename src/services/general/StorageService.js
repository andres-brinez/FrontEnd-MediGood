export class StorageService {
  get(key) {
    const item = localStorage.getItem(key);
    if (item === null || item === "undefined") {
      return null;
    }
    return JSON.parse(item);
  }

  set(key, payload) {
    localStorage.setItem(key, JSON.stringify(payload));
  }

  remove(key) {
    localStorage.removeItem(key);
  }
}
