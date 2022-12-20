import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { useProduct } from "../context/ProductsContextProvider";
import ProductItem from "../components/ProductItem";
import { mobile } from "../responsive";
import { useParams } from "react-router-dom";

const ProductContainer = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

function Home() {
  const { products, setCategory } = useProduct();

  const {category_id} = useParams()

  useEffect(() => {
    setCategory(category_id)
  }, [category_id])

  return (
    <ProductContainer> 
      {products.map((product) => (
      <ProductItem key={product.id} productData={product} />
    ))}
    </ProductContainer>
  )
}

export default Home