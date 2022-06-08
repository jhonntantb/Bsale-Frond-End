
const list_products = document.getElementById("listProducts");
let current_page = 1;
let cards = 12;

export const DisplayListProducts  = async( parameter, wrapper, callback) =>{
    try {
        let start = cards*(current_page-1);
        const response = await callback(parameter,start,cards);
        wrapper.innerHTML ="";
        let paginatedItems =response.results;
        for(let i = 0 ; i < paginatedItems.length; i++){
            let product = paginatedItems[i];
            let item_element = document.createElement("li");
            item_element.innerHTML = `<div><h3 class="product_name">${product.name}</h3><img class="product_image" src="${product.url_image? product.url_image: "#"}"/><p>$ ${product.price}</p></div>`;
            wrapper.append(item_element);
        }   
    } catch (error) {
        console.log(error)
    }
}

export const SetupPagination = async ( parameter, wrapper, callback) => {
    try {
        wrapper.innerHTML = "";
        let start = cards*(current_page-1);
        const response = await callback(parameter, start, cards);
        const totalItems = response.totalItems;
        let page_count = Math.ceil(totalItems/cards);
        for( let i = 1; i <= page_count; i++ ){
            let btn = PaginationButton(i,parameter, callback);
            wrapper.append(btn);
        }
    } catch (error) {
        console.log(error);
    }
    
}

const PaginationButton = (page, parameter, callback) =>{
    let button = document.createElement("button");
    button.innerText = page;

    if (current_page == page) button.classList.add("active");

    button.addEventListener("click", () => {
        current_page = page;
        DisplayListProducts(parameter, list_products, callback);

        let current_btn = document.querySelector(".pagenumbers button.active");
        current_btn.classList.remove("active");

        button.classList.add("active");
    });
    return button;
}