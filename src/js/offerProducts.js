import { getProductWithDiscount } from "./api.js";
import { DisplayListProducts, SetupPagination}  from "./pagination.js"

const list_products = document.getElementById("listProducts");
const pagination_element = document.getElementById("pagination")
const sale_button = document.getElementById("sale");

sale_button.addEventListener("click", async(e) =>{
    e.preventDefault();
    DisplayListProducts(1 , null, list_products, getProductWithDiscount);
    SetupPagination(null, pagination_element,getProductWithDiscount);
})
export default sale_button;