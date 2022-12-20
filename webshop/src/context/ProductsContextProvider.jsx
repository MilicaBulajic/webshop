import React, { useState, useEffect, createContext, useContext } from "react";
import axios from 'axios';
const ProductsContext = createContext()

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState();
  const [category, setCategory] = useState("/products");
  const [product, setProduct] = useState({});
  const [productID, setProductID] = useState("");

  useEffect(() => {
    const getProductData = async () => {
      
      if (category && category.length > 0) {
        await axios.get(
          `https://fakestoreapi.com/products/category/${category}`
        ).then((res) => {
          setProducts(res.data)
        })
      } else {
        await axios.get(`https://fakestoreapi.com/products`).then((res) => {
          setProducts(res.data)
          setCategory("")
        })
      }
    }
    getProductData()
  }, [category])

  useEffect(() => {
    const getCategories = async () => {
      let categoriesData
      await axios("https://fakestoreapi.com/products/categories").then(
        (res) =>
          (categoriesData = res.data.map((item) =>
            item.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase())
          ))
      )
      setCategories(categoriesData)
    }
    getCategories()
  }, [])

  useEffect(() => {
    const getProductDetail = async () => {   
      
       productID && productID.length > 0 && await axios.get(`https://fakestoreapi.com/products/${productID}`).then(
        (res) => {
          setProduct(res.data)
        }
      )
    }
    getProductDetail()
  }, [productID])


  const values = {
    product,
    products,
    productID,
    setProductID,
    categories,
    setCategory,
  }

  return (
    <ProductsContext.Provider value={values}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProduct = () => useContext(ProductsContext)