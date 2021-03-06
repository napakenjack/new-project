import React from 'react'
import {useSelector} from "react-redux"
import {Search, ShoppingCartOutlined} from '@material-ui/icons'
import Badge from '@mui/material/Badge';
import styled from 'styled-components'
import {mobile} from '../responsive'
import {Link} from 'react-router-dom'
import Cart from '../pages/Cart'

const Container =  styled.div`
    height: 60px;
    ${mobile({
        height: "50px"
    })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({
        padding: "10px 0px"
    })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({
        display: "none"
    })}
`;

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`;


const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({
        fontSize: "17px"
    })}
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex: 2,
        justifyContent: "center"        
    })}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({
        fontSize: "12px",
        marginLeft: "10px"
    })}
`;

const Navbar = () => {

    const quantity = useSelector(state=>state.cart.quantity);

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        ENG
                    </Language>
                    <SearchContainer>
                        <Input placeholder="Search"/>
                        <Search style={{color:"grey", fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center><Logo>herbal-i inc.</Logo></Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign in</MenuItem>
                    <Link to="/cart">
                    <MenuItem>
                    <Badge badgeContent={quantity} color="primary">
                          <ShoppingCartOutlined/>
                    </Badge>
                    </MenuItem>
                    </Link>
                </Right>
            </Wrapper>            
        </Container >
    )
}

export default Navbar
