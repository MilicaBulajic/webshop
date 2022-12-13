import React from "react";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Container = styled.div`
  height: 60px;
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
  return (
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
  );
};

export default Navbar;