import React, { useContext } from "react";
import styled from "styled-components";
import { ProductsContext } from "../context/ProductsContextProvider";
import ProductItem from "../components/ProductItem";
import { mobile } from "../responsive";

const ProductContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

function Home() {
  const products = useContext(ProductsContext);
  return (
    <ProductContainer> 
      {products.map((product) => (
      <ProductItem key={product.id} productData={product} />
    ))}
    </ProductContainer>
  )
}

export default Home