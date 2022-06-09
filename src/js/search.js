"use strict"
import { getProductsSearch } from "./api.js";
import { DisplayListProducts, SetupPagination } from "./pagination.js";

const input = document.getElementById("search");
const send = document.getElementById("send");
const list_products = document.getElementById("listProducts");
const pagination_element = document.getElementById("pagination");

send.addEventListener("click", async (e) => {
    e.preventDefault();
    const input_value = input.value;
    const name = input_value.trim();
    let current_li = document.querySelector("#categories li.active");
    if(current_li){
        current_li.classList.remove("active");
    }
    if(name.length > 0){
        DisplayListProducts(1, name, list_products,getProductsSearch);
        SetupPagination(name,pagination_element,getProductsSearch);
    }else{
        alert("Enter a word")
    }
    
    input.value = "";
});

export default send;