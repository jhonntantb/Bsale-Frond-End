"use strict"
import { getProductByCategory, getCategories } from './api.js';
import { DisplayListProducts, SetupPagination } from './pagination.js'

const list_products = document.getElementById("listProducts");
const pagination_element = document.getElementById("pagination");
const ul_categories = document.getElementById("categories")

const SetupCategories = async (wrapper,callback) => {
    try {
        wrapper.innerHTML = "";
        const query = await getCategories();

        for( let i = 1; i < query.length; i++ ){
            const category = query[i];
            let li = LisCategories( category.id,category.name, callback);
            wrapper.append(li);
        }
    } catch (error) {
        console.log({error})
    }
}

const LisCategories = (idCategory, name, callback) =>{
    let li = document.createElement("li");
    li.innerText = name;
    li.addEventListener("click", () => {
        DisplayListProducts(null, idCategory, list_products, callback);
        SetupPagination(idCategory,pagination_element,getProductByCategory)
        let current_li = document.querySelector("#categories li.active");
        if(current_li){
            current_li.classList.remove("active");
        }
        li.classList.add("active");
    });
    return li;
};

SetupCategories(ul_categories, getProductByCategory);

export default ul_categories;

