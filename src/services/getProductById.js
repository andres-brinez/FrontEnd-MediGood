import products from "./Products.json"


const getProductById= (id) =>{
  const productFind= products.find((product) => product.id == id);
  return productFind;
}

// export default getProductById;