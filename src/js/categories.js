"use strict"
import { getProductByCategory } from './api.js';

const arr = [1,2,3,4,5,6,7]

const products = document.getElementById("listProducts");

for(let i of arr){
    const button = document.getElementById(`${i}`);
    button.addEventListener("click", async () => {
    const getProductList= await getProductByCategory(i);
    products.innerHTML = "";
        for(let product of getProductList){
            const li = document.createElement("li");
            li.innerHTML = `<div><h3 class="product_name">${product.name}</h3><img class="product_image" src="${product.url_image}"/><p>$ ${product.price}</p></div>`;
            products.append(li)
        }
    })
}

export default products;

