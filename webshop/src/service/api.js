import axios from "axios";

const BASE_URL = "http://localhost:1337";

export const getProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
};
