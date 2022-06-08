"use strict"
import { getProductByCategory, getCategories } from './api.js';
import { DisplayListProducts, SetupPagination } from './pagination.js'

const arr = [1,2,3,4,5,6,7]

const list_products = document.getElementById("listProducts");
const pagination_element = document.getElementById("pagination");
const ul_categories = document.getElementById("categories")

// for(let i of arr){
//     const button = document.getElementById(`${i}`);
//     button.addEventListener("click", async () => {
//         DisplayListProducts(1, i, list_products, getProductByCategory);
//         SetupPagination(i, pagination_element, getProductByCategory);  
//     })   
// };

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
        // let current_li = document.querySelector(".categories li.active");
        // current_li.classList.remove("active");
        li.classList.add("active");
    });
    return li;
};

SetupCategories(ul_categories, getProductByCategory);

export default list_products;

