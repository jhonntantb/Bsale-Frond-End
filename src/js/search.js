"use strict"
import { getProductsSearch } from './api.js'

const input = document.getElementById("search");
const send = document.getElementById("send");
const listProducts = document.getElementById("listProducts");

send.addEventListener("click", async (e) => {
    e.preventDefault();
    const name = input.value;
    const response =await getProductsSearch(name);
    const products = response;
    
    listProducts.innerHTML = "";
    
    for(let product of products){
        const li = document.createElement("li")
        li.innerHTML = `<div><h3 class="product_name">${product.name}</h3><img class="product_image" src="${product.url_image}"/><p>$ ${product.price}</p></div>`;
        listProducts.append(li)
    }
})

export default send;