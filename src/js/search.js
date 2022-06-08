"use strict"
import { getProductsSearch } from './api.js';
import { DisplayListProducts, SetupPagination } from './pagination.js';

const input = document.getElementById("search");
const send = document.getElementById("send");
const list_products = document.getElementById("listProducts");
const pagination_element = document.getElementById("pagination");

send.addEventListener("click", async (e) => {
    e.preventDefault();
    const name = input.value;
    DisplayListProducts(name, list_products,getProductsSearch);
    SetupPagination(name,pagination_element,getProductsSearch);
    input.value = "";
})



export default send;