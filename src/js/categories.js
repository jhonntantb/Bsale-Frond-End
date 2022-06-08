"use strict"
import { getProductByCategory } from './api.js';
import { DisplayListProducts, SetupPagination } from './pagination.js'

const arr = [1,2,3,4,5,6,7]

const list_products = document.getElementById("listProducts");
const pagination_element = document.getElementById("pagination");

for(let i of arr){
    const button = document.getElementById(`${i}`);
    button.addEventListener("click", async () => {
        DisplayListProducts(1, i, list_products, getProductByCategory);
        SetupPagination(i, pagination_element, getProductByCategory);  
    })   
}

export default list_products;

