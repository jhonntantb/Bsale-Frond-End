"use strict"
import { getProducts } from './api.js';
import { DisplayListProducts, SetupPagination} from './pagination.js';

const list_products = document.getElementById("listProducts");
const pagination_element = document.getElementById("pagination");

/* charge web*/
DisplayListProducts(1, null, list_products, getProducts);
SetupPagination(null, pagination_element,getProducts);

/* push click Logo */

const logo_element = document.getElementById("logo");

logo_element.addEventListener("click",() => {
    let current_li = document.querySelector("#categories li.active");
    if(current_li){
        current_li.classList.remove("active");
    }
    DisplayListProducts(1, null, list_products, getProducts);
    SetupPagination(null, pagination_element,getProducts);
})

export default list_products;
