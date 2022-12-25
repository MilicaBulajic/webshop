import Add from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from "styled-components";
import { useCart } from "../context/CartContextProvider";
import { mobile } from "../responsive";
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h2`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  ${mobile({ flexDirection: "column" })}

`;

const Info = styled.div`
flex-direction: column;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h3`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const { items, removeFromCart } = useCart();

  const subtotal = items.reduce((acc, obj) => acc + obj.price, 0).toFixed(1);
  return (
    <Container>
      {items.length < 1 && (
        <div>
          <Title>
            There are no products in your cart.
          </Title>
          <Title>
            Add the products you like to the cart and buy.
          </Title>
          <Link to="/">
            <div>
              <Link to="/">
                <TopButton>Continue Shopping</TopButton>
              </Link>
            </div>
          </Link>
        </div>
      )}
      <Title>YOUR BAG</Title>
      <Top>
        <Link to="/"><TopButton>CONTINUE SHOPPING</TopButton></Link>
        <TopButton type="filled">CHECKOUT NOW</TopButton>
      </Top>
      {items.map((item) => {
        return (
          <Wrapper>
            <Bottom>
              <Info>
                <Product>
                  <ProductDetail>
                    <Image src={item.image} />
                    <Details>
                      <ProductName>
                        {item.title}
                      </ProductName>
                      <ProductId>
                        SKU: {item.id}
                      </ProductId>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <DeleteIcon style={{ cursor: 'pointer' }} onClick={() => removeFromCart(item.id)} />
                    </ProductAmountContainer>
                    <ProductPrice>{item.price} $</ProductPrice>
                  </PriceDetail>
                </Product>
                <Hr />
              </Info>
            </Bottom>
          </Wrapper>
        );
      })}
      <Summary>
        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
        <SummaryItem>
          <SummaryItemText>Subtotal</SummaryItemText>
          <SummaryItemPrice>$ {subtotal}</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem>
          <SummaryItemText>Estimated Shipping</SummaryItemText>
          <SummaryItemPrice>$ 5</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem>
          <SummaryItemText>Shipping Discount</SummaryItemText>
          <SummaryItemPrice>$ 5</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem type="total">
          <SummaryItemText>Total</SummaryItemText>
          <SummaryItemPrice>$ {parseFloat(subtotal) + 10} </SummaryItemPrice>
        </SummaryItem>
        <Button>CHECKOUT NOW</Button>
      </Summary>
    </Container>
  );
};


export default Cart;
