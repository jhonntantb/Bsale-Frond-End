import { apiUrl } from './config.js';

export const getProducts = async (_parameter,start, size=10) => {
    try {
      const response = await fetch(`${apiUrl}/api/products?start=${start}&size=${size}`);
      const res =await response.json()
      return res;
    } catch (err) {
      console.log(err);
      return { error: err };
    }
  };

  export const getCategories = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/category`);
      const responseParser = await response.json()
      return responseParser;
    } catch (err) {
      console.log(err);
      return { error: err };
    }
  }

  export const getProductsSearch = async (name, start, size=10) => {
    try {
      const response = await fetch(`${apiUrl}/api/products/search?search=${name}&start=${start}&size=${size}`);
      const res = await response.json();
      return res;
    } catch (err) {
      console.log(err);
      return { error: err };
    }
  };

  export const getProductByCategory = async (id, start, size=10) => {
    try {
      const response = await fetch(`${apiUrl}/api/products/category?categoryId=${id}&start=${start}&size=${size}`);
      const res = await response.json()
      return res;
    } catch (err) {
      console.log(err);
      return { error: err };
    }
  };

  export const getProductWithDiscount = async (parameter,start, size=10) => {
    try {
      const response = await fetch(`${apiUrl}/api/products/discount?start=${start}&size=${size}`);
      const res = await response.json()
      return res;
    } catch (err) {
      console.log(err);
      return { error: err };
    }
  };