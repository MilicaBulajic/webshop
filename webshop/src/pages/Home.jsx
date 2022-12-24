import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { useProduct } from "../context/ProductsContextProvider";
import { useCart } from "../context/CartContextProvider";
import ProductItem from "../components/ProductItem";
import { mobile } from "../responsive";
import { useParams } from "react-router-dom";

const ProductContainer = styled.div`
  display: flex;
  place-items: center stretch;
  margin-top: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

function Home() {
  const { products, setCategory, setProductID } = useProduct();
  const { addToCart, items } = useCart();
  const {category_id} = useParams();

  useEffect(() => {
    setCategory(category_id)
  }, [category_id])

  return (
    <ProductContainer> 
      {products.map((item, index) => {
      const findCartItem = items.find((cart_item) => cart_item.id === item.id)
      return (
      <ProductItem key={`product-${index}`} addToCart={addToCart} item={item} setProductID={setProductID} findCartItem={findCartItem}  />
      );
    })}
    </ProductContainer>
  )
}

export default Home;