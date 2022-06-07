import { apiUrl } from './config.js';

export const getProducts = async (start, size=12) => {
    try {
      const response = await fetch(`${apiUrl}/api/products?start=${start}&size=${size}`);
      const res =await response.json()
      return res;
    } catch (err) {
      console.log(err);
      return { error: err };
    }
  };

  export const getCategories = async (start, size=10) => {
    try {
      const response = await fetch(`${apiUrl}/api/category?start=${start}&size=${size}`);
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

  export const getProductByCategory = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/api/products/category?categoryId=${id}`);
      const res = await response.json()
      return res.results;
    } catch (err) {
      console.log(err);
      return { error: err };
    }
  };