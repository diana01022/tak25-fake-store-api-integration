import { getProducts } from "../api/productsAPI.js";

const products = await getProducts();
console.log (products)