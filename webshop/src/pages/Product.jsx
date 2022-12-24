import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import { useProduct } from "../context/ProductsContextProvider";
import { useCart } from "../context/CartContextProvider";
import { mobile } from "../responsive";
import { SnipcartProvider } from 'use-snipcart';
import { useSnipcart } from 'use-snipcart';


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;


const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid black;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
  const { addToCart, items } = useCart();
  const { product, loading, setProductID } = useProduct();
  const findCartItem = items.find((item) => item.id === product.id);
  const { product_id } = useParams();



  useEffect(() => {
    setProductID(product_id);
  }, []);

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={product.image} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.description}</Desc>
          <Price>{product.price} $</Price>
          <FilterContainer>
      
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <button type="button"
                className="snipcart-add-item"
                data-item-name={product.title}
                data-item-price={product.price}
                data-item-max-quantity={product.Qte}
                data-item-id={product.id}
                data-item-url="/">
                  ADD TO CART</button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;