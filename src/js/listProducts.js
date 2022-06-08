"use strict"
import { getProducts } from './api.js';
import { DisplayListProducts, SetupPagination} from './pagination.js';

const list_products = document.getElementById("listProducts");
const pagination_element = document.getElementById("pagination");

DisplayListProducts(1, null, list_products, getProducts);
SetupPagination(null, pagination_element,getProducts);


export default list_products;
