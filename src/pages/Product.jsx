import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import {Add, Remove} from '@material-ui/icons'
import {mobile} from '../responsive'

const Container = styled.div`
    
`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding: "10px", flexDirection:"column"})}
`;
const ImgContainer = styled.div`
    flex: 1;

`;
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit:cover;
    ${mobile({height: "40vh"})}
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({
        padding: "10px"
    })}
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
    width: 100%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({
        width: "100%", justifyContent: "space-around"
    })}    
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
`;
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;
const FilterOption = styled.select`
    margin-left: 10px;
    padding: 5px;
`;
const FilterOptionSelect = styled.option`
    
`;
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({
        width: "100%"
    })} 
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
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: lightgrey;
    }
`;

const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                    <Image src="https://images.unsplash.com/photo-1528553688096-8e0735356dae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=836&q=80"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Title</Title>
                    <Desc>Some Test Description, Some Test Description,
                        Some Test Description, Some Test Description, Some Test Description</Desc>
                    <Price>20$</Price>
                    <FilterContainer>
                    <Filter>
                            <FilterTitle>Test Filter</FilterTitle>
                            <FilterOption>
                                <FilterOptionSelect>Filter Option One</FilterOptionSelect>
                                <FilterOptionSelect>Filter Option Two</FilterOptionSelect>
                                <FilterOptionSelect>Filter Option Three</FilterOptionSelect>
                                <FilterOptionSelect>Filter Option Four</FilterOptionSelect>
                            </FilterOption>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>Add to cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product
