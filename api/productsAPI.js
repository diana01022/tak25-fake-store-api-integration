/**
 * Kõik toodetean spetud API teaevused
 */

import { BASE_URL } from "./index.js";

export const getProducts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/products`);

        if (!response.ok) {
            throw Error("API päring ebaõnnestus!");
        }

        return await response.json();
    } catch (exception) {
        console.log(exception);
        throw exception;
    }
};

export const getProduct = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/products/${id}`);

        if (!response.ok) {
            throw Error("API päring ebaõnnestus!");
        }

        return await response.json();
    } catch (exception) {
        console.log(exception);
        throw exception;
    }
};

export const createProduct = async (product) => {
    try {
        const response = await fetch(`${BASE_URL}/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product),
        });

        if (!response.ok) {
            throw Error("API päring ebaõnnestus!");
        }

        return await response.json();
    } catch (exception) {
        console.log(exception);
    }
};



