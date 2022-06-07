"use strict"
import { getProductsSearch } from './api.js'

const input = document.getElementById("search");
const send = document.getElementById("send");
const listProducts = document.getElementById("listProducts");
const pagination_element = document.getElementById("pagination");
let current_page = 1;
let cards = 12;

send.addEventListener("click", async (e) => {
    e.preventDefault();
    const name = input.value;
    
    const DisplayListSearch  = async( name, wrapper) =>{
        try {
            let start = cards*(current_page-1);
            const response = await getProductsSearch(name, start,cards);
            wrapper.innerHTML ="";
            let paginatedItems =response.results
            for(let i = 0 ; i < paginatedItems.length; i++){
                let product = paginatedItems[i];
                let item_element = document.createElement("li");
                item_element.innerHTML = `<div><h3 class="product_name">${product.name}</h3><img class="product_image" src="${product.url_image}"/><p>$ ${product.price}</p></div>`;
                wrapper.append(item_element);
            }   
        } catch (error) {
            console.log(error)
        }
    }
    
    const SetupPagination = async ( name, wrapper,cards_per_page) => {
        wrapper.innerHTML = "";
        const response = await getProductsSearch(name, current_page*cards, cards)
        const totalItems = response.totalItems;
        let page_count = Math.ceil(totalItems/cards_per_page);
        for( let i = 1; i <= page_count; i++ ){
            let btn = PaginationButton(i);
            wrapper.append(btn)
        }
    }

    const PaginationButton = (page) =>{
        let button = document.createElement("button");
        button.innerText = page;
    
        if (current_page == page) button.classList.add("active");
    
        button.addEventListener("click", () => {
            current_page = page;
            DisplayListSearch(name, listProducts);
    
            let current_btn = document.querySelector(".pagenumbers button.active");
            current_btn.classList.remove("active");
    
            button.classList.add("active");
        });
        return button;
    }
    DisplayListSearch(name, listProducts);
    SetupPagination(name,pagination_element, cards);
})



export default send;