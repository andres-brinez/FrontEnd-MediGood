import products from "./Products.json"

function searchProductByName(name) {
  return products.filter((product) => product.name.toLowerCase().includes(name.toLowerCase()));
}

export default searchProductByName;