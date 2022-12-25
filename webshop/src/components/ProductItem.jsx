import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Title = styled.h1`
  font-weight: 200;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`; 

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;

const Container = styled.div`
    display: flex;
    margin: 5px;
    min-width: 280px;
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eee4e9;
    position: relative;
    &:hover ${Info}{
      opacity: 1;
    }
  `;

const Circle = styled.div`
    border-radius: 50%;
    background-color: white;
    position: absolute;
  `;

const Image = styled.img`
    bottom: 0;
    left: 0;
    margin-bottom: 16px;
    margin-top: 16px;
    max-height: 224px;
    object-fit: contain;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 2;
  `;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
      background-color: #eee4e9;
      transform: scale(1.1);
    }
  `;

const ProductItem = ({ item }) => {
  return (

    <Link to={`/product/${item.id}`}>
      <Container>
        <Image src={item.image} />
        <Info>
          {/* <Icon>
            <ShoppingCartOutlined />
          </Icon> */}
          <Icon>
            <SearchOutlined />
          </Icon>
          {/* <Icon>
            <FavoriteBorderOutlined />
          </Icon> */}
        </Info>
      </Container>
    </Link>
  );
};

export default ProductItem;