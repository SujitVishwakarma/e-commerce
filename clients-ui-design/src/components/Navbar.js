import React from 'react'
import styled from 'styled-components'
// import '../App.css';
import {AiOutlineSearch,AiOutlineShoppingCart} from 'react-icons/ai'
import {BiBadge} from 'react-icons/bi'
import { mobile } from '../assets/Responsive'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Container = styled.div`
    height: 60px;
    ${mobile({height:'50px'})}
`
const Wrapper = styled.div`
    padding:10px 20px;
    display: flex;
    align-items:center;
    justify-content: space-between;
    ${mobile({padding:'10px 0px'})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display:'none'})}
`
const SearchContainer =styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    padding: 5px; 
    margin-left:25px;
`
const Input = styled.input`
    border:none;
    ${mobile({width:'50px'})}
`
const Logo = styled.h1`
    font-weight: bold;
    text-align:center;
    ${mobile({fontSize:'24px'})}
`
const Center = styled.div`
    flex: 1;
`
const Right = styled.div`
    flex: 1;
    display:flex;
    align-items:center;
    justify-content: flex-end;
    ${mobile({flex:2,justifyContent:'center'})}
`
const MenuItem = styled.div`
    cursor:pointer;
    font-size:14px;
    margin-left:25px;
    ${mobile({fontSize:'12px',marginLeft:'10px'})}
`



const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)

  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search'/>
                    <AiOutlineSearch style={{color:"gray", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center><Logo>WIKI.</Logo></Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <Link to={'/cart'}>
                <MenuItem>
                    <AiOutlineShoppingCart AiOutlineShoppingCartContent ={quantity} color='primary'/>
                </MenuItem>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
