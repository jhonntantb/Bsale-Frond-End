"use strict"
import { getProducts } from './api.js'

const products = document.getElementById("listProducts")


const getAllProducts = async() =>{
    const getProductList= await getProducts();

    for(let product of getProductList){
        const li = document.createElement("li");
        li.innerHTML = `<div><h3 class="product_name">${product.name}</h3><img class="product_image" src="${product.url_image}"/><p>$ ${product.price}</p></div>`;
        products.append(li)
    }

} 

getAllProducts();


export default products;
