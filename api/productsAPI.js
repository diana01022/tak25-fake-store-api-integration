/**
 * Kõik toodetean spetud API teaevused
 */


import { BASE_URL } from "./index.js";

export const getProducts = async () => {
    const response = await fetch(`${BASE_URL}/products`);
    return await response.json();
};


