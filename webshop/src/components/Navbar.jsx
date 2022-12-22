import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useProduct } from "../context/ProductsContextProvider";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
`;

const MenuContainer = styled.div`
  height: 40px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  align-items: center;
`;

const Menu = styled.div`
  display: flex;
`;

const MenuLink = styled(Link)`
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
  display: flex;
  text-decoration: none;
  color: black;

  &:active{
    color: black;
  }
  &:hover{
  background-color: lightgray;
  }
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
`;

const SearchBox = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 5px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  width: 100%;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  margin: 0;
`;
const Right = styled.div`
  flex: 1;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  float: right;
`;

const Navbar = () => {
  const { categories, setCategory } = useProduct()
  return (
    <>
    <Container>
      <Wrapper>
        <Left>
          <SearchBox>
            <Input />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchBox>
        </Left>
        <Center>
          <Logo>STORE.</Logo>
        </Center>
        <Right>
          <MenuItem>
            <ShoppingCartIcon />
          </MenuItem>
        </Right>
      </Wrapper>
      </Container>
      <MenuContainer>
       
          <Menu>
            <div>
              <MenuLink
                to="/"
                onClick={() => setCategory("")}
              >
                All
              </MenuLink>
            </div>
           
              {categories &&
                categories.map((item, index) => {
                  return (
                    <div key={`${item}-${index}`}>
                      <MenuLink
                        to={`/${item.toLowerCase()}`}
                        onClick={() => {
                          setCategory(item.toLowerCase());
                        }}
                      >
                        {item}
                      </MenuLink>
                    </div>
                  );
                })}
           
          </Menu>
       
      </MenuContainer>
      </>
  );
};

export default Navbar;