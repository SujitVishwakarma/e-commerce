import React from 'react'
import styled from 'styled-components'
import { AiOutlineShoppingCart, AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'


const Info = styled.div`
    opacity:0;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.2);
    z-index: 3;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:all 0.5s ease;
`
const Container = styled.div`
    flex:1;
    margin:8px;
    min-width:280px;
    height:350px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#f5fbfd;
    position:relative;
    ${'' /* overflow:hideen; */}
    &:hover ${Info}{
        opacity:1;
    }
`
const Circle = styled.div`
    width:350px;
    height:320px;
    border-radius:50%;
    background-color:white;
    position:absolute;
`
const Image = styled.img`
    height:100%;
    width:100%;
    background-color:gray;
    transition:all 0.5s ease;
    z-index:2;
`

const Icon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px;
    background-color:white;
    transition:all 0.5s ease;

    &:hover{
        background-color:#e9f5f5;
        transform:scale(1.1);
    }
`


const Product = ({ item }) => {
    return (
        <Container>
            <Circle>
                <Image src={item.img} />
                <Info>
                    <Icon>
                        <AiOutlineShoppingCart />
                    </Icon>
                    <Icon>
                        <Link to={'/product/${item.id'}>
                            <AiOutlineSearch />
                        </Link>
                    </Icon>
                    <Icon>
                        <AiOutlineHeart />
                    </Icon>
                </Info>
            </Circle>

        </Container>
    )
}

export default Product
