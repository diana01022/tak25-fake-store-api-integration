import { createProduct, updateProduct } from "./api/productsAPI.js";

const shirt = {
    title: "Green Shirt",
    price: 19.99,
    description: "A nice green shirt.",
    category: "clothing",
    image: "https://example.com/green-shirt.jpg"
};

const createdProduct = await createProduct(shirt);
console.log(createdProduct);

const updatedShirt = {
    title: "Yellow Shirt",
}:
const updatedProduct = await updateProduct(21, updatedShirt);
console.log(updatedProduct);