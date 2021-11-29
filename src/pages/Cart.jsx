import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {Add, Remove} from '@material-ui/icons'
import {mobile} from '../responsive'

const Container = styled.div`

`;
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding: "10px"})}
`;
const Title = styled.h1`
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
    border: ${(props)=>props.type === "filled" && "none"};
    background-color: ${(props) =>
        props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"}
`;
const TopTexts = styled.div`

`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
    ${mobile({display: "none"})}
`;

const Bottom = styled.div`
    display:flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`;
const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
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
const ProductName = styled.span`
    
`;
const ProductId = styled.span`
    
`;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.span`
   display:flex;
   align-items: center; 
   margin-bottom: 20px;
`;

const ProductAmount = styled.span`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin: "5px 15px"})}
`;

const ProductPrice = styled.span`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom: "20px"})}
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
    margin: 5px;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`
    
`;

const SummaryItemPrice = styled.span`
    
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;




const Cart = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>Your Cart</Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">Checkout Now</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
                                <Details>
                                    <ProductName><b>Product:</b>Some name for product</ProductName>
                                    <ProductId><b>Product:</b>3252353245</ProductId>                                
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src="https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
                                <Details>
                                    <ProductName><b>Product:</b>Some name for product</ProductName>
                                    <ProductId><b>Product:</b>3252353245</ProductId>                                
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                        </Product>
                        </Info>
                    <Summary>
                        <SummaryTitle>OrderSummary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shippping Discount</SummaryItemText>
                            <SummaryItemPrice>- $ 5.9</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$80</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Checkout NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart
