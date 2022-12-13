import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const getProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products/category/women's clothing`);
  return response.data;
};
