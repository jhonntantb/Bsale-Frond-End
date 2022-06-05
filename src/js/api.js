import { apiUrl } from './config.js';

export const getProducts = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/products`);
      const res =await response.json()
      if (response.statusText !== 'OK') {
        throw new Error(response.data.message);
      }
      return res.results;
    } catch (err) {
      console.log(err);
      return { error: err.response.data.message || err.message };
    }
  };

  export const getCategories = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/category`);
      if (response.statusText !== 'OK') {
        throw new Error('error');
      }
      const responseParser = await response.json()
      return responseParser;
    } catch (err) {
      console.log(err);
      return { error: err || err };
    }
  }

  export const getProductsSearch = async (name) => {
    try {
      const response = await fetch(`${apiUrl}/api/products/search?search=${name}`);
      if (response.statusText !== 'OK') {
        throw new Error("Error");
      }
      const res = await response.json()
      return res.results;
    } catch (err) {
      console.log(err);
      return { error: err || err.message };
    }
  };

  export const getProductByCategory = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/api/products/category?categoryId=${id}`);
      if (response.statusText !== 'OK') {
        throw new Error("error");
      }
      const res = await response.json()
      return res.results;
    } catch (err) {
      console.log(err);
      return { error: err || err };
    }
  };