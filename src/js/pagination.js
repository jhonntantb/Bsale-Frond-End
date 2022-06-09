
const list_products = document.getElementById("listProducts");
let current_page = 1;
let cards = 12;

export const DisplayListProducts  = async(setpage, parameter, wrapper, callback) =>{
    try {
        if(setpage&&typeof setpage==="number") current_page = setpage;
        let start = cards*(current_page-1);
        const response = await callback(parameter,start,cards);
        wrapper.innerHTML ="";
        let paginatedItems =response.results;
        for(let i = 0 ; i < paginatedItems.length; i++){
            let product = paginatedItems[i];
            let url_image = product.url_image || "./images/imgNotFound.jpg" ;
            let item_element = document.createElement("li");
            item_element.innerHTML = `<div><h3 class="productName">${product.name}</h3><img class="productImage" src="${url_image }" /><p>$ ${product.price}</p></div>`;
            wrapper.append(item_element);
        } 
        if(current_page===1){

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
            if(i===1){
                let btn_prev = Btn_prev(parameter,callback);
                btn_prev.setAttribute("disabled","true");
                wrapper.append(btn_prev);
            }
            let btn = PaginationButton(i,parameter, callback);
            wrapper.append(btn);
            if(i===page_count){
                let btn_next = Btn_next(parameter,callback);
                wrapper.append(btn_next);
            }
            /* if the pages are in total 1 */
            if(current_page===page_count){
                const button_next = document.getElementById("btn_next");
                button_next.setAttribute("disabled",true)
            }
        }
    } catch (error) {
        console.log(error);
    }
    
}

const PaginationButton = (page, parameter, callback) =>{
    let button = document.createElement("button");
    button.innerText = page;
    button.setAttribute("id",`${page}`);
    button.classList.add("btn")
    /* active page 1 for any query*/
    if (current_page == page) button.classList.add("active");

    button.addEventListener("click", () => {
        current_page = page;

        /* query products and and set attributes for styled */
        DisplayListProducts(null, parameter, list_products, callback);
        let current_btn = document.querySelector(".pagenumbers button.active");
        current_btn.classList.remove("active");
        button.classList.add("active");

        /* button prev enabled */
        if(current_page > 1){
            const button_prev = document.getElementById("btn_prev");
            button_prev.removeAttribute("disabled");
        }

        /* button next enabled */
        const total_pages = document.querySelectorAll(".btn");
        if(current_page < total_pages.length){
            const button_next = document.getElementById("btn_next");
            button_next.removeAttribute("disabled")
        }
        /* button next disabled */
        if(current_page === total_pages.length){
            const button_next = document.getElementById("btn_next");
            button_next.setAttribute("disabled",true)
        }

    });
    return button;
}

const Btn_prev = (parameter,callback) => {
    let btn_prev = document.createElement("button")
    btn_prev.innerText = "«"
    btn_prev.setAttribute("id","btn_prev")

    btn_prev.addEventListener("click", () => {
        let current_btn = document.querySelector(".pagenumbers button.active");
        const value = parseInt(current_btn.innerHTML);
        if(value > 1) current_page = value-1;

        /* button prev disabled */
        if(current_page ===1){
            const button_prev = document.getElementById("btn_prev");
            button_prev.setAttribute("disabled","true");
        }

        /* query products and and set attributes for styled */
        DisplayListProducts(null,parameter,list_products,callback);
        current_btn.classList.remove("active");
        const button_prev = document.getElementById(`${value-1}`);
        button_prev.classList.add("active");

        /* button next enabled */
        const total_pages = document.querySelectorAll(".btn");
        if(current_page < total_pages.length){
            const button_next = document.getElementById("btn_next");
            button_next.removeAttribute("disabled")
        }

    })
    return btn_prev;
};

const Btn_next = (parameter,callback) =>{
    let btn_next = document.createElement("button")
    btn_next.innerText = "»";
    btn_next.setAttribute("id","btn_next");

    btn_next.addEventListener("click", () => {
        let current_btn = document.querySelector(".pagenumbers button.active");
        const value = parseInt(current_btn.innerHTML);
        current_page = value + 1;

        /* button prev enabled */
        if(current_page > 1){
            const button_prev = document.getElementById("btn_prev");
            button_prev.removeAttribute("disabled");
            console.log(button_prev);
        }

        /* query products and and set attributes for styled */
        DisplayListProducts(null,parameter,list_products,callback);
        current_btn.classList.remove("active");
        const button_next = document.getElementById(`${value+1}`);
        button_next.classList.add("active");

        /* button next disabled */
        const total_pages = document.querySelectorAll(".btn");
        if(current_page===total_pages.length){
            const button_next = document.getElementById("btn_next");
            button_next.setAttribute("disabled",true)
        }
    })
    return btn_next;
}