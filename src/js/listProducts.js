"use strict"
import { getProducts } from './api.js'

export const list_products = document.getElementById("listProducts");
const pagination_element = document.getElementById("pagination");


let current_page = 1;
let cards = 12;

const DisplayList  = async (wrapper, cards_per_page, page) =>{
    try {
        wrapper.innerHTML ="";
        page--;
        let start = cards_per_page*page;
        const items = await getProducts(start); 
        let paginatedItems = items.results;

        for(let i = 0 ; i < paginatedItems.length; i++){
            let item = paginatedItems[i];
            let item_element = document.createElement("li");
            item_element.innerHTML = `<div><h3 class="product_name">${item.name}</h3><img class="product_image" src="${item.url_image}"/><p>$ ${item.price}</p></div>`;
            wrapper.append(item_element);
        }   
    } catch (error) {
        console.log(error)
    }
}
export const SetupPagination = async (wrapper,cards_per_page) => {
    wrapper.innerHTML = "";
    let start = cards_per_page*current_page;
    const response = await getProducts(start);
    const totalItems = response.totalItems;
    let page_count = Math.ceil(totalItems/cards_per_page);
    console.log(page_count)
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
        DisplayList(list_products, cards,current_page);

        let current_btn = document.querySelector(".pagenumbers button.active");
        current_btn.classList.remove("active");

        button.classList.add("active");
    });
    return button;
}
DisplayList(list_products, cards, current_page);
SetupPagination(pagination_element, cards)

export default list_products;
